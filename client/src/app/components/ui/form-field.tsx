'use client'

import { Label } from './label'
import { Input } from './input'
import { cn } from '@/lib/utils'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
    label: string
    className?: string
    type?: string
    as?: 'input' | 'select'
    children?: React.ReactNode
}

export const FormField = ({
    label,
    className,
    as = 'input',
    children,
    ...props
}: FormFieldProps) => {
    return (
        <div className={cn('w-full', className)}>
            <Label className='block font-medium text-gray-800 mb-1'>{label}</Label>
            {as === 'input' ? (
                <Input {...props} />
            ) : (
                <select
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white'
                    {...props}
                >
                    {children}
                </select>
            )}
        </div>
    )
}
