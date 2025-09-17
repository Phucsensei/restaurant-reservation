'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { assets, dummyTableData } from '../../assets/assets'
import Image from 'next/image'
import Loader from '../../components/Loader'

const TableDetails = () => {
    const params = useParams()
    const router = useRouter()

    // Lấy id an toàn (tránh trường hợp string[])
    const id = Array.isArray(params.id) ? params.id[0] : params.id

    interface Table {
        _id: string
        brand: string
        model: string
        category: string
        year: number
        seating_capacity: number
        fuel_type: string
        pricePerDay: number
        description: string
        image: string
    }

    const [table, setTable] = useState<Table | null>(null)
    const currency = process.env.NEXT_PUBLIC_CURRENCY || '$'

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // TODO: handle booking API here
    }

    useEffect(() => {
        if (id) {
            const foundTable = dummyTableData.find((table) => table._id === id)
            setTable(foundTable || null)
        }
    }, [id])

    return table ? (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-24">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
            >
                <Image
                    src={assets.arrow_icon}
                    alt="arrow"
                    className="rotate-180 opacity-65"
                />
                Back to all tables
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Left: Car Image and Details */}
                <div className="lg:col-span-2">
                    <Image
                        src={table.image}
                        alt={`${table.brand} ${table.model}`}
                        width={800}
                        height={500}
                        className="w-full h-auto md:max-h-[400px] object-cover rounded-xl mb-6 shadow-md"
                    />

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {table.brand} {table.model}
                            </h1>
                            <p>
                                {table.category} · {table.year}
                            </p>
                        </div>

                        <hr className="border-borderColor my-6" />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: assets.users_icon,
                                    text: `${table.seating_capacity} Seats`,
                                },
                                { icon: assets.fuel_icon, text: table.fuel_type },
                                { icon: assets.car_icon, text: table.model },
                                { icon: assets.location_icon, text: table.category },
                            ].map(({ icon, text }) => (
                                <div
                                    key={text}
                                    className="flex flex-col items-center bg-light p-4 rounded-lg"
                                >
                                    <Image src={icon} alt="" className="h-5 mb-2" />
                                    {text}
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div>
                            <h1 className="text-xl font-medium mb-3">Description</h1>
                            <p className="text-gray-600">{table.description}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h1 className="text-xl font-medium mb-3">Features</h1>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    'Wifi',
                                    'Parking',
                                    'Air Conditioning',
                                    'Free Cancellation',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center text-gray-500"
                                    >
                                        <Image
                                            src={assets.check_icon}
                                            alt="check"
                                            className="h-4 mr-2"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right: Booking Form */}
                <form
                    onSubmit={handleSubmit}
                    className="shadow-lg h-max sticky top-[72px] rounded-xl p-6 space-y-6 text-gray-500"
                >
                    <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
                        {currency}
                        {table?.pricePerDay}
                        <span className="text-base text-gray-400 font-normal">
                            per day
                        </span>
                    </p>

                    <hr className="border-borderColor my-6" />

                    <div className="flex flex-col gap-2">
                        <label htmlFor="pickup-date">Pick-up Date</label>
                        <input
                            type="date"
                            className="border border-borderColor px-3 py-2 rounded-lg"
                            required
                            id="pickup-date"
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="return-date">Return Date</label>
                        <input
                            type="date"
                            className="border border-borderColor px-3 py-2 rounded-lg"
                            required
                            id="return-date"
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
                        Book Now
                    </button>
                    <p className="text-center text-sm">
                        No credit card required to reserve
                    </p>
                </form>
            </div>
        </div>
    ) : (
        <Loader />
    )
}

export default TableDetails
