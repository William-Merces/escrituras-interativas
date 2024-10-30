'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import StatsCards from '@/components/dashboard/StatsCards'
import DashboardNav from '@/components/dashboard/DashboardNav'
import Overview from '@/components/dashboard-tabs/Overview'
import Resources from '@/components/dashboard-tabs/Resources'
import Discussions from '@/components/dashboard-tabs/Discussions'
import Card from '@/components/ui/Card'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <div className="space-y-8">
            {/* Progress Banner */}
            <Card className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">Bem-vindo de volta!</h2>
                    <p className="text-primary-100">Continue de onde parou: Apocalipse 2:1-7</p>
                    <div className="mt-4">
                        <div className="w-full bg-primary-400/30 rounded-full h-2">
                            <motion.div
                                className="bg-white rounded-full h-2"
                                initial={{ width: 0 }}
                                animate={{ width: '25%' }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                            <span>Progresso geral</span>
                            <span>25%</span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Stats Cards */}
            <StatsCards />

            {/* Main Content */}
            <Card>
                <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />
                <div className="p-6">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'overview' && <Overview />}
                        {activeTab === 'resources' && <Resources />}
                        {activeTab === 'discussions' && <Discussions />}
                    </motion.div>
                </div>
            </Card>
        </div>
    )
}