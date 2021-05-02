//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "element-theme-default";

//include bootstrap npm library into the bundle
// import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "typeface-nunito-sans";
import "typeface-montserrat";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
