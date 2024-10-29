'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Star, Send } from 'lucide-react'
import { useState } from 'react'

export default function Discussions() {
    const [newMessage, setNewMessage] = useState('')

    const discussions = [
        {
            id: 1,
            user: "Maria Silva",
            avatar: "MS",
            message: "Alguém pode me ajudar a entender melhor o significado dos sete candelabros?",
            time: "2h atrás",
            replies: 3,
            likes: 5
        },
        {
            id: 2,
            user: "João Pedro",
            avatar: "JP",
            message: "Achei muito interessante a conexão entre a carta para Éfeso e D&C 77!",
            time: "4h atrás",
            replies: 7,
            likes: 12
        },
        {
            id: 3,
            user: "Ana Costa",
            avatar: "AC",
            message: "Compartilhando um insight sobre os paralelos entre o templo antigo e a visão do trono em Apocalipse 4.",
            time: "5h atrás",
            replies: 4,
            likes: 8
        }
    ]

    return (
        <div className="space-y-8">
            {/* Nova Mensagem */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold mb-4">Iniciar Nova Discussão</h3>
                <div className="space-y-4">
                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full p-3 border rounded-lg resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Compartilhe suas dúvidas ou insights..."
                    />
                    <div className="flex justify-end">
                        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <Send className="w-4 h-4" />
                            <span>Enviar</span>
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Discussões Existentes */}
            <div className="space-y-4">
                {discussions.map((discussion, index) => (
                    <motion.div
                        key={discussion.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <div className="flex space-x-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                                {discussion.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold">{discussion.user}</h4>
                                    <span className="text-sm text-gray-500">{discussion.time}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{discussion.message}</p>
                                <div className="flex items-center space-x-6 text-sm text-gray-500">
                                    <button className="flex items-center space-x-2 hover:text-blue-500">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>{discussion.replies} respostas</span>
                                    </button>
                                    <button className="flex items-center space-x-2 hover:text-blue-500">
                                        <Star className="w-4 h-4" />
                                        <span>{discussion.likes} likes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Grupos de Estudo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Grupos de Estudo</h3>
                    <button className="text-blue-500 hover:text-blue-600">Ver todos</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { name: "Estudos Avançados", members: 12 },
                        { name: "Iniciantes", members: 25 },
                        { name: "Discussão Semanal", members: 18 },
                        { name: "Simbolismo", members: 15 }
                    ].map((group, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <Users className="w-5 h-5 text-blue-500" />
                                <span>{group.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">{group.members} membros</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}