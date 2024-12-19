//@ Import modules
import { Link } from "react-router-dom"

//@ Import styles
import "../../assets/styles/UserBlock.css"

const UserBlock = ({ LOCALIZATION, userID}) => {
  return (
    <Link to={`../users/${userID}`} className="Link">
      <div id="UserBlock">
        <div id="UB__image">
          <h1 id="UB__image-text">ICON</h1>
          {/* <img src=""/> */}
        </div>

        <div id="UB__content">
          <div className="content__info">
            <h1 className="ci__main">Имя:</h1>
            <h1 className="ci__second">user_3124412352</h1>
          </div>

          <div className="content__info">
            <h1 className="ci__main">Вопросов:</h1>
            <h1 className="ci__second">Ответов</h1>
          </div>

          <div className="content__info">
            <h1 className="ci__main">Ответов:</h1>
            <h1 className="ci__second">100</h1>
          </div>

          <div className="content__info">
            <h1 className="ci__main">Категория вопросов:</h1>
            <h1 className="ci__second">Программирование</h1>
          </div>

          <div className="content__info">
            <h1 className="ci__main">Категория ответов:</h1>
            <h1 className="ci__second">Электроника</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default UserBlock