import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/types/auth'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Để nhận cookie từ server
      body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    // Lưu token vào localStorage
    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken)
    }

    return data
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }

    return data
  },

  logout() {
    localStorage.removeItem('accessToken')
    // Có thể thêm call API để invalidate token ở server
  },

  getAccessToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken')
    }
    return null
  },
}
