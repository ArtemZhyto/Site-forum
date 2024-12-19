//@ Import styles
import "../assets/styles/Pages/Errors/Error404.css"

//@ Import multimedia
import Errors from "../assets/multimedia/images/backgrounds/Errors.svg"

const Error404 = ({ LOCALIZATION }) => {
  return (
    <div id="Err">
        <div id="Err__texts">
          <h1 id="texts__err">
            <span>{LOCALIZATION.Error_404.text_main} </span>
            <span id="text__err-code">404</span>
          </h1>
          <h3 id="texts__second">{LOCALIZATION.Error_404.text_second}</h3>
        </div>
        <img src={Errors} id="Err__img"/>
    </div>
  )
}

export default Error404