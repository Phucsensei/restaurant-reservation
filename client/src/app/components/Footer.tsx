
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../assets/assets'

const Footer = () => {
    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
    ]

    const categories = [
        { name: 'SUV', href: '/cars?category=suv' },
        { name: 'Sedan', href: '/cars?category=sedan' },
        { name: 'Sports Car', href: '/cars?category=sports' },
        { name: 'Luxury', href: '/cars?category=luxury' },
    ]

    const contactInfo = [
        { icon: assets.location_icon, text: 'Cẩm lệ, Ngũ Hành Sơn, Đà Nẵng' },
        { icon: assets.gmail_logo, text: 'phuctc6776@gmail.com' },
        { icon: assets.car_icon, text: '+84 0867167237' },
    ]

    const socialLinks = [
        { icon: assets.facebook_logo, href: 'https://facebook.com' },
        { icon: assets.twitter_logo, href: 'https://twitter.com' },
        { icon: assets.instagram_logo, href: 'https://instagram.com' },
    ]

    return (
        <footer className="bg-white border-t border-borderColor mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <Image src={assets.logo} alt="logo" className="h-8 w-auto" />
                        </Link>
                        <p className="text-gray-500 text-sm">
                            Your trusted partner for car rentals. Experience the best service and quality vehicles for your journey.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                                >
                                    <Image src={link.icon} alt="social" className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
                        <ul className="space-y-3">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        href={category.href}
                                        className="text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <Image src={info.icon} alt="" className="h-5 w-5 text-gray-400" />
                                    <span className="text-gray-500 text-sm">{info.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-borderColor">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Car Rental. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                            >
                                Terms
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
