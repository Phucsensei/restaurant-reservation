'use client'

import { usePathname } from 'next/navigation'
import Navbars from './components/Navbars'
import Footer from './components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isPublicPath = pathname.startsWith('/owner') ||
        pathname === '/login' ||
        pathname === '/register'

    if (isPublicPath) {
        return <ProtectedRoute>{children}</ProtectedRoute>
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
