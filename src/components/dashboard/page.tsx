'use client'

import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useState } from 'react'
import { BookOpen, Map, MessageCircle, Activity } from 'lucide-react'
import Overview from '@/components/dashboard-tabs/Overview'
import Resources from '@/components/dashboard-tabs/Resources'
import Discussions from '@/components/dashboard-tabs/Discussions'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isLoading, setIsLoading] = useState(false)
    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />
            case 'resources':
                return <Resources />
            case 'discussions':
                return <Discussions />
            default:
                return <Overview />
        }
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
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                Entrar na Aula
                            </button>
                        </div>
                    </div>
                </div>
            </header>

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
                                onClick={async () => {
                                    setIsLoading(true)
                                    setActiveTab(tab.value)
                                    // Simula um pequeno delay para mostrar o loading
                                    await new Promise(resolve => setTimeout(resolve, 300))
                                    setIsLoading(false)
                                }}
                                className={`
        flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium
        transition-all duration-200 ease-in-out
        hover:bg-gray-50
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
                        {renderTabContent()}
                    </div>
                </div>
            </main>
        </div>
    )
}