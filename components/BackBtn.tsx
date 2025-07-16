'use client';

import {Button} from '@/components/ui/button';
import {MoveLeft} from 'lucide-react';

const BackBtn = () => {
    return (
        <Button
            variant="ghost"
            className="back-btn bg-(--primary) text(length:--fs-16) leading-(--lh-200) font-light rounded-sm w-[8.5rem] h-(--space-500) cursor-pointer"
            onClick={() => console.log('Back button clicked')}>
            <MoveLeft />
            Back
        </Button>
    );
};

export default BackBtn;
