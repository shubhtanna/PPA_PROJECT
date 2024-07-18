import React from 'react'
import modeStore from '@/stores/modeStore'

interface HeadersProps {
    heading: string,
    para: string
}

const Topheading: React.FC<HeadersProps> = ({
    heading,
    para
}) => {
    const {mode} = modeStore((state) => ({mode:state.mode}));
    return (
        <div className="text-center my-8 flex flex-col items-center w-full">
            <h1 className={`text-2xl md:text-3xl  lg:text-4xl w-full lg:w-1/3 ${mode === 'dark' ? "text-white" : "text-[#4D4D4D]"}`}>{heading}</h1>
            <p className={`text-base md:text-sm font-semibold lg:text-lg mt-4 w-full lg:w-1/2 ${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'}`}>{para}</p>
        </div>
    )
}

export default Topheading
