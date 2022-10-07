const homeSection = document.createElement('div')
const backgroundImage = document.createElement('img')
const aboutUs = document.createElement('div')
const gallery = document.createElement('div')
const h3About = document.createElement('h3')
const p = document.createElement('p')
const h3Gallery = document.createElement('h3')

homeSection.setAttribute('id', 'homeSection')
backgroundImage.setAttribute('id', 'homeSectionBgImg')
aboutUs.setAttribute('id', 'aboutUs')
gallery.setAttribute('id', 'gallery')

h3About.innerText = 'About Us'
p.innerText = 'Aenean consequat suscipit lorem non rutrum. Nullam consequat ac augue at tincidunt. Suspendisse nec consectetur sapien. Vestibulum faucibus, est a commodo gravida, nisl tellus euismod dolor, non condimentum quam diam a nulla. Praesent nec nibh at enim imperdiet hendrerit. Pellentesque sit amet feugiat sapien. Aliquam egestas fermentum auctor. Nulla vel erat dolor. Nulla porttitor tellus urna, malesuada sodales augue fermentum eget. Ut eu lobortis nisl, sit amet consectetur ipsum. Sed hendrerit diam enim, id ultricies sem aliquam et.'
backgroundImage.src = '../../images/vegetables-set-left-black-slate.jpg'
h3Gallery.innerText = 'Gallery'

function createImages() {
    for (let i = 0; i < 6; i++) {
        const img = document.createElement('img')
        img.setAttribute('id', 'pic' + i)
        img.setAttribute('class', 'photo')
        img.setAttribute('src', '../../images/appetizing-pasta-with-tomato-sauce-parmesan-plate-closeup.jpg')
        gallery.appendChild(img)
    }
}

aboutUs.appendChild(h3About), aboutUs.appendChild(p), gallery.appendChild(h3Gallery)
homeSection.appendChild(backgroundImage, aboutUs, h3Gallery)

export { homeSection, backgroundImage, aboutUs, gallery, h3Gallery, createImages }