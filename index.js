import {header, h2, makeButtons} from "./header.js"
import {footer, p} from "./footer.js"

const content = document.getElementById('content')
content.appendChild(header, h2)
content.appendChild(footer, p)

makeButtons()