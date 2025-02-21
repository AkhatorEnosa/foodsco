import { images } from '../../constants'
import { CUSTOMERS, MENUS } from '../../constants/images'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Details from '../components/Details'
import Socials from '../components/Socials'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        
        <div className='hero-content'>
            <div className='col-span-3'>
                <div className='flex justify-center items-center border-[1px] border-[#FF7433] rounded-full w-fit p-1 bg-white mb-[10px]'>
                    <span className='bg-[#FF7433] text-[10px] text-white rounded-full py-[2px] px-1'>Taste, Savor, Enjoy</span>
                </div>

                <h1 className='hero-heading'>Experience the <span className='text-[#FD5200]'>Goodness</span> and the <span className='text-[#FD5200]'>Taste!!</span></h1>

                <p className='hero-text'>Indulge in our culinary delights, crafted with the finest ingredients to tantalize your taste buds. Join us today and discover a new favorite dish that will keep you coming back for more.</p>

                <div className='flex gap-2 mt-8'>
                    <Button title="Order Now"/>
                    <Button title="View Menu" type="transparent"/>
                </div>

                <div className='flex gap-12 items-center mt-[45.5px]'>
                    <Details items={CUSTOMERS} heading={"20,000+"} title={"Trusted Customers"}/>
                    <Details items={MENUS} heading={"500+"} title={"Menus"}/>
                </div>

            </div>

            <img src={images.heroImg} alt=""/>
            <div className='absolute top-5 right-0 bg-[#FD5200] opacity-15 size-[700px] rounded-full blur-[150px]'></div>

        </div>
        <div className='w-full flex justify-between items-end'>
            <Carousel />
            <Socials variant={"size-10 p-2 rounded-full border-[1px] border-black"}/>
        </div>
    </section>
  )
}

export default Hero