// Menu section
const menuSection = document.createElement('section')
menuSection.setAttribute('id', 'menuSection')

// Menu heading
const menuHeading = document.createElement('h2')
menuHeading.setAttribute('id', 'menuHeading')
menuHeading.innerText = 'Menu'

// Menu elements
const menuElements = document.createElement('div')
menuElements.setAttribute('id', 'menuElements')

const menu = {
    'The Classic': 7.99,
    'The Cheeseburge Deluxe': 8.99,
    'The Baconator': 10.99,
    'The Mushroom Swiss': 9.99,
    'The BBQ Burger': 8.99,
    'The Cowboy Burger': 10.99,
    'The Spicy Jalapeno Burger': 9.99
}

for (const burger in menu) {
    const h3 = document.createElement('h3')
    h3.innerText = `${burger}: $${menu[burger]}`
    menuElements.appendChild(h3)
}

menuSection.append(menuHeading, menuElements)

export { menuSection }