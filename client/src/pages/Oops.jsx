//@ Import styles
import "../assets/styles/Pages/Errors/Oops.css"

//@ Import multimedia
import Oops_img from "../assets/multimedia/images/backgrounds/Oops.svg"

const Oops = ({ LOCALIZATION }) => {
  return (
    <div id="Oops">
        <div id="Oops__texts">
          <h1 id="texts__Oops">
            <span id="text__Oops">{LOCALIZATION.Oops.text_main}</span>
            <span id="texts__Oops-second">{LOCALIZATION.Oops.text_second}</span>
          </h1>
        </div>
        <img src={Oops_img} id="Oops__img"/>
    </div>
  )
}

export default Oops