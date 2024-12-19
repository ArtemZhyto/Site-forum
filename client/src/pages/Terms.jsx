//@ Import styles
import "../assets/styles/Pages/Terms.css"

const Terms = ({ LOCALIZATION }) => {
  return (
    <div id="Terms">
      <h1 id="Terms__head">{LOCALIZATION.Terms_of_use.head}</h1>
      <ol id="Terms__text">
        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.one}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.one_one}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.one_two}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.two}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.two_one}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.three}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_one}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_two}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_three}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_four}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_five}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.three_six}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.four}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.four_one}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.four_two}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.five}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.five_one}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.six}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.six_one}</li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.six_two}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.seven}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.seven_one}</li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.eight}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.eight_one} <span id="href-text">JeRiad_ua_support@gmail.com</span></li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.eight_two} <span id="href-text">JeRiad_ua_offers@gmail.com</span></li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.eight_three} <a id="href"
                                                                                              href="https://t.me/JeRiad_ua"
                                                                                              target="_blank">@JeRiad_ua</a></li>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.eight_four} <a id="href"
                                                                                             href="https://www.instagram.com/JeRiad_ua"
                                                                                             target="_blank">@JeRiad_ua</a></li>
          </ol>
        </li>

        <li><span className="li__head">{LOCALIZATION.Terms_of_use.texts.head.nine}</span>
          <ol>
            <li className="li__margin">{LOCALIZATION.Terms_of_use.texts.other.nine_one}</li>
          </ol>
        </li>

        <li><span className="li__head" id="cookies-files">10. Файлы Cookies</span>
          <ol>
            <li className="li__margin">10.1. Файлы cookies – это небольшие файлы, которые сохраняются при посещении нашего сайта. Они помогают запомнить ваши действия и предпочтения, такие как язык, тема, параметры отображения и логин, на протяжении определенного времени.</li>
            <li className="li__margin">10.2. <span id="href-text">Необходимые</span> cookies - эти файлы необходимы для функционирования сайта и не могут быть отключены. Они устанавливаются в ответ на ваше действие, такое как вход в систему</li>
            <li className="li__margin">10.3. Cookies для <span id="href-text">улучшения производительности</span> - эти файлы собирают информацию о том, как посетители используют сайт, чтобы наша команда могла анализировать работу и улучшать его.</li>
            <li className="li__margin">10.4. <span id="href-text">Функциональные</span> cookies - эти файлы позволяют сайту запоминать ваши выборы (например, ваш язык или регион) и предоставлять улучшенные функции.</li>
          </ol>
        </li>
      </ol>
    </div>
  )
}

export default Terms