import { cn } from '@/lib/utils';
import React from 'react'

interface ItemWrapperProps {
    Icon: React.ElementType; // Use ElementType or ComponentType
    text1: string;
    text2: string;
    className?: string;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({ Icon, text1, text2, className }) => {
    return (
        <div className={cn('flex item-center justify-center gap-4', className)}>
            <div className="flex items-center justify-center w-12 h-12 transition-all ease-in bg-white/40 hover:text-primary rounded-full shadow-inner hover:scale-110 ">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/30 rounded-full shadow-lg">
                    {/* Use the Icon as a component */}
                    <Icon className="text-pink-600 hover:text-white shadow-2xl w-[30px] h-[30px]" />
                </div>
            </div>

            <div className='flex flex-col text-sm font-thin text-pretty'>
                <p className=''>{text1}</p>
                <p className=' text-lg '>{text2}</p>
            </div>
        </div>
    )
}

export default ItemWrapper;


