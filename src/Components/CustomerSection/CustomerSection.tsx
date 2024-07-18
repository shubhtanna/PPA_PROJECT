import Image from "next/image"
import TESLA from "../../assets/Tesla_image (1).png"
import ICON1 from '../../assets/Icon1.png'
import ICON2 from '../../assets/Icon2.png'
import ICON3 from '../../assets/Icon3.png'
import ICON4 from '../../assets/Icon4.png'
import ICON5 from '../../assets/Icon5.png'
import ICON6 from '../../assets/Icon6.png'
import { Button } from "../ui/button"
import { GoArrowRight } from "react-icons/go";

const CustomerSection = () => {
    return (
        <div className="w-11/12 mx-auto my-16">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">
                <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
                    <Image src={TESLA} alt="customer_image" className="w-full h-auto max-w-[600px]" />
                </div>

                <section className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                    <p className="text-base text-[#717171] font-medium px-4 md:px-0">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>

                    <h3 className="text-[#4CAF4F] text-xl font-semibold">Tim Smith</h3>

                    <p className="text-[#89939E] text-base font-normal">British Dragon Boat Racing Association</p>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 py-10">
                        <Image src={ICON1} alt="icon" />
                        <Image src={ICON2} alt="icon" />
                        <Image src={ICON3} alt="icon" />
                        <Image src={ICON4} alt="icon" />
                        <Image src={ICON5} alt="icon" />
                        <Image src={ICON6} alt="icon" />

                        <Button className="flex justify-center items-center gap-2 mt-4 md:mt-0" variant={'link'}>
                            Meet all customers
                            <GoArrowRight size={20}/>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CustomerSection