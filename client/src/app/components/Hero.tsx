import React from 'react'
import { assets, cityList } from '../assets/assets'
import Image from 'next/image'

const Hero = () => {


    return (
        <div className='h-screen relative flex items-center justify-center'>
            {/* Background Image */}
            <Image
                src={assets.main_restaurant}
                alt='hero'
                className='absolute inset-0 w-full h-full object-cover'
                priority
            />

            {/* Overlay content */}
            <div className='relative z-10 flex flex-col items-center justify-center text-center px-4'>
                {/* Title */}
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-12 drop-shadow-lg'>
                    Luxury Restaurant on Rent
                </h1>

                {/* Search Form */}
                <div className='w-full max-w-4xl'>
                    <form className='flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-white shadow-2xl'>
                        {/* Location Select */}
                        <div className='flex-1 w-full md:w-auto'>
                            <div className='relative'>
                                <select
                                    required
                                    className='w-full px-4 py-3 pr-8 text-gray-700 bg-transparent border-none outline-none appearance-none cursor-pointer'
                                >
                                    <option value=''>City or restaurant name</option>
                                    {cityList.map((city) => (
                                        <option value={city} key={city}>{city}</option>
                                    ))}
                                </select>
                                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Date select */}
                        <div className='flex-1 w-full md:w-auto  flex flex-col items-start'>
                            <label htmlFor='pickup-date'>Pick-up Date</label>
                            <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
                        </div>
                        <div className='flex-1 w-full md:w-auto flex flex-col items-start'>
                            <label htmlFor='return-date'>Return Date</label>
                            <input type="date" id="return-date" className='text-sm text-gray-500' required />
                        </div>

                        {/* Search Button */}
                        <button
                            type='submit'
                            className='flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium'
                        >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                            </svg>
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
