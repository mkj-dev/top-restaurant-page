import { header } from "./modules/header.js"
import { homeSection, createImages } from "./modules/home.js"
import { footer } from "./modules/footer.js"

const content = document.getElementById('content')

content.append(header, homeSection)
createImages()
content.after(footer)
