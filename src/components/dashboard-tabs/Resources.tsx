'use client'

import { motion } from 'framer-motion'
import { BookOpen, Video, Map, FileText, Download } from 'lucide-react'
import Card from '../ui/Card'

const resources = [
  {
    type: "reading",
    title: "Guia de Estudo: Apocalipse 1-4",
    description: "Material completo com notas, mapas e referências",
    icon: BookOpen,
    color: "primary"
  },
  {
    type: "video",
    title: "Introdução às Sete Igrejas",
    description: "Vídeo explicativo com contexto histórico",
    icon: Video,
    color: "secondary"
  }
]

export default function Resources() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card gradient={resource.color}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <resource.icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 dark:text-white">{resource.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {resource.description}
                  </p>
                  <button className="flex items-center text-sm text-primary-500 hover:text-primary-600">
                    <Download className="w-4 h-4 mr-1" />
                    Acessar recurso
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}