//@ Import styles
import "../assets/styles/Pages/SearchQ.css"

//@ Import components
import QuestionBlock from "../components/common/QuestionBlock.jsx" 

const SearchQ = ({ LOCALIZATION }) => {
  return (
    <div id="SearchQ">
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="0123456789"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="1234567890"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="2345678901"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="3456789012"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="4567890123"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="5678901234"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="6789012345"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="7890123456"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="8901234567"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="9012345678"/>
      <QuestionBlock LOCALIZATION={LOCALIZATION} questionID="0123456789"/>
    </div>
  )
}

export default SearchQ