'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Video, Check } from 'lucide-react'
import Card from '../ui/Card'

const nextActivities = [
  {
    title: "Leitura: Apocalipse 2:1-7",
    type: "Preparação",
    description: "Carta à Igreja de Éfeso",
    due: "Hoje",
    status: "pending",
    icon: BookOpen
  },
  {
    title: "Aula ao Vivo",
    type: "Aula",
    description: "Igreja de Éfeso e suas aplicações",
    due: "Quarta, 20h",
    status: "upcoming",
    icon: Video
  },
  {
    title: "Quiz: Símbolos em Apocalipse 1",
    type: "Avaliação",
    description: "Teste seu conhecimento",
    due: "Sexta-feira",
    status: "pending",
    icon: Clock
  }
]

const progressItems = [
  { text: "Introdução ao Apocalipse", completed: true },
  { text: "Visão do Cristo Glorificado", completed: true },
  { text: "Igreja de Éfeso", completed: false },
  { text: "Igreja de Esmirna", completed: false },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Próximas Atividades */}
      <div>
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Próximas Atividades</h3>
        <div className="space-y-3">
          {nextActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'pending' 
                      ? 'bg-yellow-100 dark:bg-yellow-900/30' 
                      : 'bg-blue-100 dark:bg-blue-900/30'
                  }`}>
                    <activity.icon className={`w-5 h-5 ${
                      activity.status === 'pending'
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium dark:text-white">{activity.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{activity.type}</span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{activity.due}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progresso do Módulo */}
      <div>
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Seu Progresso</h3>
        <Card>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Apocalipse 1-4</span>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">50% completo</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-primary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="space-y-3 mt-4">
              {progressItems.map((item, index) => (
                <div key={item.text} className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    item.completed 
                      ? 'bg-green-100 dark:bg-green-900/30' 
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    {item.completed && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
                  </div>
                  <span className={`text-sm ${
                    item.completed 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}