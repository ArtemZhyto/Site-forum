//@ Import modules
import { Link } from "react-router-dom"

//@ Import components
import BlueBtn from "../components/UI/BlueBtn.jsx"
import BlueBtn_Link from "../components/UI/BlueBtn_Link.jsx"

//@ Import styles
import "../assets/styles/Pages/Login.css"

const Login = ({ LOCALIZATION }) => {
  let i = 1

  const setNum = () => {
    i += 1
  }

  return (
    <div id="Login">
      <div id="Login__block">
        <div id="Login__not-regist">
          <h2 id="block__header">Вход</h2>

          <div id="block__inputs">
            <input id="block__mail" type="mail" className="block__input" autoComplete="off" placeholder="Почта. Например, testMail@mail.com"></input>
            <input id="block__password" type="password" className="block__input" autoComplete="off" minLength="8" maxLength="16" placeholder="Пароль. Например, 1234567890AZaz&$*_"></input>
          </div>

          <div id="block__main-buttons">
            <Link to="/terms-of-use" id="bmb__terms">Условия пользования</Link>
            <div id="bmb__line"></div>
            <BlueBtn text="Подтвердить" clickEvent={setNum}/>
          </div>
        </div>

        <div id="block__log">
          <h2 id="bl__header">Нету аккаунта?</h2>
          <BlueBtn_Link LOCALIZATION={LOCALIZATION} to="registration" text="Зарегистрироваться"/>
        </div>
      </div>
    </div>
  )
}

export default Login