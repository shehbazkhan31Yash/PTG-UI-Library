import { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Eye, Download } from 'lucide-react';
import { FieldLibrary } from './form-builder/field-library';
import { FormCanvas } from './form-builder/form-canvas';
import { PropertyPanel } from './form-builder/property-panel';
import { PreviewPanel } from './form-builder/preview-panel';
import { ExportModal } from './form-builder/export-modal';
import { useFormBuilder } from './form-builder/form-builder-context';
import { FormBuilderProvider } from './form-builder/form-builder-context';

function FormBuilderContent() {
  const {
    formElements,
    selectedElement,
    previewMode,
    setPreviewMode,
    exportForm,
  } = useFormBuilder();

  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTab, setActiveTab] = useState('design');

  const handleExport = () => {
    setShowExportModal(true);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Field Library */}
      <div className="w-80 border-r bg-card">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Form Builder</h2>
          <p className="text-sm text-muted-foreground">
            Drag elements to build your form
          </p>
        </div>
        <ScrollArea className="h-[calc(100vh-80px)]">
          <FieldLibrary />
        </ScrollArea>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="h-16 border-b bg-card px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {formElements.length} elements
            </Badge>
            {selectedElement && (
              <Badge variant="secondary" className="text-xs">
                {selectedElement.type} selected
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={previewMode ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode(!previewMode)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {previewMode ? 'Edit' : 'Preview'}
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Canvas Content */}
        <div className="flex-1 flex">
          <div className="flex-1">
            {previewMode ? <PreviewPanel /> : <FormCanvas />}
          </div>

          {/* Right Sidebar - Properties */}
          {!previewMode && (
            <div className="w-80 border-l bg-card">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="h-full"
              >
                <div className="p-4 border-b">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="logic">Logic</TabsTrigger>
                  </TabsList>
                </div>
                <ScrollArea className="h-[calc(100vh-140px)]">
                  <TabsContent value="design" className="mt-0">
                    <PropertyPanel />
                  </TabsContent>
                  <TabsContent value="logic" className="mt-0">
                    <PropertyPanel showLogicTab />
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </div>
          )}
        </div>
      </div>

      <ExportModal open={showExportModal} onOpenChange={setShowExportModal} />
    </div>
  );
}

export function FormBuilder() {
  return (
    <FormBuilderProvider>
      {/* Remove Suspense fallback */}
      <FormBuilderContent />
    </FormBuilderProvider>
  );
}
