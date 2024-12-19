//@ Import styles
import "../assets/styles/Pages/SearchU.css"

//@ Import components
import UserBlock from "../components/common/UserBlock.jsx" 

const SearchU = ({ LOCALIZATION }) => {
  return (
    <div id="SearchU">
      <UserBlock LOCALIZATION={LOCALIZATION} userID="1234567890"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="2345678901"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="3456789012"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="4567890123"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="5678901234"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="6789012345"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="7890123456"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="8901234567"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="9012345678"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="0123456789"/>
      <UserBlock LOCALIZATION={LOCALIZATION} userID="1234567890"/>
    </div>
  )
}

export default SearchU