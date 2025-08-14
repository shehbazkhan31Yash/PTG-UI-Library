import type React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useFormBuilder } from './form-builder-context';
import { FieldRenderer } from './field-renderer';
import type { FormElement } from './form-builder-context';

export function PreviewPanel() {
  const { formElements, formConfig } = useFormBuilder();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (element: FormElement, value: any): string | null => {
    if (
      element.required &&
      (!value || (Array.isArray(value) && value.length === 0))
    ) {
      return 'This field is required';
    }

    if (element.validation) {
      for (const rule of element.validation) {
        switch (rule.type) {
          case 'minLength':
            if (value && value.length < rule.value) {
              return rule.message;
            }
            break;
          case 'maxLength':
            if (value && value.length > rule.value) {
              return rule.message;
            }
            break;
          case 'pattern':
            if (value && !new RegExp(rule.value).test(value)) {
              return rule.message;
            }
            break;
          case 'custom':
            if (rule.customFunction && value) {
              try {
                const customFn = new Function(
                  'value',
                  `return ${rule.customFunction}`
                );
                if (!customFn(value)) {
                  return rule.message;
                }
              } catch (error) {
                return 'Invalid custom validation function';
              }
            }
            break;
        }
      }
    }

    return null;
  };

  const isFieldVisible = (element: FormElement): boolean => {
    if (!element.conditional || element.conditional.length === 0) {
      return true;
    }

    return element.conditional.every((rule) => {
      const fieldValue = formData[rule.field];

      switch (rule.operator) {
        case 'equals':
          return rule.action === 'show'
            ? fieldValue === rule.value
            : fieldValue !== rule.value;
        case 'notEquals':
          return rule.action === 'show'
            ? fieldValue !== rule.value
            : fieldValue === rule.value;
        case 'contains':
          return rule.action === 'show'
            ? String(fieldValue || '').includes(rule.value)
            : !String(fieldValue || '').includes(rule.value);
        case 'greaterThan':
          return rule.action === 'show'
            ? Number(fieldValue) > Number(rule.value)
            : Number(fieldValue) <= Number(rule.value);
        case 'lessThan':
          return rule.action === 'show'
            ? Number(fieldValue) < Number(rule.value)
            : Number(fieldValue) >= Number(rule.value);
        default:
          return true;
      }
    });
  };

  const handleFieldChange = (elementId: string, value: any) => {
    setFormData((prev) => ({ ...prev, [elementId]: value }));

    // Clear error when user starts typing
    if (errors[elementId]) {
      setErrors((prev) => ({ ...prev, [elementId]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const validateElements = (elements: FormElement[]) => {
      elements.forEach((element) => {
        if (element.type === 'layout' && element.children) {
          validateElements(element.children);
        } else if (isFieldVisible(element)) {
          const error = validateField(element, formData[element.id]);
          if (error) {
            newErrors[element.id] = error;
          }
        }
      });
    };

    validateElements(formElements);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formConfig.submitUrl) {
        // In a real implementation, you would submit to the actual URL
        console.log('Submitting to:', formConfig.submitUrl);
        console.log('Form data:', formData);
      }

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormElements = (elements: FormElement[]) => {
    return elements.map((element) => {
      if (element.type === 'layout') {
        const columns = element.layoutConfig?.columns || 2;
        const columnSizes =
          element.layoutConfig?.columnSizes ||
          Array(columns).fill(100 / columns);
        const gap = element.layoutConfig?.gap || 16;

        return (
          <div
            key={element.id}
            className="grid gap-4 mb-6"
            style={{
              gridTemplateColumns: columnSizes
                .map((size) => `${size}%`)
                .join(' '),
              gap: `${gap}px`,
            }}
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {element.children
                  ?.filter(
                    (child) => child.properties?.columnIndex === colIndex
                  )
                  ?.filter(isFieldVisible)
                  ?.map((child) => (
                    <FieldRenderer
                      key={child.id}
                      element={child}
                      value={formData[child.id]}
                      onChange={(value) => handleFieldChange(child.id, value)}
                      error={errors[child.id]}
                    />
                  ))}
              </div>
            ))}
          </div>
        );
      }

      if (!isFieldVisible(element)) {
        return null;
      }

      return (
        <div key={element.id} className="mb-4">
          <FieldRenderer
            element={element}
            value={formData[element.id]}
            onChange={(value) => handleFieldChange(element.id, value)}
            error={errors[element.id]}
          />
        </div>
      );
    });
  };

  if (formElements.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No Form Elements</h3>
          <p className="text-muted-foreground">
            Add some elements to see the preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{formConfig.title}</CardTitle>
                {formConfig.description && (
                  <p className="text-muted-foreground mt-2">
                    {formConfig.description}
                  </p>
                )}
              </div>
              <Badge variant="outline">Preview Mode</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {submitSuccess && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Form submitted successfully!
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderFormElements(formElements)}

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({});
                    setErrors({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
