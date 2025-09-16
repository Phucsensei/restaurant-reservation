'use client'

import { assets, dummyCarData } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NarbarAdmin = () => {
    const user = dummyCarData[0] // hoặc lấy từ context/auth nếu có

    return (
        <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all'>
            <Link href='/'>
                <Image src={assets.logo} alt='logo' width={150} height={28} />
            </Link>
            <p>Welcome, {user?.name || 'Admin'}</p>
        </div>
    )
}

export default NarbarAdmin