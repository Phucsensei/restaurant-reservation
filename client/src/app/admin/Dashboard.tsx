import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../assets/assets'
import { assets } from '@/app/assets/assets'
import Title from '../components/Admin/Title'
import Image from 'next/image'

const Dashboard = () => {
    const [data, setData] = useState({
        totalCars: 0,
        totalBookings: 0,
        pendingBookings: 0,
        completedBookings: 0,
        recentBookings: [],
        monthlyRevenue: 0
    })

    const dashboardData = [
        {
            title: 'Total Cars',
            value: data.totalCars,
            icon: 'assets.carIconColored'
        },
        {
            title: 'Total Bookings',
            value: data.totalBookings,
            icon: 'assets.listIconColored'
        },
        {
            title: 'Pending Bookings',
            value: data.pendingBookings,
            icon: 'assets.cautionIconColored'
        },

        {
            title: 'Completed Bookings',
            value: data.completedBookings,
            icon: 'assets.listIconColored'
        }
    ]

    useEffect(() => {
        setData(dummyDashboardData)
    }, [])

    return (
        <div className='px-4 pt-10 md:px-10 flex-1'>
            <Title title='Admin Dashboard' subTitle='Monitor overall platform performance including bookings, cars, and revenue.' />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>
                {dashboardData.map((card, index) => (
                    <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>
                        <div>
                            <h1 className='text-xs text-gray-500'>{card.title}</h1>
                            <p className='text-lg font-semibold'>{card.value}</p>
                        </div>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
                            <Image src={card.icon} alt={card.title} className='h-4 w-4' />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
