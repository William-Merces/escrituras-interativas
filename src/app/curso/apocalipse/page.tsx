'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Users, MessageCircle } from 'lucide-react'

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">
          Escrituras Interativas
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Uma nova maneira de estudar e compreender as escrituras
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="card p-6"
            >
              <feature.icon className="w-8 h-8 text-primary-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <Link 
          href="/curso/apocalipse" 
          className="btn btn-primary inline-block"
        >
          Acessar o Curso
        </Link>
      </motion.div>
    </div>
  )
}