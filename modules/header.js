import { homeSection, backgroundImage, aboutUs, gallery } from "./home.js"
import { menuSection } from "./menu.js"
import contactSection from "./contact.js"

const header = document.createElement('header')
const h2 = document.createElement('h2')
const content = document.getElementById('content')

header.setAttribute('id', 'header')
h2.innerText = 'Lorem Ipsum Restaurant'
header.appendChild(h2)

function createButtons() {
    for (let i = 1; i < 4; i++) {
        const pageBtn = document.createElement('button')
        pageBtn.setAttribute('id', 'pageButton' + i)

        if (pageBtn.id === 'pageButton1') {
            pageBtn.innerText = 'Home'
        } else if (pageBtn.id === 'pageButton2') {
            pageBtn.innerText = 'Menu'
        } else if (pageBtn.id === 'pageButton3') {
            pageBtn.innerText = 'Contact'
        }

        header.appendChild(pageBtn)
        appendContent(pageBtn)
    }
}

function appendContent(button) {
    button.addEventListener('click', () => {
        if (button.id === 'pageButton1') {
            content.appendChild(homeSection, backgroundImage)
            content.appendChild(aboutUs)
            content.appendChild(gallery)
            homeSection.style.display = 'block'
            aboutUs.style.display = 'block'
            gallery.style.display = 'block'
            menuSection.style.display = 'none'
            contactSection.style.display = 'none'
        }
        if (button.id === 'pageButton2') {
            content.appendChild(menuSection)
            menuSection.style.display = 'block'
            homeSection.style.display = 'none'
            aboutUs.style.display = 'none'
            gallery.style.display = 'none'
            contactSection.style.display = 'none'
        }
        if (button.id === 'pageButton3') {
            content.appendChild(contactSection)
            contactSection.style.display = 'block'
            homeSection.style.display = 'none'
            aboutUs.style.display = 'none'
            gallery.style.display = 'none'
            menuSection.style.display = 'none'
        }
    })
}

export { header, h2, createButtons }