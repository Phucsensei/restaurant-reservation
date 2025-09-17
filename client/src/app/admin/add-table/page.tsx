'use client'

import Title from '@/app/components/Admin/Title'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { useForm } from 'react-hook-form'
import { Form } from '@/app/components/ui/form'
import { FormField } from '@/app/components/ui/form-field'
import { Checkbox } from '@/app/components/ui/checkbox'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'
import { Button } from '@/app/components/ui/button'

interface TableFormData {
    number: string
    capacity: number
    section: string
    image: string
    type: string
    isWindow: boolean
    pricePerSlot: number
    location: string
    description: string
    isAvailable: boolean
    createdAt: string
}

const AddTablePage = () => {
    const [image, setImage] = useState<string | File>('')
    const form = useForm<TableFormData>({
        defaultValues: {
            number: '',
            capacity: 0,
            section: '',
            image: '',
            type: '',
            isWindow: false,
            pricePerSlot: 0,
            location: '',
            description: '',
            isAvailable: true,
            createdAt: new Date().toISOString(),
        }
    })

    const onSubmit = async (data: TableFormData) => {
        console.log(data)
    }

    return (
        <div className='px-6 py-8 flex-1 bg-gray-50'>
            <Title title='Add Table' subTitle='Add a new table to the system' />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col gap-6 text-gray-600 text-sm mt-6 max-w-xl">
                    {/* Table Image */}
                    <div className='flex items-center gap-4'>
                        <label htmlFor="table-image" className="cursor-pointer">
                            <div className="relative w-24 h-24 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                {image instanceof File ? (
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt="table preview"
                                        fill
                                        className='object-fill rounded-lg'
                                    />
                                ) : (
                                    <Image
                                        src={assets.upload_icon}
                                        alt="upload"
                                        className='opacity-50 w-full h-full'
                                    />
                                )}
                            </div>
                            <input
                                type='file'
                                id='table-image'
                                accept='image/*'
                                hidden
                                onChange={e => e.target.files?.[0] && setImage(e.target.files[0])}
                            />
                        </label>
                        <div>
                            <p className='font-medium text-gray-800'>Table Image</p>
                            <p className='text-sm text-gray-500 mt-1'>Upload a picture of the table</p>
                        </div>
                    </div>

                    {/* Table Details */}
                    <div className='grid grid-cols-2 gap-4'>
                        <FormField
                            label="Table Number"
                            placeholder="e.g. T01"
                            {...form.register('number')}
                        />

                        <FormField
                            label="Capacity"
                            type="number"
                            placeholder="Number of guests"
                            {...form.register('capacity', { valueAsNumber: true })}
                        />

                        <FormField
                            label="Section"
                            as="select"
                            {...form.register('section')}
                        >
                            <option value="">Select section</option>
                            <option value="Main Hall">Main Hall</option>
                            <option value="Terrace">Terrace</option>
                            <option value="Private Room">Private Room</option>
                        </FormField>

                        <FormField
                            label="Type"
                            as="select"
                            {...form.register('type')}
                        >
                            <option value="">Select type</option>
                            <option value="Standard">Standard</option>
                            <option value="Family">Family</option>
                            <option value="Premium">Premium</option>
                            <option value="VIP">VIP</option>
                        </FormField>

                        <FormField
                            label="Price per Slot"
                            type="number"
                            placeholder="Price in USD"
                            {...form.register('pricePerSlot', { valueAsNumber: true })}
                        />

                        <FormField
                            label="Location"
                            as="select"
                            {...form.register('location')}
                        >
                            <option value="">Select location</option>
                            <option value="Ground Floor">Ground Floor</option>
                            <option value="First Floor">First Floor</option>
                            <option value="Rooftop">Rooftop</option>
                        </FormField>
                    </div>

                    {/* Additional Options */}
                    <div className='space-y-3'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <Checkbox
                                checked={form.watch('isWindow')}
                                onCheckedChange={(checked) => form.setValue('isWindow', checked)}
                            />
                            <span>Window View</span>
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <Checkbox
                                checked={form.watch('isAvailable')}
                                onCheckedChange={(checked) => form.setValue('isAvailable', checked)}
                            />
                            <span>Available for Booking</span>
                        </label>
                    </div>

                    {/* Description */}
                    <div>
                        <Label className='block font-medium text-gray-800 mb-1'>Description</Label>
                        <Textarea
                            rows={3}
                            placeholder="Describe the table and its features..."
                            {...form.register('description')}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className='bg-primary text-white font-medium px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-4'
                    >
                        Add Table
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default AddTablePage
