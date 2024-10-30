'use client'

import ThemeToggle from './ThemeToggle'
import { BookOpen, Map, MessageCircle, Bell } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Retorna null ou um placeholder durante a hidratação inicial
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-white dark:bg-slate-800 shadow-sm" />
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white dark:bg-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                EI
              </div>
              <div>
                <h2 className="text-lg font-semibold dark:text-white">Escrituras Interativas</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <Link
                href="/curso/apocalipse"
                className="btn btn-primary"
              >
                Acessar Curso
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}