import * as React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block font-medium text-gray-800 mb-1 text-sm">
                        {label}
                    </label>
                )}
                <textarea
                    className={cn(
                        'w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm',
                        'focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
                        'placeholder:text-gray-400',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Textarea.displayName = 'Textarea'

export { Textarea }
