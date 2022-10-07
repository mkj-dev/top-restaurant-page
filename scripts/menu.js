const menuSection = document.createElement('div')
const menuHeading = document.createElement('h2')
const menuDish = document.createElement('div')

const menu = ['Shrimp Fra Diavolo', 'Baked Clams', 'Fried Calamari', 'Lobster', 'Caesar Salad', 'Meatballs']

menuSection.setAttribute('id', 'menuSection')
menuDish.setAttribute('id', 'menuItems')

menuHeading.innerText = 'Menu'
menu.forEach(dish => {
    let h3 = document.createElement('h3')
    h3.innerText = `${dish}.........................$20.50`
    menuDish.appendChild(h3)
})

menuSection.appendChild(menuHeading)
menuSection.appendChild(menuDish)

export { menuSection, menuDish }