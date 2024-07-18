import * as React from "react";
import SLIDE1 from "../../assets/Carousel_IMG.png";
import SLIDE2 from "../../assets/Caresoul_img2.jpg";
import SLIDE3 from "../../assets/Caresoul_img3.jpg";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import HighlightText from "../Common/HighlightText";

const CarouselPart = () => {
    return (
        <div className="w-full lg:w-[92vw] border-1 border-red-300 mx-auto mt-1">
            <Carousel>
                <CarouselContent >
                    <CarouselItem className="bg-[#F5F7FA]">
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8 lg:gap-0">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-semibold text-2xl lg:text-6xl text-[#4D4D4D] max-w-full lg:max-w-[75%]">
                                        Lessons and insights <HighlightText text="from 8 years" />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image src={SLIDE1} alt="Carousel_image" />
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="bg-[#F5F7FA]">
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8 lg:gap-0">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-semibold text-2xl lg:text-6xl text-[#4D4D4D] max-w-full lg:max-w-[75%]">
                                        Reflections from a journey spanning <HighlightText text="eight years." />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image src={SLIDE2} alt="Carousel_image" />
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="bg-[#F5F7FA]">
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8 lg:gap-0">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-semibold text-2xl lg:text-6xl text-[#4D4D4D] max-w-full lg:max-w-[75%]">
                                        Wisdom gained through a <HighlightText text="decade of experience" />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image src={SLIDE3} alt="Carousel_image" />
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
            </Carousel>
        </div>
    );
};

export default CarouselPart;
