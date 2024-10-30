import { MessageCircle, ThumbsUp, Clock, Send } from 'lucide-react'
import Card from '@/components/ui/Card'

interface DiscussionPost {
  id: string;
  author: {
    name: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  responses: number;
}

export default function Discussions() {
  const discussions: DiscussionPost[] = [
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
  ];

  return (
    <div className="space-y-6">
      {/* Nova Discussão */}
      <Card gradient="blue" title="Iniciar Nova Discussão" icon={<MessageCircle className="w-5 h-5" />}>
        <div className="space-y-4">
          <textarea
            placeholder="Compartilhe suas dúvidas ou insights..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none h-32"
          />
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Send className="w-4 h-4" />
            <span>Enviar</span>
          </button>
        </div>
      </Card>

      {/* Lista de Discussões */}
      <div className="space-y-4">
        {discussions.map((post) => (
          <Card key={post.id} className="hover:border-blue-100 transition-colors">
            <div className="space-y-4">
              {/* Cabeçalho do Post */}
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  {post.author.initials}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <p className="text-gray-700 dark:text-gray-300">{post.content}</p>

              {/* Interações */}
              <div className="flex items-center space-x-4 pt-2 border-t">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{post.likes} likes</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{post.responses} respostas</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}