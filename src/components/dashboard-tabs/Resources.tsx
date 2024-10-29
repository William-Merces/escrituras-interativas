'use client'

import { motion } from 'framer-motion'
import { BookOpen, Map, Video, FileText, Download } from 'lucide-react'

export default function Resources() {
    const resources = [
        {
            type: "reading",
            title: "Guia de Estudo: Apocalipse 1-4",
            description: "Material completo com notas, mapas e referências",
            icon: BookOpen,
            color: "blue"
        },
        {
            type: "video",
            title: "Introdução às Sete Igrejas",
            description: "Vídeo explicativo com contexto histórico",
            icon: Video,
            color: "red"
        },
        {
            type: "map",
            title: "Mapa Interativo da Ásia Menor",
            description: "Localização das sete igrejas e rotas importantes",
            icon: Map,
            color: "green"
        },
        {
            type: "document",
            title: "Símbolos no Apocalipse",
            description: "Guia completo de interpretação dos símbolos",
            icon: FileText,
            color: "purple"
        }
    ]

    return (
        <div className="space-y-8">
            {/* Recursos em Destaque */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start space-x-4">
                            <div className={`
                p-3 rounded-lg
                ${resource.color === 'blue' ? 'bg-blue-100' :
                                    resource.color === 'red' ? 'bg-red-100' :
                                        resource.color === 'green' ? 'bg-green-100' :
                                            'bg-purple-100'}
              `}>
                                <resource.icon className={`
                  w-6 h-6
                  ${resource.color === 'blue' ? 'text-blue-600' :
                                        resource.color === 'red' ? 'text-red-600' :
                                            resource.color === 'green' ? 'text-green-600' :
                                                'text-purple-600'}
                `} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold mb-1">{resource.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
                                <button className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                                    <Download className="w-4 h-4 mr-1" />
                                    Acessar recurso
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Material Complementar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold mb-4">Material Complementar</h3>
                <div className="space-y-4">
                    {[
                        "Linha do tempo profética",
                        "Áudio das aulas anteriores",
                        "Slides das apresentações",
                        "Exercícios práticos"
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <span>{item}</span>
                            <Download className="w-4 h-4 text-gray-500" />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}