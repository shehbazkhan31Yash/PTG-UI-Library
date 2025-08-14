import type React from 'react';
import { createContext, useContext, useReducer, useCallback } from 'react';
import { nanoid } from 'nanoid'; // Revert to nanoid import

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: any;
  message: string;
  customFunction?: string;
}

export interface ConditionalRule {
  field: string;
  operator: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan';
  value: any;
  action: 'show' | 'hide' | 'enable' | 'disable';
}

export interface FormElement {
  id: string;
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea'
    | 'date'
    | 'phone'
    | 'url'
    | 'file'
    | 'switch'
    | 'layout';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  validation?: ValidationRule[];
  conditional?: ConditionalRule[];
  properties?: Record<string, any>;
  children?: FormElement[];
  layoutConfig?: {
    columns: number;
    columnSizes?: number[];
    gap?: number;
  };
}

export interface FormBuilderState {
  formElements: FormElement[];
  selectedElement: FormElement | null;
  previewMode: boolean;
  formConfig: {
    title: string;
    description: string;
    submitUrl: string;
    method: 'POST' | 'GET';
    framework: 'react' | 'bootstrap' | 'materialui' | 'primereact' | 'antd';
  };
}

type FormBuilderAction =
  | {
      type: 'ADD_ELEMENT';
      element: FormElement;
      parentId?: string;
      index?: number;
    }
  | { type: 'UPDATE_ELEMENT'; id: string; updates: Partial<FormElement> }
  | { type: 'DELETE_ELEMENT'; id: string }
  | { type: 'SELECT_ELEMENT'; element: FormElement | null }
  | {
      type: 'REORDER_ELEMENTS';
      sourceIndex: number;
      destinationIndex: number;
      parentId?: string;
    }
  | { type: 'SET_PREVIEW_MODE'; previewMode: boolean }
  | {
      type: 'UPDATE_FORM_CONFIG';
      config: Partial<FormBuilderState['formConfig']>;
    }
  | { type: 'DUPLICATE_ELEMENT'; id: string }
  | {
      type: 'MOVE_ELEMENT';
      elementId: string;
      targetParentId?: string;
      targetIndex: number;
    };

const initialState: FormBuilderState = {
  formElements: [],
  selectedElement: null,
  previewMode: false,
  formConfig: {
    title: 'Untitled Form',
    description: '',
    submitUrl: '',
    method: 'POST',
    framework: 'react',
  },
};

function formBuilderReducer(
  state: FormBuilderState,
  action: FormBuilderAction
): FormBuilderState {
  switch (action.type) {
    case 'ADD_ELEMENT': {
      if (action.parentId) {
        // Add to layout container
        const updateElements = (elements: FormElement[]): FormElement[] => {
          return elements.map((element) => {
            if (element.id === action.parentId) {
              const children = element.children || [];
              const index =
                action.index !== undefined ? action.index : children.length;
              return {
                ...element,
                children: [
                  ...children.slice(0, index),
                  action.element,
                  ...children.slice(index),
                ],
              };
            }
            if (element.children) {
              return { ...element, children: updateElements(element.children) };
            }
            return element;
          });
        };
        return { ...state, formElements: updateElements(state.formElements) };
      } else {
        // Add to root level
        const index =
          action.index !== undefined ? action.index : state.formElements.length;
        return {
          ...state,
          formElements: [
            ...state.formElements.slice(0, index),
            action.element,
            ...state.formElements.slice(index),
          ],
        };
      }
    }

    case 'UPDATE_ELEMENT': {
      const updateElements = (elements: FormElement[]): FormElement[] => {
        return elements.map((element) => {
          if (element.id === action.id) {
            return { ...element, ...action.updates };
          }
          if (element.children) {
            return { ...element, children: updateElements(element.children) };
          }
          return element;
        });
      };

      const updatedElements = updateElements(state.formElements);
      const updatedSelectedElement =
        state.selectedElement?.id === action.id
          ? { ...state.selectedElement, ...action.updates }
          : state.selectedElement;

      return {
        ...state,
        formElements: updatedElements,
        selectedElement: updatedSelectedElement,
      };
    }

    case 'DELETE_ELEMENT': {
      const deleteElement = (elements: FormElement[]): FormElement[] => {
        return elements.filter((element) => {
          if (element.id === action.id) {
            return false;
          }
          if (element.children) {
            element.children = deleteElement(element.children);
          }
          return true;
        });
      };

      return {
        ...state,
        formElements: deleteElement(state.formElements),
        selectedElement:
          state.selectedElement?.id === action.id
            ? null
            : state.selectedElement,
      };
    }

    case 'SELECT_ELEMENT':
      return { ...state, selectedElement: action.element };

    case 'REORDER_ELEMENTS': {
      if (action.parentId) {
        // Reorder within a layout container
        const updateElements = (elements: FormElement[]): FormElement[] => {
          return elements.map((element) => {
            if (element.id === action.parentId && element.children) {
              const children = [...element.children];
              const [removed] = children.splice(action.sourceIndex, 1);
              children.splice(action.destinationIndex, 0, removed);
              return { ...element, children };
            }
            if (element.children) {
              return { ...element, children: updateElements(element.children) };
            }
            return element;
          });
        };
        return { ...state, formElements: updateElements(state.formElements) };
      } else {
        // Reorder at root level
        const elements = [...state.formElements];
        const [removed] = elements.splice(action.sourceIndex, 1);
        elements.splice(action.destinationIndex, 0, removed);
        return { ...state, formElements: elements };
      }
    }

    case 'SET_PREVIEW_MODE':
      return { ...state, previewMode: action.previewMode };

    case 'UPDATE_FORM_CONFIG':
      return {
        ...state,
        formConfig: { ...state.formConfig, ...action.config },
      };

    case 'DUPLICATE_ELEMENT': {
      const findAndDuplicate = (
        elements: FormElement[],
        parentElements?: FormElement[]
      ): FormElement[] => {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (element.id === action.id) {
            const duplicated = {
              ...element,
              id: nanoid(),
              label: `${element.label} (Copy)`,
              children: element.children?.map((child) => ({
                ...child,
                id: nanoid(),
              })),
            };
            return [
              ...elements.slice(0, i + 1),
              duplicated,
              ...elements.slice(i + 1),
            ];
          }
          if (element.children) {
            const updatedChildren = findAndDuplicate(
              element.children,
              elements
            );
            if (updatedChildren !== element.children) {
              elements[i] = { ...element, children: updatedChildren };
              return elements;
            }
          }
        }
        return elements;
      };

      return {
        ...state,
        formElements: findAndDuplicate([...state.formElements]),
      };
    }

    case 'MOVE_ELEMENT': {
      // Implementation for moving elements between containers
      // This is a complex operation that would need to handle removing from source and adding to target
      return state;
    }

    default:
      return state;
  }
}

interface FormBuilderContextType extends FormBuilderState {
  addElement: (
    element: Omit<FormElement, 'id'>,
    parentId?: string,
    index?: number
  ) => void;
  updateElement: (id: string, updates: Partial<FormElement>) => void;
  deleteElement: (id: string) => void;
  selectElement: (element: FormElement | null) => void;
  reorderElements: (
    sourceIndex: number,
    destinationIndex: number,
    parentId?: string
  ) => void;
  setPreviewMode: (previewMode: boolean) => void;
  updateFormConfig: (config: Partial<FormBuilderState['formConfig']>) => void;
  duplicateElement: (id: string) => void;
  exportForm: () => any;
}

const FormBuilderContext = createContext<FormBuilderContextType | null>(null);

export function FormBuilderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(formBuilderReducer, initialState);

  const addElement = useCallback(
    (element: Omit<FormElement, 'id'>, parentId?: string, index?: number) => {
      const newElement: FormElement = {
        ...element,
        id: nanoid(),
      };
      dispatch({ type: 'ADD_ELEMENT', element: newElement, parentId, index });
    },
    []
  );

  const updateElement = useCallback(
    (id: string, updates: Partial<FormElement>) => {
      dispatch({ type: 'UPDATE_ELEMENT', id, updates });
    },
    []
  );

  const deleteElement = useCallback((id: string) => {
    dispatch({ type: 'DELETE_ELEMENT', id });
  }, []);

  const selectElement = useCallback((element: FormElement | null) => {
    dispatch({ type: 'SELECT_ELEMENT', element });
  }, []);

  const reorderElements = useCallback(
    (sourceIndex: number, destinationIndex: number, parentId?: string) => {
      dispatch({
        type: 'REORDER_ELEMENTS',
        sourceIndex,
        destinationIndex,
        parentId,
      });
    },
    []
  );

  const setPreviewMode = useCallback((previewMode: boolean) => {
    dispatch({ type: 'SET_PREVIEW_MODE', previewMode });
  }, []);

  const updateFormConfig = useCallback(
    (config: Partial<FormBuilderState['formConfig']>) => {
      dispatch({ type: 'UPDATE_FORM_CONFIG', config });
    },
    []
  );

  const duplicateElement = useCallback((id: string) => {
    dispatch({ type: 'DUPLICATE_ELEMENT', id });
  }, []);

  const exportForm = useCallback(() => {
    return {
      config: state.formConfig,
      elements: state.formElements,
      metadata: {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        elementCount: state.formElements.length,
      },
    };
  }, [state.formConfig, state.formElements]);

  const contextValue: FormBuilderContextType = {
    ...state,
    addElement,
    updateElement,
    deleteElement,
    selectElement,
    reorderElements,
    setPreviewMode,
    updateFormConfig,
    duplicateElement,
    exportForm,
  };

  return (
    <FormBuilderContext.Provider value={contextValue}>
      {children}
    </FormBuilderContext.Provider>
  );
}

export function useFormBuilder() {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error('useFormBuilder must be used within a FormBuilderProvider');
  }
  return context;
}
