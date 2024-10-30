'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Overview from '@/components/dashboard-tabs/Overview'
import Resources from '@/components/dashboard-tabs/Resources'
import Discussions from '@/components/dashboard-tabs/Discussions'
import DashboardNav from '@/components/dashboard/DashboardNav'
import Card from '@/components/ui/Card'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <div className="space-y-6">
            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">25%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Progresso Total</div>
                    </div>
                </Card>
                <Card>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">12/48</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Atividades Completadas</div>
                    </div>
                </Card>
                <Card>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">8</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Participações</div>
                    </div>
                </Card>
            </div>

            {/* Navegação e Conteúdo */}
            <Card>
                <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />

                <div className="p-6">
                    <AnimatePresence mode="wait">
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
                    </AnimatePresence>
                </div>
            </Card>
        </div>
    )
}