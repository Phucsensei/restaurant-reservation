'use client'

import { assets, dummyTableData, ownerMenuLinks } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Sidebar = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/admin/dashboard') {
            return pathname === '/admin' || pathname === '/admin/dashboard'
        }
        return pathname === path
    }
    const [image, setImage] = useState<string | File>('')
    const user = {
        name: 'Admin User',
        image: dummyTableData[0].image
    }

    const updateImage = async () => {
        if (image instanceof File) {
            const imageUrl = URL.createObjectURL(image)
            // TODO: Upload image to server
            setImage('')
        }
    }

    return (
        <div className="relative min-h-screen md:flex flex-col items-center pt-10 max-w-16 md:max-w-64 w-full border-r border-gray-200 bg-white shadow-sm text-sm">
            {/* Avatar */}
            <div className="group relative">
                <label htmlFor="image" className="cursor-pointer block">
                    <Image
                        src={image instanceof File ? URL.createObjectURL(image) : user?.image}
                        alt="profile"
                        width={100}
                        height={100}
                        className="rounded-full h-14 md:h-20 w-14 md:w-20 mx-auto border-2 border-primary shadow-md object-cover"
                    />
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        hidden
                        onChange={e => e.target.files?.[0] && setImage(e.target.files[0])}
                    />
                    <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/30 rounded-full group-hover:flex items-center justify-center">
                        <Image src={assets.edit_icon} alt="edit" width={22} height={22} />
                    </div>
                </label>
            </div>

            {/* Save Button */}
            {image instanceof File && (
                <button
                    onClick={updateImage}
                    className="mt-3 px-4 py-1.5 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm text-xs"
                >
                    Save
                    <Image src={assets.check_icon} alt="save" width={13} height={13} />
                </button>
            )}

            {/* User name */}
            <p className="mt-3 text-base font-medium text-gray-800 max-md:hidden">
                {user?.name}
            </p>

            {/* Navigation */}
            <div className="w-full mt-8 space-y-1">
                {ownerMenuLinks.map((link, index) => {
                    const active = isActive(link.path)
                    return (
                        <Link
                            key={index}
                            href={link.path}
                            className={`relative flex items-center gap-3 w-full py-3 pl-6 pr-3 transition-all
                                ${active
                                    ? 'bg-primary/10 text-primary font-medium border-r-4 border-primary'
                                    : 'text-gray-600 hover:bg-blue-50 hover:text-primary'
                                }`}
                        >
                            <Image
                                src={active ? link.coloredIcon : link.icon}
                                alt={link.name}
                                width={18}
                                height={18}
                            />
                            <span className="max-md:hidden">{link.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
