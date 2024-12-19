//@ Import modules
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

//@ Import components
import BlueBtn from "../components/UI/BlueBtn.jsx"

//@ Import styles
import "../assets/styles/Pages/Profile.css"

const Profile = ({ LOCALIZATION, setLang, selectedLang, setTheme, lastTheme }) => {
  const [ prevTheme, setPrevTheme ] = useState(lastTheme)
  const [ isGrey, setIsGrey ] = useState(true)
  const [ userName, setUserName ] = useState("user_3124412352")
  const [ prevUserName, setPrevUserName ] = useState(null)
  const [ profileImage, setProfileImage ] = useState(null)
  const [ isHover, setIsHover ] = useState(false)
  
  useEffect(() => {
    const savedTheme = lastTheme
    const themeBlock = document.getElementById(`Theme__${savedTheme}`)
    if (themeBlock) {
      themeBlock.classList.add("Theme__blue-outline")
    }
    setTheme(savedTheme)
  }, [])

  const openImport = () => {
    const input = document.getElementById('i-u__import-real')
    input.click()
  }

  const imageUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (event) => {
        setProfileImage(event.target.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const setSiteLang = (event) => {
    setLang(event.target.value)
  }

  const setSiteTheme = (theme) => {
    if (prevTheme) {
      const theme = document.getElementById(`Theme__${prevTheme}`)
      theme.classList.remove("Theme__blue-outline")
    }

    const themeBlock = document.getElementById(`Theme__${theme}`)
    themeBlock.classList.add(`Theme__blue-outline`)

    if (lastTheme !== theme) {
      setTheme(theme)
      setPrevTheme(theme)
    }
  }

  const exit = () => {
    Cookies.remove('acceptCookies')
    Cookies.remove('lang')
    Cookies.remove('theme')
    Cookies.remove('isMessage')
    Cookies.remove('isUpdate')
    Cookies.remove('mail')
    Cookies.remove('password')
    Cookies.remove('ID')
    Cookies.remove('index')
    Cookies.remove('profileImage')
  }

  const setEditStatus = () => {
    setPrevUserName(userName)
    setIsGrey(false)
  }

  const setName = (event) => {
    setUserName(event.target.value)
  }

  const clearEditStatus = (name) => {    
    if (name.length < 2 || name.length === 0) {
      setUserName(prevUserName)
    }
    setIsGrey(true)
  }
  
  const importImage = (event) => {
    event.preventDefault()
    
    setIsHover(false)
    
    const file = event.dataTransfer.files[0]

    if (file) {
      const reader = new FileReader()
  
      reader.onload = (event) => {
        setProfileImage(event.target.result)
      }
  
      reader.readAsDataURL(file)
    }
  }

  return (
    <div id="Profile">
      <div id="Profile__back"></div>

      <div id="Profile__icon">
        {profileImage
          ? <img src={profileImage} id="Profile__icon-img"/>
          : <h1 id="Profile__icon-text">ICON</h1>
        }
      </div>

      <div id="Profile__icon-update">
        <div onDragEnter={() => setIsHover(true)}
             onDragOver={(event) => {
                                      event.preventDefault()
                                      setIsHover(true)
                                    }}
             onDragLeave={() => setIsHover(false)}
             onDrop={(event) => importImage(event)}
             className="i-u__dad-def"
        >
          <h1 className={isHover
                          ? "i-u__dad-text"
                          : "i-u__dad-text-def"
                        }>Перетащите файл</h1>
        </div>
        <div id="i-u__line"></div>
        <BlueBtn text="Загрузить фото" clickEvent={() => openImport()}/>
        <input type="file" id="i-u__import-real" accept=".png, .svg, .jpg, .jpeg" multiple onChange={(event) => imageUpload(event)}/>
      </div>

      <div id="Profile__blocks">
        <div className="Profile__block">
          <div className="setting">
            <h2 className="main">{isGrey
                                    ? "Имя: "
                                    : "*Имя: "
                                  }</h2>
            {isGrey
              ? <h2 className="text">{userName}</h2>
              : <input className="text__textarea" autoComplete="off" value={userName} maxLength="20" onChange={(event) => setName(event)}></input>
            }
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

        <div className="Profile__block language__block">
          <div className="setting setting__lang">
            <h2 className="main">Язык:</h2>
            <select id="select-lang" value={selectedLang} onChange={setSiteLang}>
              <option value="en" className="lang-option">English</option>
              <option value="es" className="lang-option">Español</option>
              <option value="de" className="lang-option">Deutsch</option>
              <option value="it" className="lang-option">Italiano</option>
              <option value="pt" className="lang-option">Polski</option>
              <option value="ru" className="lang-option">Русский</option>
              <option value="uk" className="lang-option">Українська</option>
              <option value="fr" className="lang-option">Français</option>
            </select>
          </div>

          <div id="acc-btns">
            <button id="exit-btn" onClick={() => exit()}>
              <h1 id="exit-text">Выйти</h1>
            </button>
            <div id="acc-line"></div>
            <BlueBtn LOCALIZATION={LOCALIZATION} text="Удалить" clickEvent={exit} color="red"/>
          </div>
        </div>
      </div>

      <div id="Profile__edit">
        <button id="edit__btn" onClick={setEditStatus}>Изменить</button>
        <div id="edit__line"></div>
        <BlueBtn LOCALIZATION={LOCALIZATION} text="Подтвердить" clickEvent={() => clearEditStatus(userName)} color={isGrey ? "grey" : null}/>
      </div>
    </div>
  )
}

export default Profile