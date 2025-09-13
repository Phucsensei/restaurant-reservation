'use client'

import Image from 'next/image'
import { assets, menuLinks } from '../app/assets/assets'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Navbars = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white shadow-sm border-b border-borderColor sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image src={assets.logo} alt="logo" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuLinks.map((link, index) => (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${pathname === link.path
                                        ? 'text-primary bg-primary/10'
                                        : 'text-black hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-center ml-6">
                        <div className="relative">
                            <div className="flex items-center border border-borderColor rounded-full px-4 py-2 bg-gray-50 hover:bg-white transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                                <input
                                    type="text"
                                    className="w-64 bg-transparent outline-none text-sm placeholder-gray-500"
                                    placeholder="Tìm kiếm..."
                                />
                                <Image
                                    src={assets.search_icon}
                                    alt="search"
                                    className="w-4 h-4 text-gray-400 ml-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => router.push('/owner')}
                            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => router.push('/login')}
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <Image
                                src={open ? assets.close_icon : assets.menu_icon}
                                alt="menu"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-borderColor">
                        {menuLinks.map((link, index) => (
                            <Link
                                href={link.path}
                                key={index}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${pathname === link.path
                                    ? 'text-primary bg-primary/10'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                    }`}
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Search */}
                        <div className="px-3 py-2">
                            <div className="flex items-center border border-borderColor rounded-full px-4 py-2 bg-gray-50">
                                <input
                                    type="text"
                                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
                                    placeholder="Tìm kiếm..."
                                />
                                <Image
                                    src={assets.search_icon}
                                    alt="search"
                                    className="w-4 h-4 text-gray-400 ml-2"
                                />
                            </div>
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="px-3 py-2 space-y-2">
                            <button
                                onClick={() => {
                                    router.push('/owner')
                                    setOpen(false)
                                }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/login')
                                    setOpen(false)
                                }}
                                className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbars
