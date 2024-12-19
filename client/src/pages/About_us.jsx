//@ Import components
import Slider from "../components/About_us/Slides/Slider.jsx"
import Information from "../components/About_us/Information.jsx"
import Reviews from "../components/About_us/Reviews.jsx"
import Leave_Review from "../components/About_us/Leave_Review.jsx"
import Contact_us from "../components/About_us/Contact_us.jsx"
import FAQ from "../components/About_us/FAQ.jsx"

//@ Import styles
import "../assets/styles/Pages/About_us.css"

const About_us = ({ LOCALIZATION }) => {
  return (
    <div id="About_us">
      <Slider LOCALIZATION={LOCALIZATION}/>
      <Information LOCALIZATION={LOCALIZATION}/>
      <Reviews LOCALIZATION={LOCALIZATION}/>
      <Leave_Review LOCALIZATION={LOCALIZATION}/>
      <Contact_us LOCALIZATION={LOCALIZATION}/>
      <FAQ LOCALIZATION={LOCALIZATION}/>
    </div>
  )
}

export default About_us