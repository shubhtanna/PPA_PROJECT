import Image from "next/image"
import ICON1 from "../../assets/Icon1.png"
import ICON2 from '../../assets/Icon2.png'
import ICON3 from '../../assets/Icon3.png'
import ICON4 from '../../assets/Icon4.png'
import ICON5 from '../../assets/Icon5.png'
import ICON6 from '../../assets/Icon6.png'
import Topheading from "../Common/TopHeading"


const ClientSection = () => {
    return (
        <div className="py-10">

            <Topheading heading="Our Clients" para="We have been working with some Fortune 500+ clients"/>

            <section className="flex justify-center items-center flex-wrap gap-20 py-10">

                <Image src={ICON1} alt="icon" />
                <Image src={ICON2} alt="icon" />
                <Image src={ICON3} alt="icon" />
                <Image src={ICON4} alt="icon" />
                <Image src={ICON5} alt="icon" />
                <Image src={ICON6} alt="icon" />
                <Image src={ICON1} alt="icon" />

            </section>

        </div>
    )
}

export default ClientSection