'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8">
          Escrituras Interativas
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Uma nova maneira de estudar e compreender as escrituras
        </p>
        <div className="space-y-4">
          <Link 
            href="/dashboard" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Acessar Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  )
}