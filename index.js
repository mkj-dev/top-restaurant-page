import { header, h2, createButtons } from "./modules/header.js"
import { footer } from "./modules/footer.js"
import { homeSection, backgroundImage, aboutUs, gallery, createImages } from "./modules/home.js"

const content = document.getElementById('content')

content.appendChild(header, h2)
content.appendChild(homeSection, backgroundImage)
content.appendChild(aboutUs)
content.appendChild(gallery)
content.after(footer)

createButtons()
createImages()