'use client'

import { assets, dummyCarData, ownerMenuLinks } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Sidebar = () => {
    const pathname = usePathname()
    const [image, setImage] = useState<string | File>('')
    const user = {
        name: 'Admin User',
        image: dummyCarData[0].image
    }

    const updateImage = async () => {
        if (image instanceof File) {
            const imageUrl = URL.createObjectURL(image)
            // TODO: Upload image to server
            setImage('')
        }
    }

    return (
        <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
            <div className='group relative'>
                <label htmlFor='image' className='cursor-pointer'>
                    <Image
                        src={image instanceof File ? URL.createObjectURL(image) : user?.image}
                        alt='profile'
                        width={80}
                        height={80}
                        className="rounded-full h-9 md:h-14 w-9 md:w-14 mx-auto"
                    />
                    <input
                        type='file'
                        id='image'
                        accept='image/*'
                        hidden
                        onChange={e => e.target.files?.[0] && setImage(e.target.files[0])}
                    />

                    <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center'>
                        <Image src={assets.edit_icon} alt='edit' width={20} height={20} />
                    </div>
                </label>
            </div>

            {image instanceof File && (
                <button
                    onClick={updateImage}
                    className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors'
                >
                    Save
                    <Image src={assets.check_icon} alt='save' width={13} height={13} />
                </button>
            )}

            <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

            <div className='w-full mt-6'>
                {ownerMenuLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className={`relative flex items-center gap-2 w-full py-3 pl-4 hover:bg-primary/5 transition-colors
                            ${pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
                    >
                        <Image
                            src={pathname === link.path ? link.coloredIcon : link.icon}
                            alt={link.name}
                            width={13}
                            height={13}
                        />
                        <span className='max-md:hidden'>{link.name}</span>
                        <div className={`${pathname === link.path ? 'bg-primary' : ''} w-1.5 h-8 rounded-l absolute right-0`} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
