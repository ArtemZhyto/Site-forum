//@ Import styles
import "../../../assets/styles/Slides/Slide4.css"

//@ Import multimedia
import Our_features_img from "../../../assets/multimedia/images/backgrounds/Our_features.svg"

const Slide4 = ({ LOCALIZATION }) => {
  return (
    <div id="Our_features">
      <div id="Our_features__content">
        <h1 id="features__main-text">Почему мы?</h1>
        
        <div id="features__list">
          <div className="list__element">
            <h1 className="list__header">Комфорт</h1>
            <h3 className="list__second element">Мы предоставляем максимально простой интерфейс со всеми нужными и комфортный для пользователей возможностями</h3>
          </div>

          <div className="list__element">
            <h1 className="list__header">Фильтрация</h1>
            <h3 className="list__second element">Вопросы пользователей фильтруются. Не будут отображены вопросы, не подходящие по теме</h3>
          </div>

          <div className="list__element">
            <h1 className="list__header">Поиск</h1>
            <h3 className="list__second element">Пользователи могут найти вопрос любой темы, а так же других пользователей</h3>
          </div>

          <div className="list__element">
            <h1 className="list__header">Безопасность</h1>
            <h3 className="list__second element">На нашем форуме пользователи могут не волноваться за безопасность и конфиденциальность своих данных</h3>
          </div>

          <div className="list__element">
            <h1 className="list__header">Награды</h1>
            <h3 className="list__second element">Получайте награды за выполнение заданий. Награды могут быть новой редкой аватаркой и фоном</h3>
          </div>
        </div>
      </div>

      <img src={Our_features_img}
           id="Our_features__img"/>
    </div>
  )
}

export default Slide4