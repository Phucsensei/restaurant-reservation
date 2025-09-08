'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbars from './components/Navbars'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)
  const pathname = usePathname()
  const isOwnerPath = pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbars setShowLogin={setShowLogin} />}
    </>
  )
}
