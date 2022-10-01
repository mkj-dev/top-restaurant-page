const content = document.getElementById('content')
const header = document.createElement('header')
const h2 = document.createElement('h2')

header.setAttribute('id', 'header')
content.appendChild(header)
header.appendChild(h2)
h2.innerText = 'Lorem Ipsum Restaurant'

for (let i = 1; i < 4; i++) {
    const pageBtn = document.createElement('button')
    pageBtn.setAttribute('id', 'page' + i)
    
    if (pageBtn.id === 'page1') {
        pageBtn.innerText = 'Home'
    } else if (pageBtn.id === 'page2') {
        pageBtn.innerText = 'Menu'
    } else if (pageBtn.id === 'page3') {
        pageBtn.innerText = 'Contact'
    }

    header.appendChild(pageBtn)
}