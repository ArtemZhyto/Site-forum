//@ Import modules
import { useState, useEffect } from "react"

//@ Import components
import Slide1 from "./Slide1.jsx"
import Slide2 from "./Slide2.jsx"
import Slide3 from "./Slide3.jsx"
import Slide4 from "./Slide4.jsx"
import Slide5 from "./Slide5.jsx"

//@ Import styles
import "../../../assets/styles/Slides/Slider.css"

const Slider = ({ LOCALIZATION }) => {
  const [ currSlide, setCurrSlide ] = useState(0)
  const [ isTransition, setIsTransition] = useState(5500)

  const updateSlider = () => {
    const Slides = document.getElementById("Slides")
    Slides.style.transition = "none"
    Slides.style.transform = "translateX(0)"

    setTimeout(() => {
      setIsTransition(0)
      setCurrSlide(0)
      Slides.style.transition = "transform 6s ease"
    }, 50)
  }
  
  const nextSlide = () => {
    if (currSlide === 5) {
      updateSlider()
    } else if (currSlide === 0) {
      setIsTransition(5500)
      setCurrSlide((index) => index + 1)
      setIsTransition(11000)
    } else {
      setCurrSlide((index) => index + 1)
    }
  }

  useEffect(() => {
    if (isTransition !== 0) {
      const timeout = setTimeout(() => {
        nextSlide()
      }, isTransition)
  
      return (() => (
        clearTimeout(timeout)
      ))
    } else {
      nextSlide()
    }
  }, [currSlide, isTransition])

  return (
    <div id="Slider">
      <div id="Slides"
           style={
             {
               transform: `translateX(-${currSlide * 100}%)`,
               transition: `transform 6s ease`
             }}>
        <div className="slide">
          <Slide1 LOCALIZATION={LOCALIZATION}/>
        </div>

        <div className="slide">
          <Slide2 LOCALIZATION={LOCALIZATION}/>
        </div>

        <div className="slide">
          <Slide3 LOCALIZATION={LOCALIZATION}/>
        </div>

        <div className="slide">
          <Slide4 LOCALIZATION={LOCALIZATION}/>
        </div>

        <div className="slide">
          <Slide5 LOCALIZATION={LOCALIZATION}/>
        </div>

        <div className="slide">
          <Slide1 LOCALIZATION={LOCALIZATION}/>
        </div>
      </div>
    </div>
  )
}

export default Slider