"use client";

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = (window.scrollY / totalHeight) * 100;
      setProgress(progressValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}