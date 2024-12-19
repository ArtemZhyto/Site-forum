//@ Import modules
import { useState } from "react"

//@ Import components
import BlueBtn from "../UI/BlueBtn.jsx"

//@ Import styles
import "../../assets/styles/Leave_Review.css"

//@ Import multimedia
import Leave_Review_img from "../../assets/multimedia/images/backgrounds/Leave_Review.svg"

const Leave_Review = ({ LOCALIZATION }) => {
  const [ num, setNum ] = useState(null)
  const [ text, setText ] = useState("")
  const [ sym, setSym ] = useState(0)
  const [ selectedButton, setSelectedButton ] = useState(null)

  const inputChange = (event) => {
    const inputText = event.target.value
    
    if (inputText.length <= 2000) {
      setText(inputText)
      setSym(inputText.length)
    }
  }

  const alwaysColor = (color, button, num) => {
    if (selectedButton) {
      const prevButton = document.getElementById(selectedButton)
      prevButton.classList.remove("red", "blue", "green")
    }

    const btn = document.getElementById(button)

    if (selectedButton === button) {
      btn.classList.remove(color)
      setSelectedButton(null)
      setNum(null)
    } else {
      btn.classList.add(color)
      setSelectedButton(button)
      setNum(num)
    }
  }

  let i = 1

  const NanFun = () => {
    i += 1
  }

  return (
    <div id="Leave_Review">
      <img src={Leave_Review_img} id="L_R__img"/>
      <div id="L_R__content">
        <h1 id="content__header">Оставьте отзыв</h1>
        <h3 id="content__second">Любой отзыв будет полезен для нас</h3>

        <div id="content__create">
          <div id="create__deskr">
            <textarea autoComplete="off" id="deskr__textarea" placeholder="Описание" value={text} onChange={inputChange}></textarea>
            
            <div id="deskr__panel">
              <h3 id="deskr__words">
                <span id="words__num" className={sym === 0
                                                  ? "words__num-red"
                                                  : "words__num-green"
                                                }>{sym}</span>
                <span id="words__max-num">/2000</span>
              </h3>
            </div>
          </div>

          <div id="deskr__grade">
            <h3 id="grade__header">Оценка:</h3>

            <div id="grade__btns">
              <button className="grade__btn" id="grade_btn1" onClick={() => alwaysColor("red", "grade_btn1", 0)}>0</button>
              <button className="grade__btn" id="grade_btn2" onClick={() => alwaysColor("red", "grade_btn2", 1)}>1</button>
              <button className="grade__btn" id="grade_btn3" onClick={() => alwaysColor("red", "grade_btn3", 2)}>2</button>
              <button className="grade__btn" id="grade_btn4" onClick={() => alwaysColor("red", "grade_btn4", 3)}>3</button>
              <button className="grade__btn" id="grade_btn5" onClick={() => alwaysColor("red", "grade_btn5", 4)}>4</button>
              <button className="grade__btn" id="grade_btn6" onClick={() => alwaysColor("red", "grade_btn6", 5)}>5</button>
              <button className="grade__btn" id="grade_btn7" onClick={() => alwaysColor("blue", "grade_btn7", 6)}>6</button>
              <button className="grade__btn" id="grade_btn8" onClick={() => alwaysColor("blue", "grade_btn8", 7)}>7</button>
              <button className="grade__btn" id="grade_btn9" onClick={() => alwaysColor("blue", "grade_btn9", 8)}>8</button>
              <button className="grade__btn" id="grade_btn10" onClick={() => alwaysColor("blue", "grade_btn10", 9)}>9</button>
              <button className="grade__btn" id="grade_btn11" onClick={() => alwaysColor("green", "grade_btn11", 10)}>10</button>
            </div>
          </div>

          <BlueBtn text="Отправить отзыв" clickEvent={NanFun}/>
        </div>
      </div>
    </div>
  )
}

export default Leave_Review