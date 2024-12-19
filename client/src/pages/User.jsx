//@ Import modules
import { useParams } from "react-router-dom"

//@ Import styles
import "../assets/styles/Pages/User.css"

const User = ({ LOCALIZATION }) => {
  const { userID } = useParams("userID")
  
  return (
    <div id="Users">
      <div id="Users__back"></div>

      <div id="Users__icon">
        {/* <img src={UsersImage} id="Users__icon-img"/> */}
        <h1 id="Users__icon-text">ICON</h1>
      </div>

      <div id="Users__blocks">
        <div className="Users__block">
          <div className="setting">
            <h2 className="main">Имя:</h2>
            <h2 className="text">user_432324</h2>
          </div>

          <div className="setting">
            <h2 className="main">Вопросов:</h2>
            <h2 className="text">100</h2>
          </div>
          
          <div className="setting">
            <h2 className="main">Ответов:</h2>
            <h2 className="text">100</h2>
          </div>

          <div className="setting">
            <h2 className="main">Категория вопросов:</h2>
            <h2 className="text">Программирование</h2>
          </div>

          <div className="setting">
            <h2 className="main">Категория ответов:</h2>
            <h2 className="text">Электроника</h2>
          </div>
        </div>
      </div>

      <div id="Users__all-questions">
        <h1 id="Users__aq-text">Вопросы</h1>
        <div id="Users__aq-questions">
          <h1>ДОДЕЛАТЬ</h1>
        </div>
      </div>
    </div>
  )
}

export default User