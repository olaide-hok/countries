import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format numbers with commas
export const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
        maximumFractionDigits: 2,
    });
};
