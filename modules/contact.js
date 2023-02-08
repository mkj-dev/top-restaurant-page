// Contact section
const contactSection = document.createElement('section')
contactSection.setAttribute('id', 'contactSection')

// Contact heading
const contactHeading = document.createElement('h2')
contactHeading.setAttribute('id', 'contactHeading')
contactHeading.innerText = 'Contact Us'

const para = document.createElement('p')

para.innerText = `123 Lorem Street, New York
               012-345-678
               burgerjoint@ipsum.com`

contactSection.append(contactHeading, para)

export { contactSection }