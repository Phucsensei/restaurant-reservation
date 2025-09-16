'use client'

import { useAuth } from '@/contexts/auth.context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode
}) {
    const { user } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!user && pathname !== '/login') {
            router.push('/login')
        } else if (user && pathname === '/login') {
            router.push('/')
        }
    }, [user, router, pathname])

    if (!user && pathname !== '/login') {
        return null
    }

    if (user && pathname === '/login') {
        return null
    }

    return <>{children}</>
}
