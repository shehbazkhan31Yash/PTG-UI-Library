import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import type { FormElement } from './form-builder-context';

interface FieldRendererProps {
  element: FormElement;
  isBuilder?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  error?: string;
}

export function FieldRenderer({
  element,
  isBuilder = false,
  value,
  onChange,
  error,
}: FieldRendererProps) {
  const renderField = () => {
    switch (element.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'phone':
      case 'url':
        return (
          <Input
            type={element.type === 'phone' ? 'tel' : element.type}
            placeholder={element.placeholder}
            value={value || ''}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isBuilder}
            className={error ? 'border-destructive' : ''}
          />
        );

      case 'date':
        return (
          <Input
            type="date"
            value={value || ''}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isBuilder}
            className={error ? 'border-destructive' : ''}
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={element.placeholder}
            value={value || ''}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isBuilder}
            className={error ? 'border-destructive' : ''}
            rows={3}
          />
        );

      case 'select':
        return (
          <Select value={value} onValueChange={onChange} disabled={isBuilder}>
            <SelectTrigger className={error ? 'border-destructive' : ''}>
              <SelectValue
                placeholder={element.placeholder || 'Select an option'}
              />
            </SelectTrigger>
            <SelectContent>
              {element.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup
            value={value}
            onValueChange={onChange}
            disabled={isBuilder}
            className={error ? 'border border-destructive rounded p-2' : ''}
          >
            {element.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={`${element.id}-${option.value}`}
                />
                <Label htmlFor={`${element.id}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        return (
          <div
            className={`space-y-2 ${
              error ? 'border border-destructive rounded p-2' : ''
            }`}
          >
            {element.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`${element.id}-${option.value}`}
                  checked={
                    Array.isArray(value) ? value.includes(option.value) : false
                  }
                  onCheckedChange={(checked) => {
                    if (!onChange) return;
                    const currentValue = Array.isArray(value) ? value : [];
                    if (checked) {
                      onChange([...currentValue, option.value]);
                    } else {
                      onChange(
                        currentValue.filter((v: any) => v !== option.value)
                      );
                    }
                  }}
                  disabled={isBuilder}
                />
                <Label htmlFor={`${element.id}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        );

      case 'switch':
        return (
          <div className="flex items-center space-x-2">
            <Switch
              checked={value || false}
              onCheckedChange={onChange}
              disabled={isBuilder}
            />
            <Label>{element.placeholder || 'Toggle option'}</Label>
          </div>
        );

      case 'file':
        return (
          <Input
            type="file"
            onChange={(e) => onChange?.(e.target.files?.[0])}
            disabled={isBuilder}
            className={error ? 'border-destructive' : ''}
          />
        );

      default:
        return (
          <div className="p-4 border border-dashed rounded-lg text-center text-muted-foreground">
            Unknown field type: {element.type}
          </div>
        );
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={element.id} className="text-sm font-medium">
          {element.label}
        </Label>
        {element.required && (
          <Badge variant="destructive" className="text-xs">
            Required
          </Badge>
        )}
        {element.validation && element.validation.length > 0 && (
          <Badge variant="outline" className="text-xs">
            {element.validation.length} rule
            {element.validation.length > 1 ? 's' : ''}
          </Badge>
        )}
        {element.conditional && element.conditional.length > 0 && (
          <Badge variant="secondary" className="text-xs">
            Conditional
          </Badge>
        )}
      </div>
      {renderField()}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
