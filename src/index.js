import React from "react"
import { render } from "react-dom"

import { App } from "./app"

import "./polyfills"

import "./index.css"

render(<App />, document.querySelector("#app"))
