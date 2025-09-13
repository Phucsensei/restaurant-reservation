export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Login failed')
    return data // data chứa token + user info
  } catch (err: unknown) {
    throw err
  }
}

export const registerUser = async (email: string, password: string, confirmPassword: string) => {
  try {
    const res = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, confirmPassword }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Register failed')
    return data
  } catch (err: unknown) {
    throw err
  }
}