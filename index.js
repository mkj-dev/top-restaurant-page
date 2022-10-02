import {header, h2, makeButtons} from "./header.js"

const content = document.getElementById('content')
content.appendChild(header, h2)

makeButtons()