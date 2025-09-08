'use client'

import Image from 'next/image'
import { assets, menuLinks } from '../assets/assets'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface NavbarsProps {
    setShowLogin: (show: boolean) => void
}

const Navbars: React.FC<NavbarsProps> = ({ setShowLogin }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`flex items-center justify-between px-3 md:px-12 lg:px-20 xl:px-28 py-4 text-gray-600 border-b border-borderColor relative transition-all ${pathname === '/' && 'bg-light'
                }`}
        >
            <Link href="/" >
                <Image src={assets.logo} alt="logo" className="h-8" />
            </Link>

            <div
                className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16
          max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row 
          items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 
          transition-all duration-300 z-50
          ${pathname === '/' ? 'bg-light' : 'bg-white'}
          ${open ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'}`}
            >
                {menuLinks.map((link, index) => (
                    <Link href={link.path} key={index}>
                        <p>{link.name}</p>
                    </Link>
                ))}

                <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
                    <input
                        type="text"
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        placeholder="Tìm kiếm"
                    />
                    <Image src={assets.search_icon} alt="search" />
                </div>

                <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
                    <button onClick={() => router.push('/owner')} className="cursor-pointer">
                        Dashboard
                    </button>
                    <button
                        onClick={() => setShowLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
                    >
                        Login
                    </button>
                </div>
            </div>
            <button className='sm:hidden cursor-pointer' aria-label='Menu' onClick={() => setOpen(!open)}>
                <Image src={open ? assets.close_icon : assets.menu_icon} alt='menu' />
            </button>
        </div>
    )
}

export default Navbars
