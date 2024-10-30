'use client'

import { MessageCircle, ThumbsUp, Clock, Send } from 'lucide-react'
import Card from '../ui/Card'
import { motion } from 'framer-motion'

const discussions = [
  {
    id: '1',
    author: { name: 'Maria Silva', initials: 'MS' },
    content: 'Alguém pode me ajudar a entender melhor o significado dos sete candelabros?',
    timestamp: '2h atrás',
    likes: 5,
    responses: 3
  },
  {
    id: '2',
    author: { name: 'João Pedro', initials: 'JP' },
    content: 'Achei muito interessante a conexão entre a carta para Éfeso e D&C 77!',
    timestamp: '4h atrás',
    likes: 12,
    responses: 7
  }
]

export default function Discussions() {
  return (
    <div className="space-y-6">
      <Card title="Nova Discussão" icon={<MessageCircle className="w-5 h-5" />}>
        <div className="space-y-4">
          <textarea
            placeholder="Compartilhe suas dúvidas ou insights..."
            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none h-32"
          />
          <button className="btn btn-primary">
            <Send className="w-4 h-4 mr-2" />
            Enviar
          </button>
        </div>
      </Card>

      <div className="space-y-4">
        {discussions.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium">
                    {post.author.initials}
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">{post.author.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300">{post.content}</p>

                <div className="flex items-center space-x-4 pt-2 border-t dark:border-gray-700">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-500 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{post.likes} likes</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{post.responses} respostas</span>
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