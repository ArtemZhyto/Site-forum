//@ Import modules
import { Link } from "react-router-dom"

//@ Import components
import BlueBtn_Link from "../../UI/BlueBtn_Link.jsx"

//@ Import styles
import "../../../assets/styles/Slides/Slide5.css"

//@ Import multimedia
import Add_list_img from "../../../assets/multimedia/images/backgrounds/Add_list.svg"

const Slide5 = ({ LOCALIZATION }) => {
  return (
    <div id="Add_list">
      <img src={Add_list_img}
           id="Add_list__img"/>

      <div id="Add_list__content">
        <h1 id="Add_list__header">Пополните наш список пользователей!</h1>

        <div id="Add_list__regist">
          <Link to="/registration"
                id="regist__regist">Зарегистрироваться</Link>
          <div id="regist__line"></div>
          <BlueBtn_Link LOCALIZATION={LOCALIZATION}/>          
        </div>
      </div>
    </div>
  )
}

export default Slide5