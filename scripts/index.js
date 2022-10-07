import { header, h2, createButtons } from "./header.js"
import { footer } from "./footer.js"
import { homeSection, backgroundImage, aboutUs, gallery, createImages } from "./home.js"

const content = document.getElementById('content')

content.appendChild(header, h2)
content.appendChild(homeSection, backgroundImage)
content.appendChild(aboutUs)
content.appendChild(gallery)
content.after(footer)

createButtons()
createImages()