import { ABOUT, COMPANY, icons, SUPPORT } from "../../constants"
import Socials from "../components/Socials"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="w-full lg:w-[443px] col-span-2 flex flex-col gap-5">
                <h2>Foodsco</h2>
                <p>
                    A cutting-edge food experience that offers a seamless and immersive culinary adventure for food lovers. Discover your dream dishes with us.
                </p>

                <div className="flex justify-between border-2 border-white rounded-[18px] lg:rounded-[26px] px-2 lg:px-4 py-2 lg:py-[18px]">
                    <input type="text" placeholder="Write your email here" className="flex w-full bg-transparent"/>
                    <button className="w-fit primary-bg-color text-white px-5 lg:px-[30px] py-[10px] text-[16px] font-semibold rounded-[10px] hover:shadow-md">Submit</button>
                </div>
            </div>

            <div className="w-fit">
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-36">
                    <div className="flex flex-col gap-4 lg:gap-[29px]">
                        <h3 className="text-[#FF8F5C] font-medium text-lg lg:text-xl">About</h3>
                        <ul className="opacity-70 text-lg gap-2">
                            {ABOUT.map(about => (
                                <li key={about} className="hover:text-[#FF8F5C] cursor-pointer text-sm">{about}</li>
                            ))}
                        </ul>

                        <span className="flex gap-2 lg:mt-[62px]"><img src={icons.phone} alt="phone"/>06112345678</span>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-[29px]">
                        <h3 className="text-[#FF8F5C] font-medium text-lg lg:text-xl">Company</h3>
                        <ul className="opacity-70 text-lg gap-2">
                            {COMPANY.map(company => (
                                <li key={company} className="hover:text-[#FF8F5C] cursor-pointer text-sm">{company}</li>
                            ))}
                        </ul>

                        <span className="flex gap-2 lg:mt-[62px]"><img src={icons.mail} alt="mail"/>Foodsco@gmail.com</span>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-[29px]">
                        <h3 className="text-[#FF8F5C] font-medium text-lg lg:text-xl">Support</h3>
                        <ul className="opacity-70 text-lg gap-2">
                            {SUPPORT.map(support => (
                                <li key={support} className="hover:text-[#FF8F5C] cursor-pointer text-sm">{support}</li>
                            ))}
                        </ul>

                        <div className="lg:mt-[62px]">
                            <Socials variant={"size-8 p-2 rounded-full border-[1px] border-white/80 cursor-pointer"} type={"white"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-shoutout">
            <p>Designed with 🥰 by <a href="https://x.com/vicky_uiux" target="_blank" rel="noopener noreferrer" className="underline primary-text-color">@vicky_uiux</a></p>
        </div>
    </footer>
  )
}

export default Footer