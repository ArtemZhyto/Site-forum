//@ Import modules
import { useLocation } from "react-router-dom"

//@ Import components
import SearchU from "./SearchU.jsx"
import SearchQ from "./SearchQ.jsx"
import Error404 from "./Error404.jsx"

const Search = ({ LOCALIZATION }) => {
  const query = new URLSearchParams(useLocation().search)
  const params = Object.fromEntries(query.entries())

  if (params.type === "user") {
    return (
      <SearchU LOCALIZATION={LOCALIZATION} />
    )
  } else if (params.type === "question") {
    return (
      <SearchQ LOCALIZATION={LOCALIZATION} />
    )
  } else {
    return (
      <Error404 LOCALIZATION={LOCALIZATION}/>
    )
  }
}

export default Search