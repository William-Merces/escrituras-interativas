'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Users, MessageCircle } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Estudo Interativo",
      description: "Aprenda em seu próprio ritmo com materiais dinâmicos"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Estude junto com outros alunos e compartilhe insights"
    },
    {
      icon: MessageCircle,
      title: "Discussões",
      description: "Participe de debates enriquecedores sobre as escrituras"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Escrituras Interativas
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uma nova maneira de estudar e compreender as escrituras
        </motion.p>

        {/* Grade de Recursos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link 
            href="/dashboard" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
          >
            Acessar Dashboard
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}