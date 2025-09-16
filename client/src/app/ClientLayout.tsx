'use client'

import { usePathname } from 'next/navigation'
import Navbars from './components/Navbars'
import ProtectedRoute from '@/app/components/ProtectedRoute'
import Footer from './components/Footer'

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isPublicPath = pathname.startsWith('/owner') ||
        pathname.startsWith('/admin') ||
        pathname === '/login' ||
        pathname === '/register'

    if (isPublicPath) {
        return children
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen flex flex-col">
                <Navbars />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </ProtectedRoute>
    )
}
