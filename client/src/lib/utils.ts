import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const convertToTiming = (
    intervalType: string,
    value?: number,
): string => {
    switch (intervalType) {
        case 'minutes':
            if (!value) return '0 * * * *' // Every hour as fallback
            return `*/${value} * * * *`
        case 'hours':
            if (!value) return '0 * * * *' // Every hour as fallback
            return `0 */${value} * * *`
        case 'days':
            if (!value) return '0 0 * * *' // Daily as fallback
            return `0 0 */${value} * *`
        case 'months':
            if (!value) return '0 0 1 * *' // Monthly as fallback
            return `0 0 1 */${value} *`
        case 'one_time':
            return '' // One-time jobs don't need cron expressions
        default:
            return '0 * * * *' // Default to hourly
    }
}
