import Socials from "../components/Socials"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="col-span-2 flex flex-col gap-5">
            <h2>Foodsco</h2>
            <p>
                A cutting-edge food experience that offers a seamless and immersive culinary adventure for food lovers. Discover your dream dishes with us.
            </p>

            <div className="flex justify-between border-2 border-white rounded-[26px] px-4 py-[18px]">
                <input type="text" placeholder="Write your email here" className="flex w-full bg-transparent"/>
                <button className="w-fit primary-bg-color text-white px-[30px] py-[10px] text-[16px] font-semibold rounded-[10px] hover:shadow-md">Submit</button>
            </div>
        </div>
        <div className="col-span-3">
            <div>
                about and all that jazz
            </div>
            <div>
                <span><img src="" alt="" />06112345678</span>
                <span><img src="" alt="" />Foodsco@gmail.com</span>
                <Socials variant={"size-8 p-2 rounded-full border-[1px] border-white"} />
            </div>
        </div>
    </footer>
  )
}

export default Footer