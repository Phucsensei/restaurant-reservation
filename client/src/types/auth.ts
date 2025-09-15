export interface User {
  id: string
  email: string
  name?: string
}

export interface AuthResponse {
  message: string
  user: User
  accessToken: string
  refreshToken?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  confirmPassword: string
}