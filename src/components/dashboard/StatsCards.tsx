'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { BookOpen, Users, Star } from 'lucide-react'

const stats = [
  {
    title: 'Progresso',
    value: '25%',
    icon: BookOpen,
    color: 'text-blue-500',
  },
  {
    title: 'Atividades',
    value: '12/48',
    icon: Star,
    color: 'text-yellow-500',
  },
  {
    title: 'Participações',
    value: '8',
    icon: Users,
    color: 'text-green-500',
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <div className="flex items-center p-6">
              <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}