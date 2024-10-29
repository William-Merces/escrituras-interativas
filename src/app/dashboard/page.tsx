'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Map, MessageCircle, Activity } from 'lucide-react'
import Overview from '@/components/dashboard-tabs/Overview'
import Resources from '@/components/dashboard-tabs/Resources'
import Discussions from '@/components/dashboard-tabs/Discussions'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isLoading, setIsLoading] = useState(false)

    const handleTabChange = async (newTab: string) => {
        setIsLoading(true)
        setActiveTab(newTab)
        // Simula um carregamento
        await new Promise(resolve => setTimeout(resolve, 500))
        setIsLoading(false)
    }

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
                            <a 
                                href="https://meet.google.com/dfv-fskb-apq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Entrar na Aula
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Barra de Progresso */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Seu progresso no curso</span>
                        <span className="text-sm font-medium text-blue-600">25% completo</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '25%' }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-blue-500 h-2.5 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal com Tabs */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Sistema de Navegação por Tabs */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                    <nav className="flex space-x-8 px-6 border-b" aria-label="Tabs">
                        {[
                            { name: 'Visão Geral', value: 'overview', icon: BookOpen },
                            { name: 'Recursos', value: 'resources', icon: Map },
                            { name: 'Discussões', value: 'discussions', icon: MessageCircle },
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => handleTabChange(tab.value)}
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

                    {/* Área de Conteúdo */}
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