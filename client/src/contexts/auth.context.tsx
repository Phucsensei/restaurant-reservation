'use client'


import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/types/auth'
import { authService } from '@/services/auth.service'

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: () => { },
    logout: () => { },
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Kiểm tra token và lấy thông tin user khi mount
        const token = authService.getAccessToken()
        if (token) {
            // Có thể thêm logic verify token ở đây
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [])

    const login = (userData: User) => {
        setUser(userData)
    }

    const logout = () => {
        authService.logout()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
