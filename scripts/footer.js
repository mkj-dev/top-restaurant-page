const footer = document.createElement('footer')
const p = document.createElement('p')

footer.setAttribute('id', 'footer')
p.innerText = 'Created by mkj-dev for TheOdinProject "Restaurant Page" 2022'
footer.appendChild(p)

export {footer, p}