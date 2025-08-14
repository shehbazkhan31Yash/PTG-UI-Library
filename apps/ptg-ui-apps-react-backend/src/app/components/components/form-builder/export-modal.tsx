import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Copy, Download, Code, FileJson } from 'lucide-react';
import { useFormBuilder } from './form-builder-context';
import type { FormElement } from './form-builder-context';

interface ExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExportModal({ open, onOpenChange }: ExportModalProps) {
  const { formElements, formConfig, exportForm } = useFormBuilder();
  const [selectedFramework, setSelectedFramework] = useState<string>('react');
  const [exportType, setExportType] = useState<'json' | 'code'>('json');

  const frameworks = [
    {
      value: 'react',
      label: 'React (shadcn/ui)',
      description: 'Modern React with shadcn/ui components',
      category: 'react',
    },
    {
      value: 'react-hook-form',
      label: 'React Hook Form',
      description: 'Performant forms with easy validation',
      category: 'react',
    },
    {
      value: 'formik',
      label: 'Formik',
      description: 'Build forms without tears',
      category: 'react',
    },
    {
      value: 'vanilla-react',
      label: 'Vanilla React',
      description: 'Pure React with controlled components',
      category: 'react',
    },
    {
      value: 'bootstrap',
      label: 'Bootstrap 5',
      description: 'Bootstrap CSS framework',
      category: 'css',
    },
    {
      value: 'materialui',
      label: 'Material-UI',
      description: 'Google Material Design',
      category: 'react',
    },
    {
      value: 'primereact',
      label: 'PrimeReact',
      description: 'Rich UI components for React',
      category: 'react',
    },
    {
      value: 'antd',
      label: 'Ant Design',
      description: 'Enterprise-class UI design language',
      category: 'react',
    },
  ];

  const generateReactCode = () => {
    const imports = [
      `import React, { useState } from "react"`,
      `// Install dependencies: npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch`,
      `// Or use shadcn/ui: npx shadcn-ui@latest add button input label textarea select checkbox radio-group switch card`,
      ``,
      `// If using shadcn/ui, keep these imports:`,
      `import { Button } from "../ui/button"`,
      `import { Input } from "../ui/input"`,
      `import { Label } from "../ui/label"`,
      `import { Textarea } from "../ui/textarea"`,
      `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"`,
      `import { Checkbox } from "../ui/checkbox"`,
      `import { RadioGroup, RadioGroupItem } from "../ui/radio-group"`,
      `import { Switch } from "../ui/switch"`,
      `import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"`,
      ``,
      `// If NOT using shadcn/ui, replace with these basic components:`,
      `/*`,
      `const Button = ({ children, ...props }) => (`,
      `  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50" {...props}>`,
      `    {children}`,
      `  </button>`,
      `)`,
      ``,
      `const Input = ({ className, ...props }) => (`,
      `  <input className={\`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 \${className}\`} {...props} />`,
      `)`,
      ``,
      `const Label = ({ children, ...props }) => (`,
      `  <label className="block text-sm font-medium text-gray-700 mb-1" {...props}>{children}</label>`,
      `)`,
      ``,
      `const Textarea = ({ className, ...props }) => (`,
      `  <textarea className={\`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 \${className}\`} {...props} />`,
      `)`,
      ``,
      `const Card = ({ children, className, ...props }) => (`,
      `  <div className={\`bg-white shadow-lg rounded-lg \${className}\`} {...props}>{children}</div>`,
      `)`,
      ``,
      `const CardHeader = ({ children }) => <div className="px-6 py-4 border-b">{children}</div>`,
      `const CardTitle = ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>`,
      `const CardContent = ({ children }) => <div className="px-6 py-4">{children}</div>`,
      ``,
      `// For Select, Checkbox, RadioGroup, Switch - implement based on your needs or use a UI library`,
      `*/`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      const baseProps = `
${indent}  id="${element.id}"
${indent}  name="${element.id}"
${indent}  ${element.required ? 'required' : ''}
${indent}  value={formData.${element.id} || ''}
${indent}  onChange={(e) => setFormData(prev => ({ ...prev, ${
        element.id
      }: e.target.value }))}`;

      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}    placeholder="${element.placeholder || ''}"${baseProps}
${indent}  />
${indent}</div>`;

        case 'textarea':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Textarea
${indent}    placeholder="${element.placeholder || ''}"${baseProps}
${indent}  />
${indent}</div>`;

        case 'select':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Select value={formData.${
            element.id
          }} onValueChange={(value) => setFormData(prev => ({ ...prev, ${
            element.id
          }: value }))}>
${indent}    <SelectTrigger>
${indent}      <SelectValue placeholder="${
            element.placeholder || 'Select an option'
          }" />
${indent}    </SelectTrigger>
${indent}    <SelectContent>
${
  element.options
    ?.map(
      (option) =>
        `${indent}      <SelectItem value="${option.value}">${option.label}</SelectItem>`
    )
    .join('\n') || ''
}
${indent}    </SelectContent>
${indent}  </Select>
${indent}</div>`;

        case 'radio':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <RadioGroup value={formData.${
            element.id
          }} onValueChange={(value) => setFormData(prev => ({ ...prev, ${
            element.id
          }: value }))}>
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <div className="flex items-center space-x-2">
${indent}      <RadioGroupItem value="${option.value}" id="${element.id}-${option.value}" />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </RadioGroup>
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <div className="space-y-2">
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <div className="flex items-center space-x-2">
${indent}      <Checkbox
${indent}        id="${element.id}-${option.value}"
${indent}        checked={Array.isArray(formData.${element.id}) ? formData.${element.id}.includes('${option.value}') : false}
${indent}        onCheckedChange={(checked) => {
${indent}          const currentValue = Array.isArray(formData.${element.id}) ? formData.${element.id} : []
${indent}          if (checked) {
${indent}            setFormData(prev => ({ ...prev, ${element.id}: [...currentValue, '${option.value}'] }))
${indent}          } else {
${indent}            setFormData(prev => ({ ...prev, ${element.id}: currentValue.filter(v => v !== '${option.value}') }))
${indent}          }
${indent}        }}
${indent}      />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </div>
${indent}</div>`;

        case 'switch':
          return `${indent}<div className="flex items-center space-x-2">
${indent}  <Switch
${indent}    id="${element.id}"
${indent}    checked={formData.${element.id} || false}
${indent}    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, ${element.id}: checked }))}
${indent}  />
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}</div>`;

        case 'date':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    type="date"${baseProps}
${indent}  />
${indent}</div>`;

        case 'file':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    type="file"
${indent}    id="${element.id}"
${indent}    onChange={(e) => setFormData(prev => ({ ...prev, ${element.id}: e.target.files?.[0] }))}
${indent}  />
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);
          const gap = element.layoutConfig?.gap || 16;

          return `${indent}<div className="grid gap-4" style={{ gridTemplateColumns: '${columnSizes
            .map((size) => `${size}%`)
            .join(' ')}', gap: '${gap}px' }}>
${Array.from({ length: columns })
  .map(
    (_, colIndex) =>
      `${indent}  <div className="space-y-4">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`
  )
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}<!-- Unknown field type: ${element.type} -->`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `${imports}

export function GeneratedForm() {
const [formData, setFormData] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Form submitted successfully!')
      setFormData({})
    } else {
      alert('Error submitting form')
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Error submitting form')
  } finally {
    setIsSubmitting(false)
  }
}

return (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>${formConfig.title}</CardTitle>
      ${
        formConfig.description
          ? `<p className="text-muted-foreground">${formConfig.description}</p>`
          : ''
      }
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
${formFields}
        
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => setFormData({})}>
            Reset
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
)
}`;
  };

  const generateBootstrapCode = () => {
    const generateFieldCode = (
      element: FormElement,
      indent = '            '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div class="mb-3">
${indent}  <label for="${element.id}" class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${indent}  <input type="${
            element.type === 'phone' ? 'tel' : element.type
          }" class="form-control" id="${element.id}" name="${
            element.id
          }" placeholder="${element.placeholder || ''}"${
            element.required ? ' required' : ''
          }>
${indent}</div>`;

        case 'textarea':
          return `${indent}<div class="mb-3">
${indent}  <label for="${element.id}" class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${indent}  <textarea class="form-control" id="${element.id}" name="${
            element.id
          }" rows="3" placeholder="${element.placeholder || ''}"${
            element.required ? ' required' : ''
          }></textarea>
${indent}</div>`;

        case 'select':
          return `${indent}<div class="mb-3">
${indent}  <label for="${element.id}" class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${indent}  <select class="form-select" id="${element.id}" name="${element.id}"${
            element.required ? ' required' : ''
          }>
${indent}    <option value="">${
            element.placeholder || 'Select an option'
          }</option>
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <option value="${option.value}">${option.label}</option>`
    )
    .join('\n') || ''
}
${indent}  </select>
${indent}</div>`;

        case 'radio':
          return `${indent}<div class="mb-3">
${indent}  <label class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${
  element.options
    ?.map(
      (option, idx) => `${indent}  <div class="form-check">
${indent}    <input class="form-check-input" type="radio" name="${
        element.id
      }" id="${element.id}-${idx}" value="${option.value}"${
        element.required && idx === 0 ? ' required' : ''
      }>
${indent}    <label class="form-check-label" for="${element.id}-${idx}">${
        option.label
      }</label>
${indent}  </div>`
    )
    .join('\n') || ''
}
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div class="mb-3">
${indent}  <label class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${
  element.options
    ?.map(
      (option, idx) => `${indent}  <div class="form-check">
${indent}    <input class="form-check-input" type="checkbox" name="${element.id}[]" id="${element.id}-${idx}" value="${option.value}">
${indent}    <label class="form-check-label" for="${element.id}-${idx}">${option.label}</label>
${indent}  </div>`
    )
    .join('\n') || ''
}
${indent}</div>`;

        case 'switch':
          return `${indent}<div class="mb-3">
${indent}  <div class="form-check form-switch">
${indent}    <input class="form-check-input" type="checkbox" id="${element.id}" name="${element.id}">
${indent}    <label class="form-check-label" for="${element.id}">${element.label}</label>
${indent}  </div>
${indent}</div>`;

        case 'date':
          return `${indent}<div class="mb-3">
${indent}  <label for="${element.id}" class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${indent}  <input type="date" class="form-control" id="${element.id}" name="${
            element.id
          }"${element.required ? ' required' : ''}>
${indent}</div>`;

        case 'file':
          return `${indent}<div class="mb-3">
${indent}  <label for="${element.id}" class="form-label">${element.label}${
            element.required ? ' <span class="text-danger">*</span>' : ''
          }</label>
${indent}  <input type="file" class="form-control" id="${element.id}" name="${
            element.id
          }"${element.required ? ' required' : ''}>
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);

          return `${indent}<div class="row mb-3">
${Array.from({ length: columns })
  .map((_, colIndex) => {
    const colSize = Math.round((columnSizes[colIndex] / 100) * 12);
    return `${indent}  <div class="col-md-${colSize}">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`;
  })
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}<!-- Unknown field type: ${element.type} -->`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formConfig.title}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header">
                      <h3 class="card-title">${formConfig.title}</h3>
                      ${
                        formConfig.description
                          ? `<p class="text-muted">${formConfig.description}</p>`
                          : ''
                      }
                  </div>
                  <div class="card-body">
                      <form action="${formConfig.submitUrl || '#'}" method="${
      formConfig.method
    }">
${formFields}
                          
                          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                              <button class="btn btn-primary" type="submit">Submit</button>
                              <button class="btn btn-outline-secondary" type="button" onclick="this.form.reset()">Reset</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
  };

  const generateMaterialUICode = () => {
    const imports = [
      `import React, { useState } from 'react';`,
      `// Install dependencies:`,
      `// npm install @mui/material @emotion/react @emotion/styled`,
      `// npm install @mui/icons-material (optional, for icons)`,
      ``,
      `import {`,
      `  Container,`,
      `  Paper,`,
      `  Typography,`,
      `  TextField,`,
      `  Button,`,
      `  FormControl,`,
      `  FormControlLabel,`,
      `  FormLabel,`,
      `  FormGroup,`,
      `  InputLabel,`,
      `  Select,`,
      `  MenuItem,`,
      `  Radio,`,
      `  RadioGroup,`,
      `  Checkbox,`,
      `  Switch,`,
      `  Grid,`,
      `  Box`,
      `} from '@mui/material';`,
      ``,
      `// Add this to your index.js or App.js:`,
      `// import '@mui/material/styles';`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<TextField
${indent}  fullWidth
${indent}  label="${element.label}"
${indent}  type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}  placeholder="${element.placeholder || ''}"
${indent}  name="${element.id}"
${indent}  ${element.required ? 'required' : ''}
${indent}  margin="normal"
${indent}  variant="outlined"
${indent}/>`;

        case 'textarea':
          return `${indent}<TextField
${indent}  fullWidth
${indent}  label="${element.label}"
${indent}  placeholder="${element.placeholder || ''}"
${indent}  name="${element.id}"
${indent}  ${element.required ? 'required' : ''}
${indent}  margin="normal"
${indent}  variant="outlined"
${indent}  multiline
${indent}  rows={4}
${indent}/>`;

        case 'select':
          return `${indent}<FormControl fullWidth margin="normal" ${
            element.required ? 'required' : ''
          }>
${indent}  <InputLabel>${element.label}</InputLabel>
${indent}  <Select
${indent}    name="${element.id}"
${indent}    label="${element.label}"
${indent}  >
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <MenuItem value="${option.value}">${option.label}</MenuItem>`
    )
    .join('\n') || ''
}
${indent}  </Select>
${indent}</FormControl>`;

        case 'radio':
          return `${indent}<FormControl component="fieldset" margin="normal" ${
            element.required ? 'required' : ''
          }>
${indent}  <FormLabel component="legend">${element.label}</FormLabel>
${indent}  <RadioGroup name="${element.id}">
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <FormControlLabel value="${option.value}" control={<Radio />} label="${option.label}" />`
    )
    .join('\n') || ''
}
${indent}  </RadioGroup>
${indent}</FormControl>`;

        case 'checkbox':
          return `${indent}<FormControl component="fieldset" margin="normal" ${
            element.required ? 'required' : ''
          }>
${indent}  <FormLabel component="legend">${element.label}</FormLabel>
${indent}  <FormGroup>
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <FormControlLabel control={<Checkbox name="${element.id}" value="${option.value}" />} label="${option.label}" />`
    )
    .join('\n') || ''
}
${indent}  </FormGroup>
${indent}</FormControl>`;

        case 'switch':
          return `${indent}<FormControlLabel
${indent}  control={<Switch name="${element.id}" />}
${indent}  label="${element.label}"
${indent}/>`;

        case 'date':
          return `${indent}<TextField
${indent}  fullWidth
${indent}  label="${element.label}"
${indent}  type="date"
${indent}  name="${element.id}"
${indent}  ${element.required ? 'required' : ''}
${indent}  margin="normal"
${indent}  variant="outlined"
${indent}  InputLabelProps={{ shrink: true }}
${indent}/>`;

        case 'file':
          return `${indent}<Button
${indent}  variant="outlined"
${indent}  component="label"
${indent}  fullWidth
${indent}  sx={{ mt: 2, mb: 1 }}
${indent}>
${indent}  ${element.label}
${indent}  <input type="file" name="${element.id}" hidden ${
            element.required ? 'required' : ''
          } />
${indent}</Button>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);

          return `${indent}<Grid container spacing={2} sx={{ mb: 2 }}>
${Array.from({ length: columns })
  .map((_, colIndex) => {
    const colSize = Math.round((columnSizes[colIndex] / 100) * 12);
    return `${indent}  <Grid item xs={12} md={${colSize}}>
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </Grid>`;
  })
  .join('\n')}
${indent}</Grid>`;

        default:
          return `${indent}{/* Unknown field type: ${element.type} */}`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `import React, { useState } from 'react';
import {
Container,
Paper,
Typography,
TextField,
Button,
FormControl,
FormControlLabel,
FormLabel,
FormGroup,
InputLabel,
Select,
MenuItem,
Radio,
RadioGroup,
Checkbox,
Switch,
Grid,
Box
} from '@mui/material';

export function GeneratedForm() {
const [formData, setFormData] = useState({});

const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      body: data,
    });
    
    if (response.ok) {
      alert('Form submitted successfully!');
      event.target.reset();
    } else {
      alert('Error submitting form');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Error submitting form');
  }
};

return (
  <Container maxWidth="md">
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ${formConfig.title}
      </Typography>
      ${
        formConfig.description
          ? `<Typography variant="body1" color="text.secondary" paragraph>
        ${formConfig.description}
      </Typography>`
          : ''
      }
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
${formFields}
        
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button type="button" variant="outlined" onClick={(e) => e.target.form.reset()}>
            Reset
          </Button>
        </Box>
      </Box>
    </Paper>
  </Container>
);
}`;
  };

  const generatePrimeReactCode = () => {
    const imports = [
      `import React, { useState } from 'react';`,
      `// Install dependencies:`,
      `// npm install primereact primeicons`,
      ``,
      `import { Card } from 'primereact/card';`,
      `import { InputText } from 'primereact/inputtext';`,
      `import { InputTextarea } from 'primereact/inputtextarea';`,
      `import { Dropdown } from 'primereact/dropdown';`,
      `import { RadioButton } from 'primereact/radiobutton';`,
      `import { Checkbox } from 'primereact/checkbox';`,
      `import { InputSwitch } from 'primereact/inputswitch';`,
      `import { Calendar } from 'primereact/calendar';`,
      `import { FileUpload } from 'primereact/fileupload';`,
      `import { Button } from 'primereact/button';`,
      ``,
      `// Add these to your index.js or App.js:`,
      `import 'primereact/resources/themes/lara-light-indigo/theme.css';`,
      `import 'primereact/resources/primereact.min.css';`,
      `import 'primeicons/primeicons.css';`,
      ``,
      `// Or use a different theme:`,
      `// import 'primereact/resources/themes/saga-blue/theme.css';`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div className="field">
${indent}  <label htmlFor="${element.id}" className={${
            element.required ? '"p-sr-only"' : '""'
          }}>${element.label}${element.required ? ' *' : ''}</label>
${indent}  <InputText
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}    className="w-full"
${indent}    ${element.required ? 'required' : ''}
${indent}  />
${indent}</div>`;

        case 'textarea':
          return `${indent}<div className="field">
${indent}  <label htmlFor="${element.id}">${element.label}${
            element.required ? ' *' : ''
          }</label>
${indent}  <InputTextarea
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}    rows={4}
${indent}    className="w-full"
${indent}    ${element.required ? 'required' : ''}
${indent}  />
${indent}</div>`;

        case 'select':
          return `${indent}<div className="field">
${indent}  <label htmlFor="${element.id}">${element.label}${
            element.required ? ' *' : ''
          }</label>
${indent}  <Dropdown
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    options={[
${
  element.options
    ?.map(
      (option) =>
        `${indent}      { label: '${option.label}', value: '${option.value}' }`
    )
    .join(',\n') || ''
}
${indent}    ]}
${indent}    placeholder="${element.placeholder || 'Select an option'}"
${indent}    className="w-full"
${indent}    ${element.required ? 'required' : ''}
${indent}  />
${indent}</div>`;

        case 'radio':
          return `${indent}<div className="field">
${indent}  <label>${element.label}${element.required ? ' *' : ''}</label>
${indent}  <div className="flex flex-column gap-2">
${
  element.options
    ?.map(
      (option, idx) => `${indent}    <div className="flex align-items-center">
${indent}      <RadioButton
${indent}        inputId="${element.id}-${idx}"
${indent}        name="${element.id}"
${indent}        value="${option.value}"
${indent}        ${element.required && idx === 0 ? 'required' : ''}
${indent}      />
${indent}      <label htmlFor="${element.id}-${idx}" className="ml-2">${
        option.label
      }</label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </div>
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div className="field">
${indent}  <label>${element.label}${element.required ? ' *' : ''}</label>
${indent}  <div className="flex flex-column gap-2">
${
  element.options
    ?.map(
      (option, idx) => `${indent}    <div className="flex align-items-center">
${indent}      <Checkbox
${indent}        inputId="${element.id}-${idx}"
${indent}        name="${element.id}[]"
${indent}        value="${option.value}"
${indent}      />
${indent}      <label htmlFor="${element.id}-${idx}" className="ml-2">${option.label}</label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </div>
${indent}</div>`;

        case 'switch':
          return `${indent}<div className="field">
${indent}  <div className="flex align-items-center">
${indent}    <InputSwitch id="${element.id}" name="${element.id}" />
${indent}    <label htmlFor="${element.id}" className="ml-2">${element.label}</label>
${indent}  </div>
${indent}</div>`;

        case 'date':
          return `${indent}<div className="field">
${indent}  <label htmlFor="${element.id}">${element.label}${
            element.required ? ' *' : ''
          }</label>
${indent}  <Calendar
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    className="w-full"
${indent}    ${element.required ? 'required' : ''}
${indent}  />
${indent}</div>`;

        case 'file':
          return `${indent}<div className="field">
${indent}  <label htmlFor="${element.id}">${element.label}${
            element.required ? ' *' : ''
          }</label>
${indent}  <FileUpload
${indent}    name="${element.id}"
${indent}    mode="basic"
${indent}    auto
${indent}    chooseLabel="Choose File"
${indent}    className="w-full"
${indent}    ${element.required ? 'required' : ''}
${indent}  />
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);

          return `${indent}<div className="grid">
${Array.from({ length: columns })
  .map((_, colIndex) => {
    const colSize = Math.round((columnSizes[colIndex] / 100) * 12);
    return `${indent}  <div className="col-${colSize}">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`;
  })
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}{/* Unknown field type: ${element.type} */}`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { InputSwitch } from 'primereact/inputswitch';
import { Calendar } from 'primereact/calendar';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export function GeneratedForm() {
const [formData, setFormData] = useState({});

const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      body: data,
    });
    
    if (response.ok) {
      alert('Form submitted successfully!');
      event.target.reset();
    } else {
      alert('Error submitting form');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Error submitting form');
  }
};

return (
  <div className="flex justify-content-center p-4">
    <Card title="${formConfig.title}" ${
      formConfig.description ? `subTitle="${formConfig.description}"` : ''
    } className="w-full max-w-4xl">
      <form onSubmit={handleSubmit} className="p-fluid">
${formFields}
        
        <div className="flex gap-2 justify-content-end mt-4">
          <Button type="submit" label="Submit" />
          <Button type="button" label="Reset" severity="secondary" onClick={(e) => e.target.form.reset()} />
        </div>
      </form>
    </Card>
  </div>
);
}`;
  };

  const generateAntdCode = () => {
    const imports = [
      `import React from 'react';`,
      `// Install dependencies:`,
      `// npm install antd`,
      ``,
      `import {`,
      `  Form,`,
      `  Input,`,
      `  Select,`,
      `  Radio,`,
      `  Checkbox,`,
      `  Switch,`,
      `  DatePicker,`,
      `  Upload,`,
      `  Button,`,
      `  Card,`,
      `  Row,`,
      `  Col,`,
      `  message`,
      `} from 'antd';`,
      `import { UploadOutlined } from '@ant-design/icons';`,
      ``,
      `// Add this to your index.js or App.js:`,
      `// import 'antd/dist/reset.css'; // For Antd v5`,
      `// import 'antd/dist/antd.css'; // For Antd v4`,
      ``,
      `const { Option } = Select;`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please input your " +
                element.label.toLowerCase() +
                "!' }"
              : ''
          }]}
${indent}>
${indent}  <Input
${indent}    type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}  />
${indent}</Form.Item>`;

        case 'textarea':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please input your " +
                element.label.toLowerCase() +
                "!' }"
              : ''
          }]}
${indent}>
${indent}  <Input.TextArea
${indent}    placeholder="${element.placeholder || ''}"
${indent}    rows={4}
${indent}  />
${indent}</Form.Item>`;

        case 'select':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please select an option!' }"
              : ''
          }]}
${indent}>
${indent}  <Select placeholder="${element.placeholder || 'Select an option'}">
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <Option value="${option.value}">${option.label}</Option>`
    )
    .join('\n') || ''
}
${indent}  </Select>
${indent}</Form.Item>`;

        case 'radio':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please select an option!' }"
              : ''
          }]}
${indent}>
${indent}  <Radio.Group>
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <Radio value="${option.value}">${option.label}</Radio>`
    )
    .join('\n') || ''
}
${indent}  </Radio.Group>
${indent}</Form.Item>`;

        case 'checkbox':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please select at least one option!' }"
              : ''
          }]}
${indent}>
${indent}  <Checkbox.Group>
${
  element.options
    ?.map(
      (option) =>
        `${indent}    <Checkbox value="${option.value}">${option.label}</Checkbox>`
    )
    .join('\n') || ''
}
${indent}  </Checkbox.Group>
${indent}</Form.Item>`;

        case 'switch':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  valuePropName="checked"
${indent}>
${indent}  <Switch />
${indent}</Form.Item>`;

        case 'date':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please select a date!' }"
              : ''
          }]}
${indent}>
${indent}  <DatePicker className="w-full" />
${indent}</Form.Item>`;

        case 'file':
          return `${indent}<Form.Item
${indent}  label="${element.label}"
${indent}  name="${element.id}"
${indent}  rules={[${
            element.required
              ? "{ required: true, message: 'Please upload a file!' }"
              : ''
          }]}
${indent}>
${indent}  <Upload>
${indent}    <Button icon={<UploadOutlined />}>Click to Upload</Button>
${indent}  </Upload>
${indent}</Form.Item>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);

          return `${indent}<Row gutter={16}>
${Array.from({ length: columns })
  .map((_, colIndex) => {
    const colSize = Math.round((columnSizes[colIndex] / 100) * 24);
    return `${indent}  <Col span={${colSize}}>
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </Col>`;
  })
  .join('\n')}
${indent}</Row>`;

        default:
          return `${indent}{/* Unknown field type: ${element.type} */}`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `import React from 'react';
import {
Form,
Input,
Select,
Radio,
Checkbox,
Switch,
DatePicker,
Upload,
Button,
Card,
Row,
Col,
message
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export function GeneratedForm() {
const [form] = Form.useForm();

const onFinish = async (values) => {
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    
    if (response.ok) {
      message.success('Form submitted successfully!');
      form.resetFields();
    } else {
      message.error('Error submitting form');
    }
  } catch (error) {
    console.error('Submission error:', error);
    message.error('Error submitting form');
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

return (
  <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
    <Card title="${formConfig.title}" ${
      formConfig.description ? `extra="${formConfig.description}"` : ''
    }>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
${formFields}
        
        <Form.Item>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  </div>
);
}`;
  };

  const generateReactHookFormCode = () => {
    const imports = [
      `import React from "react"`,
      `// Install dependencies:`,
      `// npm install react-hook-form`,
      `// npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch`,
      `// Or use shadcn/ui: npx shadcn-ui@latest add button input label textarea select checkbox radio-group switch card`,
      ``,
      `import { useForm } from "react-hook-form"`,
      ``,
      `// If using shadcn/ui, keep these imports:`,
      `import { Button } from "../ui/button"`,
      `import { Input } from "../ui/input"`,
      `import { Label } from "../ui/label"`,
      `import { Textarea } from "../ui/textarea"`,
      `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"`,
      `import { Checkbox } from "../ui/checkbox"`,
      `import { RadioGroup, RadioGroupItem } from "../ui/radio-group"`,
      `import { Switch } from "../ui/switch"`,
      `import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"`,
      ``,
      `// If NOT using shadcn/ui, uncomment and use these basic components:`,
      `// [Include the same basic components as in React version]`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      const validationRules: string[] = [];

      if (element.required) {
        validationRules.push(`required: "${element.label} is required"`);
      }

      element.validation?.forEach((rule) => {
        switch (rule.type) {
          case 'minLength':
            validationRules.push(
              `minLength: { value: ${rule.value}, message: "${rule.message}" }`
            );
            break;
          case 'maxLength':
            validationRules.push(
              `maxLength: { value: ${rule.value}, message: "${rule.message}" }`
            );
            break;
          case 'pattern':
            validationRules.push(
              `pattern: { value: /${rule.value}/, message: "${rule.message}" }`
            );
            break;
        }
      });

      const validation =
        validationRules.length > 0 ? `{ ${validationRules.join(', ')} }` : '{}';

      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    {...register("${element.id}", ${validation})}
${indent}    type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${
            element.id
          }?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'textarea':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Textarea
${indent}    {...register("${element.id}", ${validation})}
${indent}    placeholder="${element.placeholder || ''}"
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${
            element.id
          }?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'select':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Select onValueChange={(value) => setValue("${element.id}", value)}>
${indent}    <SelectTrigger className={errors.${
            element.id
          } ? "border-destructive" : ""}>
${indent}      <SelectValue placeholder="${
            element.placeholder || 'Select an option'
          }" />
${indent}    </SelectTrigger>
${indent}    <SelectContent>
${
  element.options
    ?.map(
      (option) =>
        `${indent}      <SelectItem value="${option.value}">${option.label}</SelectItem>`
    )
    .join('\n') || ''
}
${indent}    </SelectContent>
${indent}  </Select>
${indent}  <input type="hidden" {...register("${element.id}", ${validation})} />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${
            element.id
          }?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'radio':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <RadioGroup onValueChange={(value) => setValue("${
            element.id
          }", value)}>
${
  element.options
    ?.map(
      (option) => `${indent}    <div className="flex items-center space-x-2">
${indent}      <RadioGroupItem value="${option.value}" id="${element.id}-${option.value}" />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </RadioGroup>
${indent}  <input type="hidden" {...register("${element.id}", ${validation})} />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${
            element.id
          }?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <div className="space-y-2">
${
  element.options
    ?.map(
      (
        option,
        idx
      ) => `${indent}    <div className="flex items-center space-x-2">
${indent}      <Checkbox
${indent}        {...register("${element.id}.${idx}")}
${indent}        value="${option.value}"
${indent}        id="${element.id}-${option.value}"
${indent}      />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </div>
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${
            element.id
          }?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'switch':
          return `${indent}<div className="flex items-center space-x-2">
${indent}  <Switch {...register("${element.id}")} />
${indent}  <Label>${element.label}</Label>
${indent}</div>`;

        case 'date':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    {...register("${element.id}", ${validation})}
${indent}    type="date"
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'file':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    {...register("${element.id}", ${validation})}
${indent}    type="file"
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}?.message}</p>
${indent}  )}
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);
          const gap = element.layoutConfig?.gap || 16;

          return `${indent}<div className="grid gap-4" style={{ gridTemplateColumns: '${columnSizes
            .map((size) => `${size}%`)
            .join(' ')}', gap: '${gap}px' }}>
${Array.from({ length: columns })
  .map(
    (_, colIndex) =>
      `${indent}  <div className="space-y-4">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`
  )
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}<!-- Unknown field type: ${element.type} -->`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Switch } from "../ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function GeneratedForm() {
const {
  register,
  handleSubmit,
  setValue,
  formState: { errors, isSubmitting }
} = useForm()

const onSubmit = async (data) => {
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      alert('Form submitted successfully!')
    } else {
      alert('Error submitting form')
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Error submitting form')
  }
}

return (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>${formConfig.title}</CardTitle>
      ${
        formConfig.description
          ? `<p className="text-muted-foreground">${formConfig.description}</p>`
          : ''
      }
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
${formFields}
        
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
)
}`;
  };

  const generateFormikCode = () => {
    const imports = [
      `import React from "react"`,
      `// Install dependencies:`,
      `// npm install formik yup`,
      `// npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch`,
      `// Or use shadcn/ui: npx shadcn-ui@latest add button input label textarea select checkbox radio-group switch card`,
      ``,
      `import { Formik, Form, Field, FieldArray } from "formik"`,
      `import * as yup from "yup"`,
      ``,
      `// Component imports (same as React version)`,
      `// ...`,
    ].join('\n');

    const generateValidationSchema = () => {
      const validations: string[] = [];

      const processElement = (element: FormElement) => {
        if (element.type === 'layout' && element.children) {
          element.children.forEach(processElement);
          return;
        }

        const fieldValidations: string[] = [];

        if (element.required) {
          fieldValidations.push(`required('${element.label} is required')`);
        }

        element.validation?.forEach((rule) => {
          switch (rule.type) {
            case 'minLength':
              fieldValidations.push(`min(${rule.value}, '${rule.message}')`);
              break;
            case 'maxLength':
              fieldValidations.push(`max(${rule.value}, '${rule.message}')`);
              break;
            case 'pattern':
              fieldValidations.push(
                `matches(/${rule.value}/, '${rule.message}')`
              );
              break;
          }
        });

        if (fieldValidations.length > 0) {
          const baseType = element.type === 'email' ? 'email' : 'string';
          validations.push(
            `  ${element.id}: yup.${baseType}()${fieldValidations
              .map((v) => `.${v}`)
              .join('')}`
          );
        }
      };

      formElements.forEach(processElement);

      return validations.length > 0
        ? `yup.object({\n${validations.join(',\n')}\n})`
        : 'yup.object({})';
    };

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ field, meta }) => (
${indent}      <>
${indent}        <Input
${indent}          {...field}
${indent}          type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}          placeholder="${element.placeholder || ''}"
${indent}          className={meta.touched && meta.error ? "border-destructive" : ""}
${indent}        />
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'textarea':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ field, meta }) => (
${indent}      <>
${indent}        <Textarea
${indent}          {...field}
${indent}          placeholder="${element.placeholder || ''}"
${indent}          className={meta.touched && meta.error ? "border-destructive" : ""}
${indent}        />
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'select':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ field, meta, form }) => (
${indent}      <>
${indent}        <Select onValueChange={(value) => form.setFieldValue("${
            element.id
          }", value)}>
${indent}          <SelectTrigger className={meta.touched && meta.error ? "border-destructive" : ""}>
${indent}            <SelectValue placeholder="${
            element.placeholder || 'Select an option'
          }" />
${indent}          </SelectTrigger>
${indent}          <SelectContent>
${
  element.options
    ?.map(
      (option) =>
        `${indent}            <SelectItem value="${option.value}">${option.label}</SelectItem>`
    )
    .join('\n') || ''
}
${indent}          </SelectContent>
${indent}        </Select>
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'radio':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ field, meta, form }) => (
${indent}      <>
${indent}        <RadioGroup onValueChange={(value) => form.setFieldValue("${
            element.id
          }", value)}>
${
  element.options
    ?.map(
      (
        option
      ) => `${indent}          <div className="flex items-center space-x-2">
${indent}            <RadioGroupItem value="${option.value}" id="${element.id}-${option.value}" />
${indent}            <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}          </div>`
    )
    .join('\n') || ''
}
${indent}        </RadioGroup>
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <FieldArray name="${element.id}">
${indent}    {({ push, remove, form }) => (
${indent}      <div className="space-y-2">
${
  element.options
    ?.map(
      (
        option,
        idx
      ) => `${indent}        <div className="flex items-center space-x-2">
${indent}          <Checkbox
${indent}            onCheckedChange={(checked) => {
${indent}              const values = form.values.${element.id} || []
${indent}              if (checked) {
${indent}                push('${option.value}')
${indent}              } else {
${indent}                const index = values.indexOf('${option.value}')
${indent}                if (index > -1) remove(index)
${indent}              }
${indent}            }}
${indent}            id="${element.id}-${option.value}"
${indent}          />
${indent}          <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}        </div>`
    )
    .join('\n') || ''
}
${indent}      </div>
${indent}    )}
${indent}  </FieldArray>
${indent}</div>`;

        case 'switch':
          return `${indent}<Field name="${element.id}">
${indent}  {({ field, form }) => (
${indent}    <div className="flex items-center space-x-2">
${indent}      <Switch
${indent}        checked={field.value}
${indent}        onCheckedChange={(checked) => form.setFieldValue("${element.id}", checked)}
${indent}      />
${indent}      <Label>${element.label}</Label>
${indent}    </div>
${indent}  )}
${indent}</Field>`;

        case 'date':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ field, meta }) => (
${indent}      <>
${indent}        <Input
${indent}          {...field}
${indent}          type="date"
${indent}          className={meta.touched && meta.error ? "border-destructive" : ""}
${indent}        />
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'file':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Field name="${element.id}">
${indent}    {({ meta, form }) => (
${indent}      <>
${indent}        <Input
${indent}          type="file"
${indent}          onChange={(e) => form.setFieldValue("${element.id}", e.target.files?.[0])}
${indent}          className={meta.touched && meta.error ? "border-destructive" : ""}
${indent}        />
${indent}        {meta.touched && meta.error && (
${indent}          <p className="text-sm text-destructive">{meta.error}</p>
${indent}        )}
${indent}      </>
${indent}    )}
${indent}  </Field>
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);
          const gap = element.layoutConfig?.gap || 16;

          return `${indent}<div className="grid gap-4" style={{ gridTemplateColumns: '${columnSizes
            .map((size) => `${size}%`)
            .join(' ')}', gap: '${gap}px' }}>
${Array.from({ length: columns })
  .map(
    (_, colIndex) =>
      `${indent}  <div className="space-y-4">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`
  )
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}<!-- Unknown field type: ${element.type} -->`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');
    const validationSchema = generateValidationSchema();

    return `import React from "react"
import { Formik, Form, Field, FieldArray } from "formik"
import * as yup from "yup"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Switch } from "../ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const validationSchema = ${validationSchema}

export function GeneratedForm() {
const initialValues = {
  // Initialize form values
${formElements
  .map((element) => {
    if (element.type === 'layout' && element.children) {
      return element.children
        .map(
          (child) =>
            `    ${child.id}: ${child.type === 'checkbox' ? '[]' : '""'}`
        )
        .join(',\n');
    }
    return `    ${element.id}: ${element.type === 'checkbox' ? '[]' : '""'}`;
  })
  .join(',\n')}
}

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    
    if (response.ok) {
      alert('Form submitted successfully!')
      resetForm()
    } else {
      alert('Error submitting form')
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Error submitting form')
  } finally {
    setSubmitting(false)
  }
}

return (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>${formConfig.title}</CardTitle>
      ${
        formConfig.description
          ? `<p className="text-muted-foreground">${formConfig.description}</p>`
          : ''
      }
    </CardHeader>
    <CardContent>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="space-y-6">
${formFields}
            
            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <Button type="button" variant="outline" onClick={() => resetForm()}>
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </CardContent>
  </Card>
)
}`;
  };

  const generateVanillaReactCode = () => {
    const imports = [
      `import React, { useState } from "react"`,
      `// This is a pure React implementation with basic HTML elements`,
      `// No external dependencies required except React`,
      ``,
      `// Basic component implementations:`,
      `const Button = ({ children, className = "", ...props }) => (`,
      `  <button `,
      `    className={\`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors \${className}\`}`,
      `    {...props}`,
      `  >`,
      `    {children}`,
      `  </button>`,
      `)`,
      ``,
      `const Input = ({ className = "", ...props }) => (`,
      `  <input `,
      `    className={\`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent \${className}\`}`,
      `    {...props} `,
      `  />`,
      `)`,
      ``,
      `const Label = ({ children, className = "", ...props }) => (`,
      `  <label className={\`block text-sm font-medium text-gray-700 mb-1 \${className}\`} {...props}>`,
      `    {children}`,
      `  </label>`,
      `)`,
      ``,
      `const Textarea = ({ className = "", ...props }) => (`,
      `  <textarea `,
      `    className={\`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical \${className}\`}`,
      `    {...props} `,
      `  />`,
      `)`,
      ``,
      `const Card = ({ children, className = "" }) => (`,
      `  <div className={\`bg-white shadow-lg rounded-lg border border-gray-200 \${className}\`}>`,
      `    {children}`,
      `  </div>`,
      `)`,
      ``,
      `const CardHeader = ({ children }) => (`,
      `  <div className="px-6 py-4 border-b border-gray-200">{children}</div>`,
      `)`,
      ``,
      `const CardTitle = ({ children }) => (`,
      `  <h2 className="text-xl font-semibold text-gray-900">{children}</h2>`,
      `)`,
      ``,
      `const CardContent = ({ children }) => (`,
      `  <div className="px-6 py-4">{children}</div>`,
      `)`,
      ``,
      `// Simple Select component`,
      `const Select = ({ children, value, onValueChange, className = "" }) => {`,
      `  const [isOpen, setIsOpen] = useState(false)`,
      `  const [selectedValue, setSelectedValue] = useState(value)`,
      ``,
      `  const handleSelect = (newValue) => {`,
      `    setSelectedValue(newValue)`,
      `    onValueChange?.(newValue)`,
      `    setIsOpen(false)`,
      `  }`,
      ``,
      `  return (`,
      `    <div className="relative">`,
      `      <button`,
      `        type="button"`,
      `        className={\`border border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white \${className}\`}`,
      `        onClick={() => setIsOpen(!isOpen)}`,
      `      >`,
      `        {selectedValue || "Select an option"}`,
      `      </button>`,
      `      {isOpen && (`,
      `        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">`,
      `          {React.Children.map(children, (child) =>`,
      `            React.cloneElement(child, { onSelect: handleSelect })`,
      `          )}`,
      `        </div>`,
      `      )}`,
      `    </div>`,
      `  )`,
      `}`,
      ``,
      `const SelectItem = ({ children, value, onSelect }) => (`,
      `  <div`,
      `    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"`,
      `    onClick={() => onSelect?.(value)}`,
      `  >`,
      `    {children}`,
      `  </div>`,
      `)`,
      ``,
      `// Simple Checkbox component`,
      `const Checkbox = ({ checked, onCheckedChange, className = "", ...props }) => (`,
      `  <input`,
      `    type="checkbox"`,
      `    checked={checked}`,
      `    onChange={(e) => onCheckedChange?.(e.target.checked)}`,
      `    className={\`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 \${className}\`}`,
      `    {...props}`,
      `  />`,
      `)`,
      ``,
      `// Simple Radio Group components`,
      `const RadioGroup = ({ children, value, onValueChange }) => (`,
      `  <div className="space-y-2">`,
      `    {React.Children.map(children, (child) =>`,
      `      React.cloneElement(child, { groupValue: value, onGroupChange: onValueChange })`,
      `    )}`,
      `  </div>`,
      `)`,
      ``,
      `const RadioGroupItem = ({ value, groupValue, onGroupChange, ...props }) => (`,
      `  <input`,
      `    type="radio"`,
      `    checked={groupValue === value}`,
      `    onChange={() => onGroupChange?.(value)}`,
      `    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"`,
      `    {...props}`,
      `  />`,
      `)`,
      ``,
      `// Simple Switch component`,
      `const Switch = ({ checked, onCheckedChange, className = "" }) => (`,
      `  <button`,
      `    type="button"`,
      `    className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \${`,
      `      checked ? 'bg-blue-600' : 'bg-gray-200'`,
      `    } \${className}\`}`,
      `    onClick={() => onCheckedChange?.(!checked)}`,
      `  >`,
      `    <span`,
      `      className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${`,
      `        checked ? 'translate-x-6' : 'translate-x-1'`,
      `      }\`}`,
      `    />`,
      `  </button>`,
      `)`,
    ].join('\n');

    const generateFieldCode = (
      element: FormElement,
      indent = '        '
    ): string => {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'phone':
        case 'url':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    type="${element.type === 'phone' ? 'tel' : element.type}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}    value={formData.${element.id} || ''}
${indent}    onChange={handleInputChange}
${indent}    ${element.required ? 'required' : ''}
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'textarea':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Textarea
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    placeholder="${element.placeholder || ''}"
${indent}    value={formData.${element.id} || ''}
${indent}    onChange={handleInputChange}
${indent}    ${element.required ? 'required' : ''}
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'select':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Select value={formData.${
            element.id
          }} onValueChange={(value) => handleSelectChange("${
            element.id
          }", value)}>
${indent}    <SelectTrigger className={errors.${
            element.id
          } ? "border-destructive" : ""}>
${indent}      <SelectValue placeholder="${
            element.placeholder || 'Select an option'
          }" />
${indent}    </SelectTrigger>
${indent}    <SelectContent>
${
  element.options
    ?.map(
      (option) =>
        `${indent}      <SelectItem value="${option.value}">${option.label}</SelectItem>`
    )
    .join('\n') || ''
}
${indent}    </SelectContent>
${indent}  </Select>
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'radio':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <RadioGroup value={formData.${
            element.id
          }} onValueChange={(value) => handleSelectChange("${
            element.id
          }", value)}>
${
  element.options
    ?.map(
      (option) => `${indent}    <div className="flex items-center space-x-2">
${indent}      <RadioGroupItem value="${option.value}" id="${element.id}-${option.value}" />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </RadioGroup>
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'checkbox':
          return `${indent}<div className="space-y-2">
${indent}  <Label>${element.label}</Label>
${indent}  <div className="space-y-2">
${
  element.options
    ?.map(
      (option) => `${indent}    <div className="flex items-center space-x-2">
${indent}      <Checkbox
${indent}        id="${element.id}-${option.value}"
${indent}        checked={Array.isArray(formData.${element.id}) ? formData.${element.id}.includes('${option.value}') : false}
${indent}        onCheckedChange={(checked) => handleCheckboxChange("${element.id}", "${option.value}", checked)}
${indent}      />
${indent}      <Label htmlFor="${element.id}-${option.value}">${option.label}</Label>
${indent}    </div>`
    )
    .join('\n') || ''
}
${indent}  </div>
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'switch':
          return `${indent}<div className="flex items-center space-x-2">
${indent}  <Switch
${indent}    id="${element.id}"
${indent}    checked={formData.${element.id} || false}
${indent}    onCheckedChange={(checked) => handleSelectChange("${element.id}", checked)}
${indent}  />
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}</div>`;

        case 'date':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    type="date"
${indent}    value={formData.${element.id} || ''}
${indent}    onChange={handleInputChange}
${indent}    ${element.required ? 'required' : ''}
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'file':
          return `${indent}<div className="space-y-2">
${indent}  <Label htmlFor="${element.id}">${element.label}</Label>
${indent}  <Input
${indent}    id="${element.id}"
${indent}    name="${element.id}"
${indent}    type="file"
${indent}    onChange={handleFileChange}
${indent}    ${element.required ? 'required' : ''}
${indent}    className={errors.${element.id} ? "border-destructive" : ""}
${indent}  />
${indent}  {errors.${element.id} && (
${indent}    <p className="text-sm text-destructive">{errors.${element.id}}</p>
${indent}  )}
${indent}</div>`;

        case 'layout':
          const columns = element.layoutConfig?.columns || 2;
          const columnSizes =
            element.layoutConfig?.columnSizes ||
            Array(columns).fill(100 / columns);
          const gap = element.layoutConfig?.gap || 16;

          return `${indent}<div className="grid gap-4" style={{ gridTemplateColumns: '${columnSizes
            .map((size) => `${size}%`)
            .join(' ')}', gap: '${gap}px' }}>
${Array.from({ length: columns })
  .map(
    (_, colIndex) =>
      `${indent}  <div className="space-y-4">
${
  element.children
    ?.filter((child) => child.properties?.columnIndex === colIndex)
    ?.map((child) => generateFieldCode(child, indent + '    '))
    .join('\n') || ''
}
${indent}  </div>`
  )
  .join('\n')}
${indent}</div>`;

        default:
          return `${indent}<!-- Unknown field type: ${element.type} -->`;
      }
    };

    const formFields = formElements
      .map((element) => generateFieldCode(element))
      .join('\n\n');

    return `import React, { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Switch } from "../ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function GeneratedForm() {
const [formData, setFormData] = useState({})
const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

const handleInputChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
  
  // Clear error when user starts typing
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
}

const handleSelectChange = (name, value) => {
  setFormData(prev => ({ ...prev, [name]: value }))
  
  // Clear error when user makes selection
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
}

const handleCheckboxChange = (name, value, checked) => {
  setFormData(prev => {
    const currentValue = Array.isArray(prev[name]) ? prev[name] : []
    if (checked) {
      return { ...prev, [name]: [...currentValue, value] }
    } else {
      return { ...prev, [name]: currentValue.filter(v => v !== value) }
    }
  })
  
  // Clear error when user makes selection
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
}

const handleFileChange = (e) => {
  const { name, files } = e.target
  setFormData(prev => ({ ...prev, [name]: files?.[0] }))
  
  // Clear error when user selects file
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
}

const validateForm = () => {
  const newErrors = {}

  // Add validation logic here based on your requirements
${formElements
  .map((element) => {
    if (element.type === 'layout' && element.children) {
      return element.children
        .map((child) => {
          if (child.required) {
            return `    if (!formData.${child.id}) {
    newErrors.${child.id} = '${child.label} is required'
  }`;
          }
          return '';
        })
        .filter(Boolean)
        .join('\n');
    }
    if (element.required) {
      return `    if (!formData.${element.id}) {
    newErrors.${element.id} = '${element.label} is required'
  }`;
    }
    return '';
  })
  .filter(Boolean)
  .join('\n')}

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (!validateForm()) {
    return
  }

  setIsSubmitting(true)
  
  try {
    const response = await fetch('${formConfig.submitUrl || '/api/submit'}', {
      method: '${formConfig.method}',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Form submitted successfully!')
      setFormData({})
    } else {
      alert('Error submitting form')
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Error submitting form')
  } finally {
    setIsSubmitting(false)
  }
}

const handleReset = () => {
  setFormData({})
  setErrors({})
}

return (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>${formConfig.title}</CardTitle>
      ${
        formConfig.description
          ? `<p className="text-muted-foreground">${formConfig.description}</p>`
          : ''
      }
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
${formFields}
        
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
)
}`;
  };

  const generateCode = () => {
    switch (selectedFramework) {
      case 'react':
        return generateReactCode();
      case 'react-hook-form':
        return generateReactHookFormCode();
      case 'formik':
        return generateFormikCode();
      case 'vanilla-react':
        return generateVanillaReactCode();
      case 'bootstrap':
        return generateBootstrapCode();
      case 'materialui':
        return generateMaterialUICode();
      case 'primereact':
        return generatePrimeReactCode();
      case 'antd':
        return generateAntdCode();
      default:
        return generateReactCode();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const jsonExport = JSON.stringify(exportForm(), null, 2);
  const codeExport = generateCode();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Export Form</DialogTitle>
        </DialogHeader>

        {/* This div will handle the scrolling for the main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4 p-6 pt-0">
            {' '}
            {/* Apply padding here, but remove top padding as DialogHeader already has it */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium">Export Type</label>
                <Tabs
                  value={exportType}
                  onValueChange={(value: any) => setExportType(value)}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="json">JSON Config</TabsTrigger>
                    <TabsTrigger value="code">Generated Code</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {exportType === 'code' && (
                <div className="flex-1">
                  <label className="text-sm font-medium">Framework</label>
                  <Select
                    value={selectedFramework}
                    onValueChange={setSelectedFramework}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        React Libraries
                      </div>
                      {frameworks
                        .filter((f) => f.category === 'react')
                        .map((framework) => (
                          <SelectItem
                            key={framework.value}
                            value={framework.value}
                          >
                            <div>
                              <div className="font-medium">
                                {framework.label}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {framework.description}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-1 pt-2">
                        CSS Frameworks
                      </div>
                      {frameworks
                        .filter((f) => f.category === 'css')
                        .map((framework) => (
                          <SelectItem
                            key={framework.value}
                            value={framework.value}
                          >
                            <div>
                              <div className="font-medium">
                                {framework.label}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {framework.description}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {exportType === 'json' ? (
                      <FileJson className="w-4 h-4" />
                    ) : (
                      <Code className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {exportType === 'json'
                        ? 'Form Configuration'
                        : 'Generated Code'}
                    </span>
                    <Badge variant="outline">
                      {formElements.length} element
                      {formElements.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        copyToClipboard(
                          exportType === 'json' ? jsonExport : codeExport
                        )
                      }
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        downloadFile(
                          exportType === 'json' ? jsonExport : codeExport,
                          exportType === 'json'
                            ? 'form-config.json'
                            : `form.${
                                selectedFramework === 'react' ? 'tsx' : 'html'
                              }`
                        )
                      }
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto max-h-96 font-mono">
                    <code>
                      {exportType === 'json' ? jsonExport : codeExport}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            {exportType === 'json' && (
              <div className="text-sm text-muted-foreground">
                <p>
                  This JSON configuration can be imported back into the form
                  builder or used with your own form renderer.
                </p>
              </div>
            )}
            {exportType === 'code' && (
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  This generated code is ready to use in your{' '}
                  {frameworks.find((f) => f.value === selectedFramework)?.label}{' '}
                  application.
                </p>

                {selectedFramework === 'react' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation Options:</p>
                    <p>
                      1. <strong>With shadcn/ui:</strong> npx shadcn-ui@latest
                      add button input label textarea select checkbox
                      radio-group switch card
                    </p>
                    <p>
                      2. <strong>Without shadcn/ui:</strong> Uncomment the basic
                      components in the generated code
                    </p>
                  </div>
                )}

                {selectedFramework === 'react-hook-form' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation:</p>
                    <p>npm install react-hook-form</p>
                    <p>
                      Plus shadcn/ui components or use the basic components
                      provided
                    </p>
                  </div>
                )}

                {selectedFramework === 'formik' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation:</p>
                    <p>npm install formik yup</p>
                    <p>
                      Plus shadcn/ui components or use the basic components
                      provided
                    </p>
                  </div>
                )}

                {selectedFramework === 'vanilla-react' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">
                      No external dependencies required!
                    </p>
                    <p>
                      This code uses only React and includes all necessary
                      components inline.
                    </p>
                  </div>
                )}

                {selectedFramework === 'materialui' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation:</p>
                    <p>
                      npm install @mui/material @emotion/react @emotion/styled
                    </p>
                  </div>
                )}

                {selectedFramework === 'antd' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation:</p>
                    <p>npm install antd</p>
                    <p>Don't forget to import the CSS in your main file!</p>
                  </div>
                )}

                {selectedFramework === 'primereact' && (
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-medium mb-1">Installation:</p>
                    <p>npm install primereact primeicons</p>
                    <p>Don't forget to import the theme CSS!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
