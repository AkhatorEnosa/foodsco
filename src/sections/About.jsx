/* eslint-disable react/prop-types */

import { images } from "../../constants"
import Button from "../components/Button"

const About = () => {
  return (
    <section className="about-wrapper">
        <div className="about-desc">
            <h1 className="section-heading">About Us</h1>
            <p className="about-text">At Foodsco, we are passionate about bringing you the finest culinary experiences.ur mission is to deliver fresh, high-quality ingredients and delectable dishes right to your doorstep. Whether you&apos;re craving a classic favorite or eager to try something new, Foodsco is here to satisfy your taste buds with convenience and excellence. Our team of culinary experts and dedicated staff work tirelessly to ensure that every meal meets the highest standards of taste and quality.  </p>
            <Button title={"Learn More"}/>
        </div>

        <div className="about-img">
            <div className="flex flex-col h-fit gap-5">
                <div className="about-img-content-container">
                    <img src={images.about2} alt="" />
                </div>
                <div className="about-img-content-container">
                    <img src={images.about3} alt="" />
                </div>
            </div>

            <div className="rounded-3xl overflow-clip flex flex-col items-center justify-center">
                <img src={images.about1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About