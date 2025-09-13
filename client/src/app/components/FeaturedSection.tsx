'use client'

import React from 'react'
import Tittle from './Tittle'
import { assets, dummyCarData } from '../assets/assets'
import TableCard from './TableCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const FeaturedSection = () => {

    const router = useRouter()

    return (
        <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div>
                <Tittle title='Featured Cars' subTitle='Find the best cars for your next trip' />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
                {
                    dummyCarData.slice(0, 6).map((car) => (
                        <div key={car._id}>
                            <TableCard car={car} />
                        </div>
                    ))
                }
            </div>

            <button
                onClick={() => {
                    router.push('/cars')
                    window.scrollTo(0, 0)
                }}
                className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
                Explore More
                <Image src={assets.arrow_icon} alt='arrow' />
            </button>
        </div >
    )
}

export default FeaturedSection
