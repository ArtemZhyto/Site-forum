//@ Import modules
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import importLocal from "../modules/importLocalization.js"

//@ Import components
import MenuLay from "../components/layouts/MenuLay.jsx"
import FooterLay from "../components/layouts/FooterLay.jsx"
import AcceptCookiesLay from "../components/layouts/AcceptCookiesLay.jsx"

//@ Import pages
import Profile from "../pages/Profile.jsx"
import Updates from "../pages/Updates.jsx"
import About_us from "../pages/About_us.jsx"
import Ask from "../pages/Ask.jsx"
import Search from "../pages/Search.jsx"
import Registration from "../pages/Registration.jsx"
import Login from "../pages/Login.jsx"
import Error404 from "../pages/Error404.jsx"
import Error504 from "../pages/Error504.jsx"
import Terms from "../pages/Terms.jsx"
import Banned from "../pages/Banned.jsx"
import Oops from "../pages/Oops.jsx"
import User from "../pages/User.jsx"
import Question from "../pages/Question.jsx"

const Router = () => {
  const getLang = () => {
    const savedLang = Cookies.get("lang")
    return savedLang ? JSON.parse(savedLang) : "en"
  }

  const getTheme = () => {
    const savedTheme = Cookies.get("theme")
    return savedTheme ? JSON.parse(savedTheme) : "dark"
  }   

  const getCookiesAccept = () => {
    const savedAcceptCookies = Cookies.get("acceptCookies")
    return savedAcceptCookies ? JSON.parse(savedAcceptCookies) : null
  }

  const getIsUpdate = () => {
    const savedIsUpdate = Cookies.get("isUpdate")
    return savedIsUpdate ? JSON.parse(savedIsUpdate) : true
  }

  const [ lang, setLang ] = useState(getLang)
  const [ theme, setTheme ] = useState(getTheme)
  const [ accept, setAccept ] = useState(getCookiesAccept)
  const [ langData, setLangData ] = useState(null)
  const [ mail, setMail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ ID, setID ] = useState(null)
  const [ index, setIndex ] = useState(null)
  const [ isUpdate, setIsUpdate ] = useState(getIsUpdate)
  const [ isRegisted, setIsRegisted] = useState(false)

  useEffect(() => {
    importLocal(lang, setLangData)
  }, [lang])

  useEffect(() => {
    if (accept !== null) {
      Cookies.set("acceptCookies", JSON.stringify(accept), { expires: 365 })
      Cookies.set("lang", JSON.stringify(lang), { expires: 365 })
      Cookies.set("theme", JSON.stringify(theme), { expires: 365 })
      Cookies.set("password", JSON.stringify(password), { expires: 365 })
      Cookies.set("mail", JSON.stringify(mail), { expires: 365 })
      Cookies.set("ID", JSON.stringify(ID), { expires: 365 })
      Cookies.set("index", JSON.stringify(index), { expires: 365 })
      Cookies.set("isUpdate", JSON.stringify(isUpdate), { expires: 365 })
    }
  }, [accept, lang, theme, password, mail, ID, index, isUpdate])

  if (langData) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
                 element={
                   <div id="page">
                     <MenuLay LOCALIZATION={langData}
                              isUpdate={isUpdate}
                              isRegisted={isRegisted}/>
                     <Outlet/>
                     <AcceptCookiesLay LOCALIZATION={langData}
                                       setAcceptStatus={setAccept}
                                       acceptStatus={accept}/>
                     <FooterLay LOCALIZATION={langData}/>
                   </div>
                 }>
            <Route path="profile"
                   element={<Profile LOCALIZATION={langData}
                                     setLang={setLang}
                                     selectedLang={lang}
                                     setTheme={setTheme}
                                     lastTheme={theme}/>
                            }/>
            <Route path="updates"
                   element={<Updates LOCALIZATION={langData}
                                     setIsUpdate={setIsUpdate}/>
                            }/>
            <Route index
                   element={<About_us LOCALIZATION={langData}/>}/>
            <Route path="ask"
                   element={<Ask LOCALIZATION={langData}/>}/>
            <Route path="registration"
                   element={<Registration LOCALIZATION={langData}
                                          mail={mail}
                                          setMail={setMail}
                                          password={password}
                                          setPassword={setPassword}
                                          ID={ID}
                                          setID={setID}
                                          index={index}
                                          setIndex={setIndex}/>
                            }/>
            <Route path="login"
                   element={<Login LOCALIZATION={langData}/>}/>
            <Route path="search"
                   element={<Search LOCALIZATION={langData}/>}/>
            <Route path="terms-of-use"
                   element={<Terms LOCALIZATION={langData}/>}/>
            <Route path="banned"
                   element={<Banned LOCALIZATION={langData}/>}/>
            <Route path="oops"
                   element={<Oops LOCALIZATION={langData}/>}/>
            <Route path="users/:userID"
                   element={<User LOCALIZATION={langData}/>}/>
            <Route path="questions/:questionID"
                   element={<Question LOCALIZATION={langData}/>}/>
            <Route path="server-error"
                   element={<Error504 LOCALIZATION={langData}/>}/>
            <Route path="*"
                   element={<Error404 LOCALIZATION={langData}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router