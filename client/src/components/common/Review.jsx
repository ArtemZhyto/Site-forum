//@ Import styles
import "../../assets/styles/Review.css"

const Review = ({ icon, name, text, grade }) => {
  return (
    <div className="Review">
      <div className="Review__icon_and_text">
        <div className="Review__icon_text">
          <div className="icon">
            {/* <img className="icon__img" src={icon}/> */}
            <h2 className="icon__img">{icon}</h2>
          </div>

          <h2 className="Review__name">{name}</h2>
        </div>
      
        <h3 className="Review__text">{text}</h3>
      </div>
    
      <h2 className={`Review__grade ${grade <= 5
                                        ? "red"
                                        : (grade <= 9
                                          ? "blue"
                                          : "green"
                                        )}`
                  }>{`Оценка: ${grade}/10`}</h2>
    </div>
  )
}

export default Review