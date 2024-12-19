//@ Import styles
import "../../assets/styles/BlueBtn.css"

const BlueBtn = ({ LOCALIZATION, text, clickEvent, color }) => {
  const btnClass_back = `${color}-btn_back`
  const btnClass_front = `${color}-btn_front`

  if (color && color !== "blue") {
    return (
      <button className={btnClass_back} onClick={clickEvent}>
        <h1 className={btnClass_front}>{text}</h1>
      </button>
    )
  } else {
    return (
      <button id="BlueBtn" onClick={clickEvent}>
        <h1 id="BlueBtn__text">{text}</h1>
      </button>
    )
  }
}

export default BlueBtn