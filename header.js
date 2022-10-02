const header = document.createElement('header')
const h2 = document.createElement('h2')

header.setAttribute('id', 'header')
h2.innerText = 'Lorem Ipsum Restaurant'
header.appendChild(h2)

function makeButtons () {
    for (let i = 1; i < 4; i++) {
        const pageBtn = document.createElement('button')
        pageBtn.setAttribute('id', 'pageButton' + i)
        
        if (pageBtn.id === 'pageButton1') {
            pageBtn.innerText = 'Home'
        } else if (pageBtn.id === 'pageButton2') {
            pageBtn.innerText = 'Menu'
        } else if (pageBtn.id === 'pageButton3') {
            pageBtn.innerText = 'Contact'
        }

        header.appendChild(pageBtn)
    }
}

export {header, h2, makeButtons}