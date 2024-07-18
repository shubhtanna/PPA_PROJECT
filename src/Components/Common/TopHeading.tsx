import React from 'react'

interface HeadersProps {
    heading: string,
    para: string
}

const Topheading: React.FC<HeadersProps> = ({
    heading,
    para
}) => {
    return (
        <div className="text-center my-8 flex flex-col items-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 w-full lg:w-2/3">{heading}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 w-full lg:w-2/3">{para}</p>
        </div>
    )
}

export default Topheading
