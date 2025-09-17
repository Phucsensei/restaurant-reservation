import Image, { type StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { assets } from '../assets/assets'

const currentPrice = process.env.NEXT_PUBLIC_PRICE

interface TableItem {
    _id: string
    image: string | StaticImageData
    number: string
    type: string
    section: string
    capacity: number
    isAvailable?: boolean
    pricePerSlot: number
    isWindow: boolean
    location: string
    description: string
}

interface TableCardProps {
    table: TableItem
}

const TableCard: React.FC<TableCardProps> = ({ table }) => {
    const router = useRouter()

    const handleCardClick = () => {
        router.push(`/table-details/${table._id}`)
    }

    return (
        <div
            onClick={handleCardClick}
            className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white'>
            <div className='relative h-48 overflow-hidden'>
                <Image src={table.image} alt={`Table ${table.number}`} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

                {table.isWindow && (
                    <p className='absolute top-4 left-4 bg-blue-500/90 text-white text-xs px-2.5 py-1 rounded-full'>
                        Window View
                    </p>
                )}

                {table.isAvailable && (
                    <p className='absolute top-4 right-4 bg-green-500/90 text-white text-xs px-2.5 py-1 rounded-full'>
                        Available Now
                    </p>
                )}

                <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
                    <span className='font-semibold'>{currentPrice}{table.pricePerSlot}</span>
                    <span className='text-sm text-white/80'> / slot</span>
                </div>
            </div>
            <div className='p-4 sm:p-5'>
                <div className='flex justify-between items-start mb-3'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>Table {table.number}</h3>
                        <p className='text-sm text-gray-500'>{table.section}</p>
                    </div>
                    <span className='px-2 py-1 bg-primary/10 text-primary text-sm rounded-md'>
                        {table.type}
                    </span>
                </div>

                <div className='mt-4 grid grid-cols-2 gap-3 text-gray-600'>
                    <div className='flex items-center text-sm'>
                        <Image src={assets.users_icon} alt='capacity' width={16} height={16} className='mr-2' />
                        <span>{table.capacity} Guests</span>
                    </div>
                    <div className='flex items-center text-sm'>
                        <Image src={assets.location_icon} alt='location' width={16} height={16} className='mr-2' />
                        <span>{table.location}</span>
                    </div>
                </div>

                <p className='mt-3 text-sm text-gray-500 line-clamp-2'>
                    {table.description}
                </p>

            </div>
        </div>
    )
}

export default TableCard
