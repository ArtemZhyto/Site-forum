//@ Import modules
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

//@ Import components
import BlueBtn from "../UI/BlueBtn.jsx"

//@ Import styles
import "../../assets/styles/Layouts/AcceptCookiesLay.css"

const AcceptCookiesLay = ({ LOCALIZATION, setAcceptStatus, acceptStatus }) => {
  const [ cookiesClass, setCookiesClass] = useState("cookies__hidden")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCookiesClass("cookies__visible")
    }, 2300)

    return (() => (
      clearTimeout(timeout)
    ))
  }, [setAcceptStatus])

  const setAccept = (status) => {
    setAcceptStatus(status)

    setCookiesClass("cookies__hiding")
    setTimeout(() => {
      setCookiesClass("cookies__hidden")
    }, 500)
  }

  if (acceptStatus === null) {
    return (
      <div id="AcceptCookies" className={cookiesClass}>
        <h1 id="Cookies__text">Наш сайт использует файлы <span className="green-text">Cookies</span> для сохранения Ваших настроек и аккаунта для следующего входа. Если файлы куки были разрешены, то Вы подтверждаете, что прочли раздел <span className="green-text">,,Файлы Cookies’’</span> в Условиях пользования</h1>
        <div id="Cookies__btns">
          <button id="Cookies__block-cookies" onClick={() => setAccept(false)}>Запретить</button>
          <div id="Cookies__line"></div>
          <BlueBtn LOCALIZATION={LOCALIZATION} text="Разрешить" clickEvent={() => setAccept(true)}/>
        </div>
      </div>
    )
  } else {
    return (
      <div id="AcceptCookies" className="hidden"></div>
    )
  }
}

export default AcceptCookiesLay