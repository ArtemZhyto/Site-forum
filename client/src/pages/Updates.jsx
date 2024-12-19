//@ Import modules
import { useEffect, useState } from "react"

//@ Import components
import Version from "../components/common/Version.jsx"

//@ Import styles
import "../assets/styles/Pages/Updates.css"

const obj = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
  "test9",
  "test10",
  "test11",
  "test12",
  "test13",
  "test14",
  "test15",
  "test16",
  "test17",
  "test18",
  "test19",
  "test20",
]

const Updates = ({ LOCALIZATION, setIsUpdate}) => {
  const [ currIndex, setCurrIndex ] = useState(0)
  
  useEffect(() => {
    setIsUpdate(false)
  }, [setIsUpdate])

  const nextSlide = () => {
    setCurrIndex((index) => (
                  index >= (obj.length / 2) - 1
                    ? index
                    : index + 1
                ))
  }

  const backSlide = () => {
    setCurrIndex((index) => (
                  index <= 0
                    ? index  
                    : index - 1
                ))
  }

  return (
    <div id="Updates">
      <h1 id="Updates__text">Обновления</h1>
      
      <div id="content__slider">
        <button onClick={backSlide} className="indexBtn" id="backBtn"></button>

        <div id="cs__slides"
             style={{
                     width: `${(obj.length / 2) * 100}vw`,
                     transform: `translateX(-${currIndex * 100}vw)`
                   }}>
          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.0.0"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.0.1" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.0.2" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.0.3" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.0.4" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.0.5" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.0.6" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.0.7" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.0.8" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.0.9" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.1.0" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.1.1" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.1.2" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.1.3" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.1.4" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.1.5" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.1.6" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.1.7" debug="Баги"/>
          </div>

          <div className="css__two-slides">
            <Version LOCALIZATION={LOCALIZATION} version="1.1.8" debug="Баги"/>
            <Version LOCALIZATION={LOCALIZATION} version="1.1.9" debug="Баги"/>
          </div>
        </div>

        <button onClick={nextSlide} className="indexBtn" id="nextBtn"></button>
      </div>
    </div>
  )
}

export default Updates