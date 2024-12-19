//@ Import styles
import "../../../assets/styles/Slides/Slide2.css"

//@ Import multimedia
import We_ve__img from "../../../assets/multimedia/images/backgrounds/We_ve.svg"

const Slide2 = ({ LOCALIZATION }) => {
  return (
    <div id="We-ve">
      <div id="AllTexts">
        <h1 id="We-ve__text">У нас есть:</h1>

        <div id="We-ve__texts">
          <div className="main__text">
            <h3 className="blue__text">153 734</h3>
            <h3>Пользователей</h3>
          </div>

          <div className="main__text">
            <h3 className="blue__text">7 500 000+</h3>
            <h3>Вопросов</h3>
          </div>

          <div className="main__text">
            <h3 className="green__text">15</h3>
            <h3>Наград</h3>
          </div>
        </div>
      </div>

      <img src={We_ve__img}
           id="We_ve__img"/>
    </div>
  )
}

export default Slide2