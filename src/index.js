import React from "react"
import ReactDOM from "react-dom"
import sum from "./sum"

console.log(process.env.NODE_ENV)
ReactDOM.render(<div>Hello World {2+7}</div>,document.getElementById("root"));

module.hot.accept()