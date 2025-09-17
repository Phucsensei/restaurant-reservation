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
        <div className='px-6 py-8 flex-1 bg-gray-50'>
            <Title
                title='Restaurant Dashboard'
                subTitle='Monitor your restaurant performance, table reservations, and manage bookings efficiently.'
            />
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
                {dashboardData.map((card, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between'>
                        <div>
                            <h2 className='text-sm text-gray-600 font-medium mb-1'>{card.title}</h2>
                            <p className='text-2xl font-semibold text-gray-800'>{card.value}</p>
                        </div>
                        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                            <Image src={card.icon} alt={card.title} width={20} height={20} className='h-5 w-5' />
                        </div>
                    </div>
                ))}
            </div>

            <div className='grid lg:grid-cols-3 gap-6'>
                {/* recent bookings */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Recent Bookings</h2>
                            <p className="text-sm text-gray-500">Latest customer bookings</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {data.recentBookings.map((booking, index) => (
                            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                {/* Left: table info */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                                        <Image src={assets.listIconColored} alt="" width={20} height={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Table {booking.table.number}
                                        </p>
                                        <p className="text-sm text-gray-500">
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
                                <div className="flex items-center gap-4">
                                    <p className="text-sm font-medium text-gray-700">
                                        {currentPrice}{booking.price}
                                    </p>
                                    <span
                                        className={`px-3 py-1 text-xs font-medium rounded-full ${booking.status === 'confirmed'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
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
                <div className='bg-white p-6 rounded-lg border border-gray-200'>
                    <h2 className='text-lg font-semibold text-gray-800'>Monthly Revenue</h2>
                    <p className='text-sm text-gray-500'>Revenue for current month</p>
                    <p className='text-4xl font-bold text-primary mt-8'>{currentPrice}{data.monthlyRevenue}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
