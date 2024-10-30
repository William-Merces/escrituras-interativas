'use client'

import { BookOpen, Map, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import LoadingSpinner from '../shared/LoadingSpinner'

interface TabProps {
  name: string
  value: string
  icon: typeof BookOpen
  current: boolean
  onClick: () => void
}

function TabButton({ name, icon: Icon, current, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center space-x-2 py-4 px-4 border-b-2 text-sm font-medium transition-colors
        ${current
          ? 'border-primary-500 text-primary-600 dark:text-primary-400'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </button>
  )
}

export default function DashboardNav({
  activeTab,
  onTabChange
}: {
  activeTab: string
  onTabChange: (tab: string) => void
}) {
  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = async (tab: string) => {
    setIsLoading(true)
    onTabChange(tab)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsLoading(false)
  }

  const tabs = [
    { name: 'Visão Geral', value: 'overview', icon: BookOpen },
    { name: 'Recursos', value: 'resources', icon: Map },
    { name: 'Discussões', value: 'discussions', icon: MessageCircle },
  ]

  if (isLoading) return <LoadingSpinner />

  return (
    <nav className="flex space-x-8" aria-label="Tabs">
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          {...tab}
          current={activeTab === tab.value}
          onClick={() => handleTabChange(tab.value)}
        />
      ))}
    </nav>
  )
}