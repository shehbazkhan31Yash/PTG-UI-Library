import type React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Type,
  Mail,
  Hash,
  Calendar,
  CheckSquare,
  Circle,
  AlignLeft,
  List,
  Phone,
  Link,
  FileText,
  ToggleLeft,
  Layout,
} from 'lucide-react';

const fieldTypes = [
  {
    category: 'Basic Fields',
    fields: [
      {
        type: 'text',
        label: 'Text Input',
        icon: Type,
        description: 'Single line text input',
      },
      {
        type: 'email',
        label: 'Email',
        icon: Mail,
        description: 'Email address input',
      },
      {
        type: 'number',
        label: 'Number',
        icon: Hash,
        description: 'Numeric input field',
      },
      {
        type: 'phone',
        label: 'Phone',
        icon: Phone,
        description: 'Phone number input',
      },
      {
        type: 'url',
        label: 'URL',
        icon: Link,
        description: 'Website URL input',
      },
      {
        type: 'date',
        label: 'Date',
        icon: Calendar,
        description: 'Date picker input',
      },
      {
        type: 'textarea',
        label: 'Textarea',
        icon: AlignLeft,
        description: 'Multi-line text input',
      },
      {
        type: 'file',
        label: 'File Upload',
        icon: FileText,
        description: 'File upload input',
      },
    ],
  },
  {
    category: 'Selection Fields',
    fields: [
      {
        type: 'select',
        label: 'Select',
        icon: List,
        description: 'Dropdown selection',
      },
      {
        type: 'radio',
        label: 'Radio Group',
        icon: Circle,
        description: 'Single choice selection',
      },
      {
        type: 'checkbox',
        label: 'Checkbox',
        icon: CheckSquare,
        description: 'Multiple choice selection',
      },
      {
        type: 'switch',
        label: 'Switch',
        icon: ToggleLeft,
        description: 'Toggle switch input',
      },
    ],
  },
  {
    category: 'Layout',
    fields: [
      {
        type: 'layout',
        label: 'Layout Container',
        icon: Layout,
        description: 'Multi-column layout container',
      },
    ],
  },
];

const handleDragStart = (e, fieldType: string) => {
  e.dataTransfer.setData(
    'application/json',
    JSON.stringify({
      type: fieldType,
      source: 'library',
      timestamp: Date.now(), // Add timestamp to ensure uniqueness
    })
  );
  e.dataTransfer.effectAllowed = 'copy';

  // Add visual feedback
  e.currentTarget.style.opacity = '0.5';
};

const handleDragEnd = (e) => {
  // Reset visual feedback
  e.currentTarget.style.opacity = '1';
};

export function FieldLibrary() {
  return (
    <div className="p-4 space-y-6">
      {fieldTypes.map((category) => (
        <div key={category.category}>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            {category.category}
          </h3>
          <div className="space-y-2">
            {category.fields.map((field) => {
              const IconComponent = field.icon;
              return (
                <Card
                  key={field.type}
                  className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={(e) => handleDragStart(e, field.type)}
                  onDragEnd={handleDragEnd}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {field.label}
                          </span>
                          {field.type === 'layout' && (
                            <Badge variant="secondary" className="text-xs">
                              Layout
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {field.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
