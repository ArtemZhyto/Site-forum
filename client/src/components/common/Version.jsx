//@ Import styles
import "../../assets/styles/Version.css"

const Version = ({ LOCALIZATION, version, add, debug}) => {  
  if (version === "1.0.0") {
    return (
      <div className="first-version">
        <h1 id="Version__main-text">{`Версия ${version}`}</h1>
        <h1 id="Version__first">Сайт создан</h1>
      </div>
    )
  } else {
    return (
      <div id="Version">
        <h1 id="Version__main-text">{`Версия ${version}`}</h1>
        
        <div id="Version__info">
          <div id="Version__add">
            <div id="add__main-text">
              <div id="Version__circle"></div>
              <h1 id="Version__text">Добавленно:</h1>
            </div>

            <h3 id="Version__second-text">{add === "" || add === undefined
                                          ? "Ничего"
                                          : add
                                        }</h3>
          </div>
          
          <div id="Version__debug">
            <div id="debug__main-text">
              <div id="Version__circle"></div>
              <h1 id="Version__text">Исправленно:</h1>
            </div>

            <h3 id="Version__second-text">{debug === ""
                                          ? "Ничего"
                                          : debug
                                        }</h3>
          </div>
        </div>
      </div>
    )
  }
  

}

export default Version