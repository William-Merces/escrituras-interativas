'use client'

import { useState } from 'react';
import { BookOpen, Map, MessageCircle, User, Bell, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [notifications] = useState(3); // Exemplo de notificações

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Barra de Navegação Superior */}
      <header className="bg-white dark:bg-slate-800 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo e Perfil */}
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                GS
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Gabriel Santos</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estudante</p>
              </div>
            </div>

            {/* Ações do Usuário */}
            <div className="flex items-center space-x-6">
              {/* Próxima Aula */}
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Próxima Aula</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quarta, 20h</p>
              </div>

              {/* Botão de Notificações */}
              <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Botão da Aula */}
              <a 
                href="https://meet.google.com/dfv-fskb-apq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Entrar na Aula
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Barra de Progresso */}
      <div className="bg-white dark:bg-slate-800 shadow-sm fixed w-full top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Seu progresso no curso</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">25% completo</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm fixed w-full top-32 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-14">
            <Link
              href="/dashboard"
              className="flex items-center px-3 border-b-2 border-blue-500 text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Visão Geral
            </Link>
            <Link
              href="/recursos"
              className="flex items-center px-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-white"
            >
              <Map className="w-5 h-5 mr-2" />
              Recursos
            </Link>
            <Link
              href="/discussoes"
              className="flex items-center px-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discussões
            </Link>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="pt-52 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}