console.clear();

const root = document.getElementById("root");

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/square.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();
root.append(circleElement, squareElement, pentagonElement);
