//@ Import modules
import { Link } from "react-router-dom"

//@ Import styles
import "../../assets/styles/BlueBtn_Link.css"

const BlueBtn_Link = ({ LOCALIZATION, to, text}) => {
  const linkTo = to
                  ? `/${to}`
                  : "/login"
  const buttonText = text
                      ? text
                      : LOCALIZATION.Menu.reg_and_log.login

  return (
    <Link to={linkTo} id="login">
      <div id="BlueBtn">
        <h1 id="BlueBtn__text">{buttonText}</h1>
      </div>
    </Link>
  )
}

export default BlueBtn_Link