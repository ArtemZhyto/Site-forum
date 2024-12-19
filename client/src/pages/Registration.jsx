//@ Import modules
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import generateID from "../modules/generateID.js"
import generateIndex from "../modules/generateIndex.js"

//@ Import components
import BlueBtn from "../components/UI/BlueBtn.jsx"
import BlueBtn_Link from "../components/UI/BlueBtn_Link.jsx"

//@ Import styles
import "../assets/styles/Pages/Registration.css"

const Registration = ({ LOCALIZATION, acceptStatus, mail, setMail, password, setPassword, ID, setID, index, setIndex }) => {
  const saveData = async () => {
    const generatedID = await generateID() 
    const generatedIndex = await generateIndex()

    setID(generatedID)
    setIndex(generatedIndex)

    if (acceptStatus) {
      Cookies.set("ID", ID, { expires: 365 })
      Cookies.set("index", index, { expires: 365 })
      Cookies.set("password", password, { expires: 365 })
      Cookies.set("mail", mail, { expires: 365 })
    }
  }

  return (
    <div id="Regist">
      <div id="Regist__block">
        <div id="Regist__not-regist">
          <h2 id="block__header">Регистрация</h2>

          <div id="block__inputs">
            <input id="block__mail" type="mail" className="block__input" autoComplete="off" placeholder="Почта. Например, testMail@mail.com" value={mail} onChange={(event) => setMail(event.target.value)}></input>
            <input id="block__password" type="password" className="block__input" autoComplete="off" minLength="8" maxLength="16" placeholder="Пароль. Например, 1234567890AZaz&$*_" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <input id="block__password-confirm" type="password" className="block__input" autoComplete="off" minLength="8" maxLength="16" placeholder="Повторно введите пароль"></input>
          </div>

          <div id="block__main-buttons">
            <Link to="/terms-of-use" id="bmb__terms">Условия пользования</Link>
            <div id="bmb__line"></div>
            <BlueBtn LOCALIZATION={LOCALIZATION} text="Подтвердить" clickEvent={saveData}/>
          </div>
        </div>

        <div id="block__log">
          <h2 id="bl__header">Уже есть аккаунт? </h2>
          <BlueBtn_Link LOCALIZATION={LOCALIZATION}/>
        </div>
      </div>
    </div>
  )
}

export default Registration