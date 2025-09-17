'use client'


import React, { useEffect, useState } from 'react'

import { assets, dummyDashboardData } from '@/app/assets/assets'
import Image from 'next/image'
import Title from '@/app/components/Admin/Title'

const Dashboard = () => {

    const currentPrice = process.env.NEXT_PUBLIC_PRICE
    const [data, setData] = useState({
        totalTables: 0,
        totalReservations: 0,
        pendingReservations: 0,
        availableTables: 0,
        recentBookings: [],
        monthlyRevenue: 0
    })

    const dashboardData = [
        {
            title: 'Total Tables',
            value: data.totalTables,
            icon: assets.listIconColored
        },
        {
            title: 'Today\'s Reservations',
            value: data.totalReservations,
            icon: assets.listIconColored
        },
        {
            title: 'Pending Confirmations',
            value: data.pendingReservations,
            icon: assets.cautionIconColored
        },
        {
            title: 'Available Tables',
            value: data.availableTables,
            icon: assets.check_icon
        }
    ]

    useEffect(() => {
        setData(dummyDashboardData)
    }, [])

    return (
        <div className='px-4 pt-10 md:px-10 flex-1'>
            <Title
                title='Restaurant Dashboard'
                subTitle='Monitor your restaurant performance, table reservations, and manage bookings efficiently.'
            />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>
                {dashboardData.map((card, index) => (
                    <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>
                        <div>
                            <h1 className='text-xs text-gray-500'>{card.title}</h1>
                            <p className='text-lg font-semibold'>{card.value}</p>
                        </div>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
                            <Image src={card.icon} alt={card.title} width={16} height={16} className='h-4 w-4' />

                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
                {/* recent bookings */}
                <div className="p-5 border border-borderColor rounded-lg max-w-lg w-full bg-white shadow-sm">
                    <h1 className="text-lg font-semibold">Recent Bookings</h1>
                    <p className="text-sm text-gray-500">Latest customer bookings</p>

                    <div className="mt-4 divide-y divide-gray-100">
                        {data.recentBookings.map((booking, index) => (
                            <div key={index} className="flex items-center justify-between py-3">
                                {/* Left: table info */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                                        <Image src={assets.listIconColored} alt="" className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Table {booking.table.number}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(booking.date).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: price + status */}
                                <div className="flex items-center gap-3">
                                    <p className="text-sm font-medium text-gray-700">
                                        {currentPrice}{booking.price}
                                    </p>
                                    <span
                                        className={`px-2 py-0.5 text-xs rounded-md border ${booking.status === 'confirmed'
                                            ? 'bg-green-50 text-green-600 border-green-200'
                                            : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* monthly revenue */}
                <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs'>
                    <h1 className='text-lg font-semibold'>Monthly Revenue</h1>
                    <p className='text-gray-500'>Revenue for current month</p>
                    <p className='text-3xl mt-6 font-semibold text-primary'>{currentPrice}{data.monthlyRevenue}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
