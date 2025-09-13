'use client'

import { usePathname } from 'next/navigation'
import Navbars from './components/Navbars'
import HomePage from './Page/HomePage'
import TableDetails from './Page/TableDetails'
import MyBookings from './Page/MyBookings'
import Table from './Page/Table'

export default function Page() {
  const pathname = usePathname()
  const isOwnerPath = pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbars />}
      <HomePage />
      <TableDetails />
      <Table />
      <MyBookings />
    </>
  )
}
