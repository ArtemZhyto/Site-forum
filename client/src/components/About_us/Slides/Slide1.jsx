//@ Import styles
import "../../../assets/styles/Slides/Slide1.css"

//@ Import multimedia
import Greet__img from "../../../assets/multimedia/images/backgrounds/Greetings.svg"

const Slide1 = ({ LOCALIZATION }) => {
  return (
    <div id="Greetings">
      <img src={Greet__img}
           id="Greetings__img"/>
      <div id="Greetings__texts">
          <h1 id="text1">
            <span>Форум </span>
            <span className="text1__green">JeRiad</span>
          </h1>
          <h3 id="text2">Где каждая мысль имеет значение</h3>
      </div>
    </div>
  )
}

export default Slide1