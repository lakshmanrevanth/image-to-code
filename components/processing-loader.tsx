'use client';

import { Loader2 } from 'lucide-react';

export default function ProcessingLoader() {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-4">
      <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
      <div className="text-center">
        <p className="font-semibold text-slate-200">Processing your image...</p>
        <p className="text-sm text-slate-400">This may take a moment</p>
      </div>
    </div>
  );
}
