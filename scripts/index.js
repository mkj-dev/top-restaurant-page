import {header, h2, makeButtons} from "./header.js"
import {footer, p} from "./footer.js"
import {div as homeSection, backgroundImage} from "./home.js"

const content = document.getElementById('content')
content.appendChild(header, h2)
content.appendChild(homeSection, backgroundImage)
content.appendChild(footer, p)

makeButtons()