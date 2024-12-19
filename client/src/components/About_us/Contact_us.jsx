//@ Import styles
import "../../assets/styles/Contact_us.css"

//@ Import multimedia
import Contact_us_img from "../../assets/multimedia/images/backgrounds/Contact_us.svg"

const Contact_us = ({ LOCALIZATION }) => {
  return (
    <div id="Contact_us">
      <div id="Contact_us__content">
        <div id="content__conn">
          <h1 className="content__header">Для связи с нами:</h1>

          <h3>
            <span className="content__def-text">Telegram поддержка: </span>
            <span>
              <a href="https://t.me/JeRiad_ua_support" target="_blank" className="content__href content__href-real">@JeRiad_ua_support</a>
            </span>
          </h3>

          <h3>
            <span className="content__def-text">Почта поддержки: </span>
            <span className="content__href">JeRiad_ua_support@gmail.com</span>
          </h3>

          <h3>
            <span className="content__def-text">Почта предложений: </span>
            <span className="content__href">JeRiad_ua_offers@gmail.com</span>
          </h3>
        </div>

        <div id="content__social">
          <h1 className="content__header">Наши соц. сети: </h1>

          <h3>
            <span className="content__def-text">Telegram канал: </span>
            <span>
              <a href="https://t.me/JeRiad_ua" target="_blank" className="content__href content__href-real">@JeRiad_ua</a>
            </span>
          </h3>
          
          <h3>
            <span className="content__def-text">Instagram: </span>
            <span>
              <a href="https://www.instagram.com/JeRiad_ua" target="_blank" className="content__href content__href-real">@JeRiad_ua</a>
            </span>
          </h3>

          <h3>
            <span className="content__def-text">GitHub: </span>
            <span>
              <a href="https://github.com/ArtemZhyto" target="_blank" className="content__href content__href-real">@ArtemZhyto</a> 
            </span>
          </h3>
        </div>
      </div>

      <img src={Contact_us_img} id="Contact_us__img"/>
    </div>
  )
}

export default Contact_us