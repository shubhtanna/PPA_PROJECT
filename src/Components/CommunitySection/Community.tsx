import COMMUNITY from '../../assets/Community_icon.png'
import CITY from '../../assets/CIty_icon.png'
import GROUP from '../../assets/Group_icon.png'
import Image from 'next/image'
import Topheading from '../Common/TopHeading'

const CommunitySection = () => {
    return (
        <div className='py-10'>

            <Topheading heading='Manage your entire community in a single system' para='Who is Nextcent suitable for?'/>

            <section className='flex justify-center gap-32 items-center text-center py-10 flex-wrap'>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={COMMUNITY} alt='community_icon' />
                    <h2 className='text-[#4D4D4D] text-[28px] font-bold'>Membership Organisations</h2>
                    <p className='text-[#717171] text-sm font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={CITY} alt='city_icon' />
                    <h2 className='text-[#4D4D4D] text-[28px] font-bold'>National Associations</h2>
                    <p className='text-[#717171] text-sm font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={GROUP} alt='group_icon' />
                    <h2 className='text-[#4D4D4D] text-[28px] font-bold'>Clubs And Groups</h2>
                    <p className='text-[#717171] text-sm font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </section>

        </div>
    )
}

export default CommunitySection