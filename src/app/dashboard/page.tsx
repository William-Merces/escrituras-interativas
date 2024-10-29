'use client'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Map, MessageCircle, Activity } from 'lucide-react'
import Overview from '@/components/dashboard-tabs/Overview'
import Resources from '@/components/dashboard-tabs/Resources'
import Discussions from '@/components/dashboard-tabs/Discussions'
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Barra Superior */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                GS
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Gabriel Santos</h2>
                                <p className="text-sm text-gray-500">Estudante</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm font-medium">Próxima Aula</p>
                                <p className="text-sm text-gray-500">Quarta, 20h</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                Entrar na Aula
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Cards de Progresso */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1"
                    >
                        <h3 className="text-lg font-semibold mb-4">Seu Progresso</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Apocalipse 1-4</span>
                                    <span>75%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1"
                    >
                        <h3 className="text-lg font-semibold mb-4">Atividades Pendentes</h3>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm">
                                <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                                <span>Leitura do Capítulo 2</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Activity className="w-4 h-4 mr-2 text-green-500" />
                                <span>Questionário Preparatório</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1"
                    >
                        <h3 className="text-lg font-semibold mb-4">Conquistas</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {['🎯', '⭐', '🏆'].map((emoji, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <span className="text-2xl mb-1">{emoji}</span>
                                    <span className="text-xs text-gray-500">Conquista {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Área de Navegação/Conteúdo */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6" aria-label="Tabs">
                            {[
                                { name: 'Visão Geral', value: 'overview', icon: BookOpen },
                                { name: 'Recursos', value: 'resources', icon: Map },
                                { name: 'Discussões', value: 'discussions', icon: MessageCircle },
                            ].map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium
                    ${activeTab === tab.value
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    <span>{tab.name}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <LoadingSpinner />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {activeTab === 'overview' && <Overview />}
                                    {activeTab === 'resources' && <Resources />}
                                    {activeTab === 'discussions' && <Discussions />}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                </div>
            </main>
        </div>
    )
}