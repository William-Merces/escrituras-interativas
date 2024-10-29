'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Check } from 'lucide-react'

export default function Overview() {
    const nextActivities = [
        {
            title: "Leitura: Apocalipse 2:1-7",
            type: "Preparação",
            due: "Hoje",
            status: "pending"
        },
        {
            title: "Quiz: Símbolos em Apocalipse 1",
            type: "Avaliação",
            due: "Amanhã",
            status: "pending"
        },
        {
            title: "Aula ao Vivo: Igreja de Éfeso",
            type: "Aula",
            due: "Quarta, 20h",
            status: "upcoming"
        }
    ]

    return (
        <div className="space-y-8">
            {/* Próximas Atividades */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold mb-4">Próximas Atividades</h3>
                <div className="space-y-4">
                    {nextActivities.map((activity, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`
                  p-2 rounded-full
                  ${activity.status === 'pending' ? 'bg-yellow-100' : 'bg-blue-100'}
                `}>
                                    {activity.status === 'pending' ? (
                                        <Clock className="w-5 h-5 text-yellow-600" />
                                    ) : (
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-medium">{activity.title}</h4>
                                    <p className="text-sm text-gray-500">{activity.type}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                {activity.due}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Progresso do Módulo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold mb-4">Progresso do Módulo</h3>
                <div className="space-y-4">
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                                    Apocalipse 1-4
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-blue-600">
                                    75%
                                </span>
                            </div>
                        </div>
                        <div className="flex h-2 mb-4 overflow-hidden rounded bg-blue-100">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="bg-blue-500"
                            />
                        </div>
                    </div>

                    {/* Lista de Objetivos */}
                    <div className="space-y-2">
                        {[
                            { text: "Introdução ao Apocalipse", completed: true },
                            { text: "Visão do Cristo Glorificado", completed: true },
                            { text: "Igreja de Éfeso", completed: false },
                            { text: "Igreja de Esmirna", completed: false },
                        ].map((objective, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3"
                            >
                                <div className={`
                  w-5 h-5 rounded-full flex items-center justify-center
                  ${objective.completed ? 'bg-green-100' : 'bg-gray-100'}
                `}>
                                    {objective.completed && (
                                        <Check className="w-3 h-3 text-green-600" />
                                    )}
                                </div>
                                <span className={objective.completed ? 'text-green-600' : 'text-gray-500'}>
                                    {objective.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}