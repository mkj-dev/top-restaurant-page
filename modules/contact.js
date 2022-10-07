const contactSection = document.createElement('div')
const contactHeading = document.createElement('h2')
const p = document.createElement('p')

contactSection.setAttribute('id', 'contactSection')

contactHeading.innerText = 'Contact Us'
p.innerText = `123 Lorem Street, New York
               012-345-678
               lorem@ipsum.com`

contactSection.appendChild(contactHeading)
contactSection.appendChild(p)

export default contactSection