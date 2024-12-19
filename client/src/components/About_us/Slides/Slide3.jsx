//@ Import styles
import "../../../assets/styles/Slides/Slide3.css"

//@ Import multimedia
import Ques_theme_img from "../../../assets/multimedia/images/backgrounds/Ques_theme.svg"
import React from "react"

const list1 = [
  "Искусство и культура",
  "Наука и технологии",
  "История и археология",
  "Литература и писательство",
  "Музыка и театр",
  "Кино и телевидение",
  "Математика и логика",
  "Физика и астрономия",
  "Химия и биология",
  "Медицина и здоровье",
]

const list2 = [
  "Психология и социология",
  "Философия и этика",
  "Религия и мифология",
  "Политика и экономика",
  "Право и юриспруденция",
  "Образование и воспитание",
  "Техника и изобретения",
  "Компьютеры и программирование",
  "Интернет и социальные сети",
  "Видеоигры и киберспорт"
]

const Slide3 = ({ LOCALIZATION }) => {
  return (
    <div id="Ques_theme">
      <img src={Ques_theme_img}
           id="Ques_theme__img"/>
    
      <div id="Ques_theme__content">
        <h1 id="content__main-text">Вопросы на любую тему:</h1>
        <div id="content__list">
          <div className="list">
            {list1.map((content, index) => (
              <div className="list-element"
                   key={index}>
                <div className="list-element__cirlce"></div>
                <h1 className="list-element__text">{content}</h1>
              </div>
            ))}
          </div>
          <div className="list">
            {list2.map((content, index) => (
              <div className="list-element"
                   key={index}>
                <div className="list-element__cirlce"></div>
                <h1 className="list-element__text">{content}</h1>
              </div>
            ))}
          </div>
        </div>

        <h3 id="content__end">И не только!</h3>
      </div>
    </div>
  )
}

export default Slide3