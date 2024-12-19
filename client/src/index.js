import ReactDOM from "react-dom/client"
import "./assets/styles/index.css"
import "./assets/styles/variables.css"

import Router from "./router/Router.jsx"

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<Router/>)