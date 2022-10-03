const div = document.createElement('div')
const backgroundImage = document.createElement('img')

div.setAttribute('id', 'homeSection')
backgroundImage.setAttribute('id', 'homeSectionBgImg')
backgroundImage.src = '../../images/vegetables-set-left-black-slate.jpg'

div.appendChild(backgroundImage)

export {div, backgroundImage}