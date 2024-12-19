//@ Import components
import BlueBtn from "../components/UI/BlueBtn"

//@ Import styles
import "../assets/styles/Pages/Ask.css"

const Ask = ({ LOCALIZATION }) => {
  return (
    <div id="Ask">
      <h1 id="Ask__header">Задать вопрос</h1>
      
      <div id="Ask__content">
        <div id="content__question-header" className="content__question">
          <textarea placeholder="Заголовок" className="question__input question__input-with-padding"/>
        </div>

        <div id="content__question-text" className="content__question">
          <textarea placeholder="Вопрос" className="question__input"/>
        </div>
      </div>

      <BlueBtn LOCALIZATION={LOCALIZATION} text="Задать" clickEvent={(i) => i++}/>
    </div>
  )
}

export default Ask