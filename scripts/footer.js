const footer = document.createElement('footer')
const p = document.createElement('p')

footer.setAttribute('id', 'footer')
p.innerText = '\u00A9 2022 github.com/mkj-dev'
footer.appendChild(p)

export {footer, p}