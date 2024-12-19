//@ Import modules
import { Link } from "react-router-dom"

//@ Import styles
import "../../assets/styles/Layouts/FooterLay.css"

//@ Import multimedia
import logo from "../../assets/multimedia/images/logo.svg"

const FooterLay = ({ LOCALIZATION }) => {
  return (
    <div id="Footer">
      <div id="logo2">
        <img src={logo} id="logo__img"/>
        
        <h1 id="logo__texts">
          <span id="logo__text">{LOCALIZATION.Footer.logo.text} </span>
          <span id="logo__text-red">JeRiad</span>
        </h1>
      </div>

      <nav id="panel__links">
        <Link to="." className="panel__link">{LOCALIZATION.Footer.nav.about_us}</Link>
        <Link to="profile" className="panel__link">{LOCALIZATION.Footer.nav.profile}</Link>
        <Link to="updates" className="panel__link">{LOCALIZATION.Footer.nav.updates}</Link>
        <Link to="ask" className="panel__link">{LOCALIZATION.Footer.nav.ask}</Link>
      </nav>

      <h3 id="rights">{LOCALIZATION.Footer.rights}</h3>
    </div>
  )
}

export default FooterLay