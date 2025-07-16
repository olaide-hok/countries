'use client';

import * as React from 'react';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

import {Button} from '@/components/ui/button';

export function ModeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <>
            {theme !== 'light' ? (
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-x-(--space-100) cursor-pointer"
                    onClick={() => setTheme('light')}>
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-90" />

                    <span className="text-(--primary-foreground) text-base font-semibold leading-(--lh-200)">
                        Light Mode
                    </span>
                </Button>
            ) : (
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-x-(--space-100) cursor-pointer"
                    onClick={() => setTheme('dark')}>
                    <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

                    <span className="text-(--primary-foreground) text-base font-semibold leading-(--lh-200)">
                        Dark Mode
                    </span>
                </Button>
            )}
        </>
    );
}
