import * as React from "react"
import SLIDE1 from '../../assets/Carousel_IMG.png'
import SLIDE2 from '../../assets/Caresoul_img2.jpg'
import SLIDE3 from '../../assets/Caresoul_img3.jpg'

// import { Card,CardContent } from "../ui/card"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "../ui/carousel"
import { Button } from "../ui/button"
import Image from "next/image"
import HighlightText from "../Common/HighlightText"


const CarouselPart = () => {
    return (
        <div className=" w-[92vw] border-1 border-red-300 mx-auto">
            <Carousel>
                <CarouselContent className="bg-[#F5F7FA]">
                    <CarouselItem>
                        <div className="flex justify-center items-center p-32">

                            <div>

                                <div className=" flex flex-col gap-4">

                                    <h1 className=" font-semibold text-6xl text-[#4D4D4D] max-w-[75%]">Lessons and insights <HighlightText text="from 8 years"/></h1>

                                    <p className=" text-[#717171] text-base font-normal">Where to grow your business as a photographer: site or social media?</p>

                                    <Button className="w-fit text-base">Register</Button>
                                </div>

                            </div>

                            <div>

                                <Image src={SLIDE1} alt="Carousel_image" />

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center p-32">

                            <div>

                                <div className=" flex flex-col gap-4">

                                    <h1 className=" font-semibold text-6xl text-[#4D4D4D] max-w-[75%]">Reflections from a journey spanning <HighlightText text="eight years."/></h1>

                                    <p className=" text-[#717171] text-base font-normal">Where to grow your business as a photographer: site or social media?</p>

                                    <Button className="w-fit text-base">Register</Button>
                                </div>

                            </div>

                            <div>

                                <Image src={SLIDE2} alt="Carousel_image" />

                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem><div className="flex justify-center items-center p-32">

                        <div>

                            <div className=" flex flex-col gap-4">

                                <h1 className=" font-semibold text-6xl text-[#4D4D4D] max-w-[75%]">Wisdom gained through a <HighlightText text="decade of experience"/></h1>

                                <p className=" text-[#717171] text-base font-normal">Where to grow your business as a photographer: site or social media?</p>

                                <Button className="w-fit text-base">Register</Button>
                            </div>

                        </div>

                        <div>

                            <Image src={SLIDE3} alt="Carousel_image" />

                        </div>
                    </div></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default CarouselPart