const footer = document.createElement('footer')
const p = document.createElement('p')
const source = document.createElement('a')

footer.setAttribute('id', 'footer')
p.innerText = '\u00A9 2022 github.com/mkj-dev'

source.href = 'https://www.freepik.com/author/valeria-aksakova'
source.innerText = 'Images by valeria_aksakova on Freepik'

footer.appendChild(p)
footer.appendChild(source)

export { footer }