const footer = document.createElement('footer')
const source = document.createElement('a')

footer.setAttribute('id', 'footer')

source.href = 'https://github.com/mkj-dev'
source.innerText = '\u00A9 2023 github.com/mkj-dev'

footer.appendChild(source)

export { footer }