'use client';

import {Button} from '@/components/ui/button';
import {MoveLeft} from 'lucide-react';
import Link from 'next/link';

const BackBtn = () => {
    return (
        <Button
            asChild
            type="button"
            aria-label="Back"
            variant="ghost"
            className="back-btn bg-(--primary) text(length:--fs-16) leading-(--lh-200) font-light rounded-sm w-[8.5rem] h-(--space-500) cursor-pointer">
            <Link href="/">
                <MoveLeft />
                Back
            </Link>
        </Button>
    );
};

export default BackBtn;
