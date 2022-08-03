//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

// include your styles into the webpack bundle
import "./index.css";

//import your own components
import Game from "./component/Game";

//render your react application
ReactDOM.render(<Game />, document.querySelector("#app"));