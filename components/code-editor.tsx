'use client';

import { useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';

interface CodeEditorProps {
  code: string;
}

export default function CodeEditor({ code }: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated-code.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-white">Generated Code</h2>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg bg-blue-600/20 px-3 py-2 text-sm font-medium text-blue-300 transition-all hover:bg-blue-600/40 hover:text-blue-100 border border-blue-600/30"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-lg bg-purple-600/20 px-3 py-2 text-sm font-medium text-purple-300 transition-all hover:bg-purple-600/40 hover:text-purple-100 border border-purple-600/30"
          >
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-auto rounded-xl border border-slate-700/50 bg-slate-950 p-4 font-mono">
        <pre className="text-xs leading-relaxed text-slate-300 whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>

      <p className="text-xs text-slate-500">
        Your code is ready to use. Copy to clipboard or download as an HTML file.
      </p>
    </div>
  );
}
