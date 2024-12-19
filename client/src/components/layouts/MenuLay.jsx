//@ Import modules
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

//@ Import styles
import "../../assets/styles/Layouts/MenuLay.css"

//@ Import multimedia
import logo from "../../assets/multimedia/images/logo.svg"

//@ Import components
import BlueBtn_Link from "../UI/BlueBtn_Link.jsx"

const MenuLay = ({ LOCALIZATION, isUpdate, isRegisted }) => {
  useEffect(() => {
    const updateWidth = () => {
      const help = document.getElementById('search__help')
      const area = document.getElementById('search__area')
    
      const width = area.offsetWidth
  
      help.style.width = `${width}px`
    }

    updateWidth()

    window.addEventListener('load', updateWidth)
    window.addEventListener('resize', updateWidth)
    const area = document.getElementById('search__area')
    area.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('load', updateWidth)
      window.removeEventListener('resize', updateWidth)
      area.removeEventListener('resize', updateWidth)
    }

  }, [])

  const showHelp = () => {
    const help = document.getElementById('search__help')
    const search = document.getElementById('search__area')
    help.style.visibility = "visible"
    help.style.opacity = 1
    search.style.borderRadius = "12.5px 12.5px 0px 0px"
  }

  const hideHelp = () => {
    const help = document.getElementById('search__help')
    const search = document.getElementById('search__area')
    help.style.opacity = 0
    help.style.visibility = "hidden"
    search.style.borderRadius = "12.5px"
  }

  const currPage = useLocation().pathname

  const menu = [
    "profile",
    "updates",
    "about_us",
    "ask"
  ]

  return (
    <>
      <div id="Menu__back"></div>
      <div id="Menu">
        <nav id="nav">
          {menu.map((page, index) => {
            if (page === "about_us") {
              return (
                <Link to="/"
                      className="nav__links"
                      id={currPage === "/"
                            ? "nav__link-this"
                            : null
                          }
                      key={index}>{LOCALIZATION.Menu.nav.about_us}</Link> 
              )
            } else if (page === "updates") {
                return (
                  <div id="messages"
                      key={index}>
                    <Link to="updates"
                          className="nav__links messages"
                          id={currPage === "/updates"
                                ? "nav__link-this"
                                : null
                          }
                          >{LOCALIZATION.Menu.nav.updates}</Link>
                    <div id={isUpdate
                              ? "messages__circle"
                              : "messages__circle-hide"
                          }></div>
                  </div>
                )
              } else {
                  return (
                    <Link to={page}
                          className="nav__links"
                          id={currPage === `/${page}`
                                ? "nav__link-this"
                                : null
                              }
                          key={index}>{LOCALIZATION.Menu.nav[page]}</Link> 
                  )
                }
          })}
        </nav>

        <div id="search">
          <div id="search__area">
            <input type="text"
                  placeholder={LOCALIZATION.Menu.search.area__input__placeholder}
                  onFocus={showHelp}
                  onBlur={hideHelp}
                  id="area__input"/>
            <div id="area__line"></div>
            <Link to="search"
                  id="area__btn">{LOCALIZATION.Menu.search.area__btn}</Link>
          </div>
          <div id="search__help">
            <div id="help__line"></div>
            <div id="helps">
              <h3 id="help1">
                <span className="help__main">{LOCALIZATION.Menu.search.help1.help__main}</span>
                <span className="help__second">{LOCALIZATION.Menu.search.help1.help__second}</span>
              </h3>
              <h3 id="help2">
                <span className="help__main">{LOCALIZATION.Menu.search.help2.help__main}</span>
                <span className="help__second">{LOCALIZATION.Menu.search.help2.help__second}</span>
              </h3>
            </div>
          </div>
        </div>

        <div id="reg-and-log" className={isRegisted
                                          ? "reg-and-log__hidden"
                                          : "reg-and-log__visible"
                                        }>
          <Link to="registration"
                id="reg-and-log__regist">{LOCALIZATION.Menu.reg_and_log.regist}</Link>
          <div id="reg-and-log__line"></div>
          <BlueBtn_Link LOCALIZATION={LOCALIZATION}/>
        </div>

        <img src={logo}
             id="logo"/>
      </div>
    </>
  )
}

export default MenuLay