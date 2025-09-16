'use client'

import React from 'react'
import Sidebar from '../components/Admin/Sidebar'
import NarbarAdmin from '../components/Admin/NarbarAdmin'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col'>
            <NarbarAdmin />
            <div className='flex'>
                <Sidebar />
                <main className='p-6 flex-1'>
                    {children}
                </main>
            </div>
        </div>
    )
}