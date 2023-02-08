import { homeSection } from "./home.js"
import { menuSection } from "./menu.js"
import { contactSection } from "./contact.js"

// Header
const header = document.createElement('header')
header.setAttribute('id', 'header')

// Restaurant name
const restaurantName = document.createElement('h2')
restaurantName.innerText = 'Burger Joint'

// Restaurant slogan
const restaurantSlogan = document.createElement('p')
restaurantSlogan.innerText = 'Where every bite is a juicy delight!'

// Home button
const homeBtn = document.createElement('button')
homeBtn.setAttribute('id', 'home-btn') 
homeBtn.innerText = 'Home'

homeBtn.addEventListener('click', () => {
    content.appendChild(homeSection)
    homeSection.style.display = 'block'
    menuSection.style.display = 'none'
    contactSection.style.display = 'none'
})

// Menu button
const menuBtn = document.createElement('button')
menuBtn.setAttribute('id', 'menu-btn')
menuBtn.innerText = 'Menu'

menuBtn.addEventListener('click', () => {
    content.appendChild(menuSection)
    menuSection.style.display = 'block'
    homeSection.style.display = 'none'
    contactSection.style.display = 'none'
})

// Contact button
const contactBtn = document.createElement('button')
contactBtn.setAttribute('id', 'contact-btn')
contactBtn.innerText = 'Contact'

contactBtn.addEventListener('click', () => {
    content.appendChild(contactSection)
    contactSection.style.display = 'block'
    homeSection.style.display = 'none'
    menuSection.style.display = 'none'
})

header.append(
    restaurantName,
    restaurantSlogan,
    homeBtn,
    menuBtn,
    contactBtn
)

export { header }