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

const menu = ['Shrimp Fra Diavolo', 'Baked Clams', 'Fried Calamari', 'Lobster', 'Caesar Salad', 'Meatballs']

menu.forEach(element => {
    const h3 = document.createElement('h3')
    h3.innerText = `${element}.........................$20.50`
    menuElements.appendChild(h3)
})

menuSection.append(menuHeading, menuElements)

export { menuSection }