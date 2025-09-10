'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false)

    return (
        <div className="flex h-[700px] w-full">
            <div className="w-full hidden md:inline-block relative">
                <Image className="h-full" src={assets.restaurant_desert} alt="leftSideImage" />

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Main Text */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white max-w-sm">
                    <h1 className="text-xl md:text-4xl font-bold mb-4 leading-normal">
                        Fresh & Healthy
                    </h1>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Experience the finest culinary journey with our premium restaurant services
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-5xl text-gray-900 font-semibold ">
                        {isSignUp ? 'Sign up' : 'Sign in'}
                    </h2>
                    <p className="text-sm text-gray-500/90 mt-3">
                        {isSignUp
                            ? 'Create a new account to get started'
                            : 'Welcome back! Please sign in to continue'}
                    </p>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="w-full text-nowrap text-sm text-gray-500/90">
                            {isSignUp ? 'sign up with email' : 'or sign in with email'}
                        </p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                                fill="#6B7280" />
                        </svg>
                        <input type="email" placeholder="Email" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                    </div>

                    {/* Password */}
                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                                fill="#6B7280" />
                        </svg>
                        <input type="password" placeholder="Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                    </div>

                    {/* Confirm password */}
                    {isSignUp && (
                        <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                                    fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Confirm Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                        </div>
                    )}

                    {!isSignUp && (
                        <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                            <div className="flex items-center gap-2">
                                <input className="h-5" type="checkbox" id="checkbox" />
                                <label className="text-sm" htmlFor="checkbox">Remember me</label>
                            </div>
                            <a className="text-sm underline" href="#">Forgot password?</a>
                        </div>
                    )}

                    <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                        {isSignUp ? 'Sign up' : 'Login'}
                    </button>

                    <p className="text-gray-500/90 text-sm mt-4">
                        {isSignUp
                            ? <>Already have an account? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setIsSignUp(false)}>Sign in</span></>
                            : <>Don’t have an account? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setIsSignUp(true)}>Sign up</span></>}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
