//@ Import styles
import "../assets/styles/Pages/Banned.css"

//@ Import multimedia
import banned from "../assets/multimedia/images/backgrounds/Banned.svg"

const Banned = ({ LOCALIZATION }) => {
  return (
    <div id="Banned">
        <div id="Banned__texts">
          <h1 id="texts__banned">
            <span>{LOCALIZATION.Banned.text_main} </span>
            <span id="text__banned-second">{LOCALIZATION.Banned.text_second}</span>
          </h1>
          <h3 id="texts__banned-third">{LOCALIZATION.Banned.text_third}</h3>
        </div>
        <img src={banned} id="Banned__img"/>
    </div>
  )
}

export default Banned