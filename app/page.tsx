'use client';

import { useState } from 'react';
import UploadPanel from '@/components/upload-panel';
import CodeEditor from '@/components/code-editor';
import ProcessingLoader from '@/components/processing-loader';
import { DEMO_HTML_CODE } from '@/lib/demo-code';

export default function Home() {
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleImageUpload = async (file: File) => {
    setError('');
    setIsProcessing(true);

    try {
      // Create a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Send to API
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/process-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      setGeneratedCode(data.code);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process image';
      setError(errorMessage);
      console.error('[v0] Error processing image:', errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLoadDemo = () => {
    setGeneratedCode(DEMO_HTML_CODE);
    setUploadedImage('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-950/40 backdrop-blur-xl sticky top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
              <span className="text-xl font-bold text-white">→</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Image to Code</h1>
              <p className="text-xs text-slate-500">AI-powered design to code conversion</p>
            </div>
          </div>
          <p className="hidden sm:block text-sm text-slate-400">Transform designs into clean code</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Upload Panel */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-xl shadow-xl shadow-slate-900/50 h-full">
              <UploadPanel
                onImageUpload={handleImageUpload}
                isProcessing={isProcessing}
                uploadedImage={uploadedImage}
                onLoadDemo={handleLoadDemo}
              />
            </div>
          </div>

          {/* Code Editor Panel */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-xl shadow-xl shadow-slate-900/50 h-full">
              {isProcessing ? (
                <ProcessingLoader />
              ) : error ? (
                <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-200">
                  <p className="font-semibold">Processing Error</p>
                  <p className="text-sm mt-1">{error}</p>
                  <p className="text-xs text-red-300/60 mt-2">Please try with a different image or check your internet connection.</p>
                </div>
              ) : generatedCode ? (
                <CodeEditor code={generatedCode} />
              ) : (
                <div className="flex h-96 items-center justify-center text-center">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-slate-800/50 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-lg font-semibold text-slate-300">Ready to convert</p>
                    <p className="text-sm text-slate-500 mt-1">Upload a design image to generate code</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
