'use client';

import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface UploadPanelProps {
  onImageUpload: (file: File) => void;
  isProcessing: boolean;
  uploadedImage: string;
  onLoadDemo?: () => void;
}

export default function UploadPanel({
  onImageUpload,
  isProcessing,
  uploadedImage,
  onLoadDemo,
}: UploadPanelProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>(uploadedImage);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    onImageUpload(file);
  };

  const handleClear = () => {
    setPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Upload Design</h2>

      {!preview ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 transition-all duration-200 ${
            isDragActive
              ? 'border-blue-500 bg-blue-500/15 shadow-lg shadow-blue-500/20'
              : 'border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'
          } ${isProcessing ? 'pointer-events-none opacity-50' : ''}`}
        >
          <Upload className={`h-8 w-8 transition-colors ${isDragActive ? 'text-blue-400' : 'text-slate-400'}`} />
          <div className="text-center">
            <p className="font-semibold text-slate-100">
              {isDragActive ? 'Drop your image here' : 'Drag and drop your design'}
            </p>
            <p className="text-sm text-slate-400">or click to browse</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="absolute inset-0 cursor-pointer opacity-0"
            disabled={isProcessing}
          />
        </div>
      ) : (
        <div className="relative space-y-2">
          <div className="rounded-xl border border-slate-700 overflow-hidden">
            <img
              src={preview}
              alt="Uploaded design"
              className="h-auto w-full object-cover"
            />
          </div>
          {!isProcessing && (
            <button
              onClick={handleClear}
              className="w-full rounded-lg bg-slate-700/50 px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-red-500/50 hover:text-white"
            >
              <X className="inline-block h-4 w-4 mr-2" />
              Clear Image
            </button>
          )}
        </div>
      )}

      <p className="text-xs text-slate-500">Supported formats: JPG, PNG, WebP, SVG</p>

      {onLoadDemo && (
        <button
          onClick={onLoadDemo}
          className="w-full rounded-lg bg-slate-700/30 px-3 py-2 text-sm font-medium text-slate-300 transition-all border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500 hover:text-slate-100"
        >
          ✨ Load Demo
        </button>
      )}
    </div>
  );
}
