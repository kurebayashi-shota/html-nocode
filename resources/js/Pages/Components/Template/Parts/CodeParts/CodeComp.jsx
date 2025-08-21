import React, { useState } from 'react';

export default function CodeComp({ index, label, sab, detail, code }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後にリセット
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className="mx-[1rem] text-gray-700 items-center bg-white p-4 rounded-xl border-[0.5rem] border-sky-200 shadow-xl/30 w-full sm:w-[calc(25%-1rem)]">
      <div className='-mt-[2rem]'>
        <label className='px-[0.5rem] -ml-[2rem] border-[5px] border-[#FDDCF9] rounded-full inline-block font-bold bg-white'>
          {index + 1}
        </label>
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        <div>{sab}</div>
        <p className="mb-2">{detail}</p>
        
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-scroll">
          <code>{code}</code>
        </pre>
        
        <button
          onClick={handleCopy}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
        >
          {copied ? "OK":"コピー"}
        </button>
      </div>
    </div>
  );
}
