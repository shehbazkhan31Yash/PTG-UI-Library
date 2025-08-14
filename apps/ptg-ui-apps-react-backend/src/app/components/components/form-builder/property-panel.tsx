import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Plus, Trash2, Settings } from 'lucide-react';
import { useFormBuilder } from './form-builder-context';
import type { ValidationRule, ConditionalRule } from './form-builder-context';

interface PropertyPanelProps {
  showLogicTab?: boolean;
}

export function PropertyPanel({ showLogicTab = false }: PropertyPanelProps) {
  const {
    selectedElement,
    updateElement,
    formElements,
    formConfig,
    updateFormConfig,
  } = useFormBuilder();
  const [newOption, setNewOption] = useState({ label: '', value: '' });

  if (!selectedElement && !showLogicTab) {
    return (
      <div className="p-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Settings className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">No Element Selected</h3>
            <p className="text-muted-foreground text-sm">
              Select a form element to edit its properties
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showLogicTab) {
    return (
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Form Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="form-title">Form Title</Label>
              <Input
                id="form-title"
                value={formConfig.title}
                onChange={(e) => updateFormConfig({ title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="form-description">Description</Label>
              <Textarea
                id="form-description"
                value={formConfig.description}
                onChange={(e) =>
                  updateFormConfig({ description: e.target.value })
                }
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="submit-url">Submit URL</Label>
              <Input
                id="submit-url"
                value={formConfig.submitUrl}
                onChange={(e) =>
                  updateFormConfig({ submitUrl: e.target.value })
                }
                placeholder="https://api.example.com/submit"
              />
            </div>
            <div>
              <Label htmlFor="method">Method</Label>
              <Select
                value={formConfig.method}
                onValueChange={(value: 'POST' | 'GET') =>
                  updateFormConfig({ method: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="GET">GET</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {selectedElement && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Validation Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedElement?.validation?.map((rule, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{rule.type}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          const newValidation = [
                            ...(selectedElement?.validation || []),
                          ];
                          newValidation.splice(index, 1);
                          updateElement(selectedElement?.id, {
                            validation: newValidation,
                          });
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div>
                      <Label>Error Message</Label>
                      <Input
                        value={rule.message}
                        onChange={(e) => {
                          const newValidation = [
                            ...(selectedElement?.validation || []),
                          ];
                          newValidation[index] = {
                            ...rule,
                            message: e.target.value,
                          };
                          updateElement(selectedElement?.id, {
                            validation: newValidation,
                          });
                        }}
                      />
                    </div>
                    {rule.type === 'custom' && (
                      <div>
                        <Label>Custom Function</Label>
                        <Textarea
                          value={rule.customFunction || ''}
                          onChange={(e) => {
                            const newValidation = [
                              ...(selectedElement?.validation || []),
                            ];
                            newValidation[index] = {
                              ...rule,
                              customFunction: e.target.value,
                            };
                            updateElement(selectedElement?.id, {
                              validation: newValidation,
                            });
                          }}
                          placeholder="(value) => value.length > 5"
                          rows={3}
                        />
                      </div>
                    )}
                    {(rule.type === 'minLength' ||
                      rule.type === 'maxLength') && (
                      <div>
                        <Label>Length</Label>
                        <Input
                          type="number"
                          value={rule.value || ''}
                          onChange={(e) => {
                            const newValidation = [
                              ...(selectedElement?.validation || []),
                            ];
                            newValidation[index] = {
                              ...rule,
                              value: Number.parseInt(e.target.value),
                            };
                            updateElement(selectedElement?.id, {
                              validation: newValidation,
                            });
                          }}
                        />
                      </div>
                    )}
                    {rule.type === 'pattern' && (
                      <div>
                        <Label>Pattern (RegEx)</Label>
                        <Input
                          value={rule.value || ''}
                          onChange={(e) => {
                            const newValidation = [
                              ...(selectedElement?.validation || []),
                            ];
                            newValidation[index] = {
                              ...rule,
                              value: e.target.value,
                            };
                            updateElement(selectedElement?.id, {
                              validation: newValidation,
                            });
                          }}
                          placeholder="^[a-zA-Z0-9]+$"
                        />
                      </div>
                    )}
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() => {
                    const newRule: ValidationRule = {
                      type: 'required',
                      message: 'This field is required',
                    };
                    const currentValidation = selectedElement?.validation || [];
                    updateElement(selectedElement?.id, {
                      validation: [...currentValidation, newRule],
                    });
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Validation Rule
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conditional Logic</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedElement?.conditional?.map((rule, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Rule {index + 1}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          const newConditional = [
                            ...(selectedElement?.conditional || []),
                          ];
                          newConditional.splice(index, 1);
                          updateElement(selectedElement?.id, {
                            conditional: newConditional,
                          });
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Field</Label>
                        <Select
                          value={rule.field}
                          onValueChange={(value) => {
                            const newConditional = [
                              ...(selectedElement?.conditional || []),
                            ];
                            newConditional[index] = { ...rule, field: value };
                            updateElement(selectedElement?.id, {
                              conditional: newConditional,
                            });
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            {formElements.map((element) => (
                              <SelectItem key={element.id} value={element.id}>
                                {element.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Operator</Label>
                        <Select
                          value={rule.operator}
                          onValueChange={(value: any) => {
                            const newConditional = [
                              ...(selectedElement?.conditional || []),
                            ];
                            newConditional[index] = {
                              ...rule,
                              operator: value,
                            };
                            updateElement(selectedElement?.id, {
                              conditional: newConditional,
                            });
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="equals">Equals</SelectItem>
                            <SelectItem value="notEquals">
                              Not Equals
                            </SelectItem>
                            <SelectItem value="contains">Contains</SelectItem>
                            <SelectItem value="greaterThan">
                              Greater Than
                            </SelectItem>
                            <SelectItem value="lessThan">Less Than</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Value</Label>
                      <Input
                        value={rule.value}
                        onChange={(e) => {
                          const newConditional = [
                            ...(selectedElement?.conditional || []),
                          ];
                          newConditional[index] = {
                            ...rule,
                            value: e.target.value,
                          };
                          updateElement(selectedElement?.id, {
                            conditional: newConditional,
                          });
                        }}
                      />
                    </div>

                    <div>
                      <Label>Action</Label>
                      <Select
                        value={rule.action}
                        onValueChange={(value: any) => {
                          const newConditional = [
                            ...(selectedElement?.conditional || []),
                          ];
                          newConditional[index] = { ...rule, action: value };
                          updateElement(selectedElement?.id, {
                            conditional: newConditional,
                          });
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="show">Show</SelectItem>
                          <SelectItem value="hide">Hide</SelectItem>
                          <SelectItem value="enable">Enable</SelectItem>
                          <SelectItem value="disable">Disable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={() => {
                    const newRule: ConditionalRule = {
                      field: '',
                      operator: 'equals',
                      value: '',
                      action: 'show',
                    };
                    const currentConditional =
                      selectedElement?.conditional || [];
                    updateElement(selectedElement?.id, {
                      conditional: [...currentConditional, newRule],
                    });
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Conditional Rule
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    );
  }

  const addOption = () => {
    if (newOption.label && newOption.value) {
      const currentOptions = selectedElement?.options || [];
      updateElement(selectedElement?.id || '', {
        options: [...currentOptions, { ...newOption }],
      });
      setNewOption({ label: '', value: '' });
    }
  };

  const removeOption = (index: number) => {
    const currentOptions = selectedElement?.options || [];
    const newOptions = currentOptions.filter((_, i) => i !== index);
    updateElement(selectedElement?.id || '', { options: newOptions });
  };

  const updateOption = (
    index: number,
    field: 'label' | 'value',
    value: string
  ) => {
    const currentOptions = selectedElement?.options || [];
    const newOptions = [...currentOptions];
    newOptions[index] = { ...newOptions[index], [field]: value };
    updateElement(selectedElement?.id || '', { options: newOptions });
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Element Properties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="element-label">Label</Label>
            <Input
              id="element-label"
              value={selectedElement?.label}
              onChange={(e) =>
                updateElement(selectedElement?.id || '', {
                  label: e.target.value,
                })
              }
            />
          </div>

          {selectedElement?.type !== 'layout' && (
            <>
              <div>
                <Label htmlFor="element-placeholder">Placeholder</Label>
                <Input
                  id="element-placeholder"
                  value={selectedElement?.placeholder || ''}
                  onChange={(e) =>
                    updateElement(selectedElement?.id || '', {
                      placeholder: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="element-required"
                  checked={selectedElement?.required || false}
                  onCheckedChange={(checked) =>
                    updateElement(selectedElement?.id || '', {
                      required: checked,
                    })
                  }
                />
                <Label htmlFor="element-required">Required</Label>
              </div>
            </>
          )}

          {selectedElement?.type === 'layout' &&
            selectedElement?.layoutConfig && (
              <>
                <div>
                  <Label htmlFor="layout-columns">Number of Columns</Label>
                  <Select
                    value={selectedElement?.layoutConfig.columns.toString()}
                    onValueChange={(value) => {
                      const columns = Number.parseInt(value);
                      const columnSizes = Array(columns).fill(100 / columns);
                      updateElement(selectedElement?.id, {
                        layoutConfig: {
                          ...selectedElement?.layoutConfig,
                          columns,
                          columnSizes,
                        },
                      });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Column</SelectItem>
                      <SelectItem value="2">2 Columns</SelectItem>
                      <SelectItem value="3">3 Columns</SelectItem>
                      <SelectItem value="4">4 Columns</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="layout-gap">Gap (px)</Label>
                  <Input
                    id="layout-gap"
                    type="number"
                    value={selectedElement?.layoutConfig.gap || 16}
                    onChange={(e) =>
                      updateElement(selectedElement?.id || '', {
                        layoutConfig: {
                          ...selectedElement?.layoutConfig,
                          columns: selectedElement?.layoutConfig?.columns ?? 1,
                          gap: Number.parseInt(e.target.value),
                        },
                      })
                    }
                  />
                </div>
              </>
            )}
        </CardContent>
      </Card>

      {(selectedElement?.type === 'select' ||
        selectedElement?.type === 'radio' ||
        selectedElement?.type === 'checkbox') && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedElement?.options?.map((option, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Input
                  placeholder="Label"
                  value={option.label}
                  onChange={(e) => updateOption(index, 'label', e.target.value)}
                />
                <Input
                  placeholder="Value"
                  value={option.value}
                  onChange={(e) => updateOption(index, 'value', e.target.value)}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeOption(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}

            <Separator />

            <div className="flex gap-2 items-center">
              <Input
                placeholder="New option label"
                value={newOption.label}
                onChange={(e) =>
                  setNewOption({ ...newOption, label: e.target.value })
                }
              />
              <Input
                placeholder="New option value"
                value={newOption.value}
                onChange={(e) =>
                  setNewOption({ ...newOption, value: e.target.value })
                }
              />
              <Button size="sm" onClick={addOption}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
