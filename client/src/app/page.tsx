'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbars from './components/Navbars'
import HomePage from './Page/HomePage'
import TableDetails from './Page/TableDetails'
import MyBookings from './Page/MyBookings'
import Table from './Page/Table'

export default function Page() {
  const [showLogin, setShowLogin] = useState(false)
  const pathname = usePathname()
  const isOwnerPath = pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbars setShowLogin={setShowLogin} />}
      <HomePage />
      <TableDetails />
      <Table />
      <MyBookings />
    </>
  )
}
