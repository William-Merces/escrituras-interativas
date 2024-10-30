'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <div className="w-8 h-8 rounded-full border-2 border-primary-200 dark:border-primary-800"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}