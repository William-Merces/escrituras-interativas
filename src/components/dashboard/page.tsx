'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from '../shared/LoadingSpinner'
import { BookOpen, Map, MessageCircle, Activity } from 'lucide-react'
import Card from '@/components/ui/Card'

export default function DashboardComponent() {
    const [isLoading, setIsLoading] = useState(false)

    const handleAction = async () => {
        setIsLoading(true)
        // Simula uma ação que leva tempo
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
    }

    const stats = [
        {
            title: 'Progresso Total',
            value: '25%',
            icon: Activity,
            color: 'blue'
        },
        {
            title: 'Atividades Completadas',
            value: '12/48',
            icon: BookOpen,
            color: 'green'
        },
        {
            title: 'Participações',
            value: '8',
            icon: MessageCircle,
            color: 'purple'
        }
    ]

    return (
        <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card gradient={stat.color as 'blue' | 'green' | 'purple'}>
                            <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold">{stat.value}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
            {/* Área de Ações */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
                <div className="space-y-4">
                    <button
                        onClick={handleAction}
                        className="w-full flex items-center justify-center space-x-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                <BookOpen className="w-5 h-5" />
                                <span>Continuar Estudando</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleAction}
                        className="w-full flex items-center justify-center space-x-2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        disabled={isLoading}
                    >
                        <Map className="w-5 h-5" />
                        <span>Ver Recursos</span>
                    </button>

                    <button
                        onClick={handleAction}
                        className="w-full flex items-center justify-center space-x-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                        disabled={isLoading}
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Participar das Discussões</span>
                    </button>
                </div>
            </div>
        </div>
    )
}