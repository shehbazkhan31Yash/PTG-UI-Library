import type React from 'react';
import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd'; // Revert to direct import
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Trash2, Copy, GripVertical, Plus, Layout } from 'lucide-react';
import { useFormBuilder } from './form-builder-context';
import type { FormElement } from './form-builder-context';
import { FieldRenderer } from './field-renderer';

export function FormCanvas() {
  const {
    formElements,
    selectedElement,
    addElement,
    updateElement,
    deleteElement,
    selectElement,
    reorderElements,
    duplicateElement,
  } = useFormBuilder();

  const [dragOverElement, setDragOverElement] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (
    e: React.DragEvent,
    parentId?: string,
    index?: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverElement(null);

    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));

      if (data.source === 'library') {
        const newElement: Omit<FormElement, 'id'> = {
          type: data.type,
          label: getDefaultLabel(data.type),
          placeholder: getDefaultPlaceholder(data.type),
          required: false,
          validation: [],
          conditional: [],
          properties: getDefaultProperties(data.type),
        };

        if (data.type === 'layout') {
          newElement.layoutConfig = {
            columns: 2,
            columnSizes: [50, 50],
            gap: 16,
          };
          newElement.children = [];
        }

        // Handle layout container drops
        if (parentId && parentId.includes('-col-')) {
          const [layoutId, , colIndex] = parentId.split('-');
          newElement.properties = {
            ...newElement.properties,
            columnIndex: Number.parseInt(colIndex),
          };
          addElement(newElement, layoutId, index);
        } else {
          // Add to root level - use the length as index if no specific index provided
          const targetIndex = index !== undefined ? index : formElements.length;
          addElement(newElement, parentId, targetIndex);
        }
      }
    } catch (error) {
      console.error('Error parsing drag data:', error);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Extract parent ID from droppableId if it exists
    const sourceParentId = source.droppableId.startsWith('layout-')
      ? source.droppableId.replace('layout-', '')
      : undefined;
    const destParentId = destination.droppableId.startsWith('layout-')
      ? destination.droppableId.replace('layout-', '')
      : undefined;

    reorderElements(source.index, destination.index, destParentId);
  };

  const getDefaultLabel = (type: string): string => {
    const labels: Record<string, string> = {
      text: 'Text Input',
      email: 'Email Address',
      number: 'Number',
      select: 'Select Option',
      checkbox: 'Checkbox Group',
      radio: 'Radio Group',
      textarea: 'Text Area',
      date: 'Date',
      phone: 'Phone Number',
      url: 'Website URL',
      file: 'File Upload',
      switch: 'Toggle Switch',
      layout: 'Layout Container',
    };
    return labels[type] || 'Form Field';
  };

  const getDefaultPlaceholder = (type: string): string => {
    const placeholders: Record<string, string> = {
      text: 'Enter text...',
      email: 'Enter email address...',
      number: 'Enter number...',
      textarea: 'Enter your message...',
      phone: 'Enter phone number...',
      url: 'Enter website URL...',
      date: 'Select date...',
    };
    return placeholders[type] || '';
  };

  const getDefaultProperties = (type: string): Record<string, any> => {
    const properties: Record<string, Record<string, any>> = {
      select: { options: [{ label: 'Option 1', value: 'option1' }] },
      radio: { options: [{ label: 'Option 1', value: 'option1' }] },
      checkbox: { options: [{ label: 'Option 1', value: 'option1' }] },
      layout: { columns: 2, gap: 16 },
    };
    return properties[type] || {};
  };

  const renderLayoutContainer = (element: FormElement, index: number) => {
    const columns = element.layoutConfig?.columns || 2;
    const columnSizes =
      element.layoutConfig?.columnSizes || Array(columns).fill(100 / columns);
    const gap = element.layoutConfig?.gap || 16;

    return (
      <Draggable key={element.id} draggableId={element.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`mb-4 ${snapshot.isDragging ? 'opacity-50' : ''}`}
          >
            <Card
              className={`relative group transition-all ${
                selectedElement?.id === element.id
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                selectElement(element);
              }}
            >
              <div className="absolute -top-2 left-2 z-10">
                <Badge variant="secondary" className="text-xs">
                  <Layout className="w-3 h-3 mr-1" />
                  Layout ({columns} columns)
                </Badge>
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    {...provided.dragHandleProps}
                  >
                    <GripVertical className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateElement(element.id);
                    }}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteElement(element.id);
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 pt-8">
                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: columnSizes
                      .map((size) => `${size}%`)
                      .join(' '),
                    gap: `${gap}px`,
                  }}
                >
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <div
                      key={`${element.id}-col-${colIndex}`}
                      className={`min-h-[100px] border-2 border-dashed rounded-lg p-2 transition-colors ${
                        dragOverElement === `${element.id}-col-${colIndex}`
                          ? 'border-primary bg-primary/5'
                          : 'border-muted-foreground/20'
                      }`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDragOverElement(`${element.id}-col-${colIndex}`);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Only clear if we're actually leaving this element
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX;
                        const y = e.clientY;
                        if (
                          x < rect.left ||
                          x > rect.right ||
                          y < rect.top ||
                          y > rect.bottom
                        ) {
                          setDragOverElement(null);
                        }
                      }}
                      onDrop={(e) => {
                        e.stopPropagation();
                        handleDrop(e, `${element.id}-col-${colIndex}`, 0);
                      }}
                    >
                      {element.children
                        ?.filter(
                          (child) => child.properties?.columnIndex === colIndex
                        )
                        ?.map((child, childIndex) =>
                          renderFormElement(child, childIndex)
                        ) || (
                        <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Drop fields here
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  };

  const renderFormElement = (element: FormElement, index: number) => {
    if (element.type === 'layout') {
      return renderLayoutContainer(element, index);
    }

    return (
      <Draggable key={element.id} draggableId={element.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`mb-4 ${snapshot.isDragging ? 'opacity-50' : ''}`}
          >
            <Card
              className={`relative group transition-all ${
                selectedElement?.id === element.id
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                selectElement(element);
              }}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    {...provided.dragHandleProps}
                  >
                    <GripVertical className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateElement(element.id);
                    }}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteElement(element.id);
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <FieldRenderer element={element} isBuilder />
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  };

  if (formElements.length === 0) {
    return (
      <div
        className="flex-1 flex items-center justify-center bg-muted/20"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e)}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Plus className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Start Building Your Form</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop elements from the sidebar to create your form
          </p>
        </div>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        className="flex-1 p-6 bg-muted/20"
        onClick={() => selectElement(null)}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
        }}
        onDrop={(e) => {
          // Only handle if not dropped on a specific element
          if (e.target === e.currentTarget) {
            handleDrop(e);
          }
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Droppable droppableId="form-canvas" type="FORM_ELEMENT">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`min-h-[400px] transition-colors ${
                  snapshot.isDraggingOver ? 'bg-primary/5' : ''
                }`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
                onDragLeave={() => setDragOverElement(null)}
              >
                {formElements.map((element, index) =>
                  renderFormElement(element, index)
                )}
                {provided.placeholder}

                {/* Always show drop zone when empty or dragging */}
                {(formElements.length === 0 || snapshot.isDraggingOver) && (
                  <div className="flex items-center justify-center h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg text-muted-foreground">
                    <div className="text-center">
                      <Plus className="w-8 h-8 mx-auto mb-2" />
                      <p>Drop form elements here</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
