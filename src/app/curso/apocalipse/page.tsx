'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Video, FileText, MessageCircle, CheckCircle, Bell, X } from 'lucide-react'

export default function CursoApocalipse() {
    const [showAlert, setShowAlert] = useState(true)
    const [activeModule, setActiveModule] = useState('prep')

    const scrollToSection = (id: string) => {
        setActiveModule(id)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const materialEstudo = {
        preparacao: [
            {
                tipo: 'leitura',
                titulo: 'Apocalipse 1-4: Contexto Histórico',
                descricao: 'Introdução e background histórico',
                duracao: '15 min',
                icon: Book,
                status: 'disponivel'
            },
            {
                tipo: 'video',
                titulo: 'As Sete Igrejas da Ásia',
                descricao: 'Localização e significado',
                duracao: '10 min',
                icon: Video,
                status: 'disponivel'
            }
        ],
        aulaAoVivo: {
            data: '2024-10-30',
            horario: '20:00',
            tema: 'Visão do Cristo Glorificado',
            material: 'Apocalipse 1'
        },
        materialComplementar: [
            {
                tipo: 'documento',
                titulo: 'Guia de Símbolos',
                descricao: 'Referência completa dos símbolos',
                icon: FileText,
                status: 'disponivel'
            },
            {
                tipo: 'discussao',
                titulo: 'Fórum de Dúvidas',
                descricao: 'Espaço para perguntas e discussões',
                icon: MessageCircle,
                status: 'ativo'
            }
        ]
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Cabeçalho do Curso */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Curso: Apocalipse - Uma Mensagem de Esperança
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Explorando as revelações de João e suas conexões modernas
                    </p>
                </div>
            </header>

            {/* Menu de Navegação Rápida */}
            <div className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8 overflow-x-auto" aria-label="Módulos">
                        {[
                            { id: 'prep', name: 'Preparação' },
                            { id: 'aula', name: 'Aula ao Vivo' },
                            { id: 'material', name: 'Material' },
                            { id: 'atividades', name: 'Atividades' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                                    ${activeModule === item.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                                `}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Sistema de Alertas */}
            {showAlert && (
                <div className="bg-yellow-50 border-b border-yellow-100">
                    <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Bell className="h-5 w-5 text-yellow-400" />
                                <p className="ml-3 text-sm text-yellow-700">
                                    Próxima aula em 2 dias! Não esqueça de ler o material de preparação.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowAlert(false)}
                                className="ml-4 flex-shrink-0"
                            >
                                <X className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Conteúdo Principal */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Material de Preparação */}
                    <div id="prep" className="space-y-6">
                        <h2 className="text-xl font-semibold">Material de Preparação</h2>
                        {materialEstudo.preparacao.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <item.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.titulo}</h3>
                                        <p className="text-sm text-gray-500">{item.descricao}</p>
                                        <div className="flex items-center mt-2 text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 mr-1" />
                                            <span>{item.duracao}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Aula ao Vivo */}
                    <div id="aula" className="space-y-6">
                        <h2 className="text-xl font-semibold">Próxima Aula ao Vivo</h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">{materialEstudo.aulaAoVivo.tema}</h3>
                                        <p className="text-sm text-gray-500">{materialEstudo.aulaAoVivo.material}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                        Ao Vivo
                                    </span>
                                </div>
                                <a 
                                    href="https://meet.google.com/dfv-fskb-apq" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Video className="w-4 h-4" />
                                    <span>Entrar na Aula</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Card do WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-lg shadow-sm p-6 mt-4 border-l-4 border-green-500"
                        >
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-medium">Grupo de Estudo</h3>
                                        <p className="text-sm text-gray-500">Participe das discussões e tire suas dúvidas</p>
                                    </div>
                                    <span className="text-2xl">💬</span>
                                </div>
                                <a 
                                    href="https://chat.whatsapp.com/KGV37Tm2Kl5ChTdEgmXHv4" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Entrar no Grupo do WhatsApp</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Material Complementar */}
                    <div id="material" className="space-y-6">
                        <h2 className="text-xl font-semibold">Material Complementar</h2>
                        {materialEstudo.materialComplementar.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <item.icon className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.titulo}</h3>
                                        <p className="text-sm text-gray-500">{item.descricao}</p>
                                        <button className="mt-2 text-sm text-blue-500 hover:text-blue-600">
                                            Acessar material
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}