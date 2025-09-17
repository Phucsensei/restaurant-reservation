'use client'

import React from 'react'
import Tittle from './Tittle'
import { assets, dummyTableData } from '../assets/assets'
import TableCard from './TableCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const FeaturedSection = () => {

    const router = useRouter()

    return (
        <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div>
                <Tittle
                    title='Featured Tables'
                    subTitle='Discover our carefully curated selection of dining spaces for your perfect meal'
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
                {
                    dummyTableData.slice(0, 6).map((table) => (
                        <div key={table._id}>
                            <TableCard table={table} />
                        </div>
                    ))
                }
            </div>

            <button
                onClick={() => {
                    router.push('/reservations')
                    window.scrollTo(0, 0)
                }}
                className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-primary/5 rounded-md mt-18 cursor-pointer transition-colors'>
                View All Tables
                <Image src={assets.arrow_icon} alt='view more' />
            </button>
        </div >
    )
}

export default FeaturedSection
