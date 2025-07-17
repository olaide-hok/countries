'use client';

import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';

export function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    // useEffect only runs on the client, so we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder that matches the button's size to prevent layout shift
        return (
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-x-(--space-100) cursor-pointer">
                <div className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-x-(--space-100) cursor-pointer"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? (
                <>
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="text-(--primary-foreground) text-base font-semibold leading-(--lh-200)">
                        Dark Mode
                    </span>
                </>
            ) : (
                <>
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                    <span className="text-(--primary-foreground) text-base font-semibold leading-(--lh-200)">
                        Light Mode
                    </span>
                </>
            )}
        </Button>
    );
}
