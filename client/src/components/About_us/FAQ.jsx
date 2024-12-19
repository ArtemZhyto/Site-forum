//@ Import styles
import "../../assets/styles/FAQ.css"

const FAQ = ({ LOCALIZATION }) => {
  return (
    <div id="FAQ">
      <h1 id="FAQ__header">FAQ</h1>

      <div id="FAQ__content">
        <h2 id="FAQ__text">
          Приносим свои извинения, но на данный момент наш сайт не имеет FAQ. При отправке отзыва, просим указать интересующий Вас вопрос.
          <br/>
          <span id="FAQ__text-second">
            С уважением и благодарностью,
            <span className="text-second-green"> создатели JeRiad.ua</span>
          </span>
        </h2>
      </div>
    </div>
  )
} 

export default FAQ