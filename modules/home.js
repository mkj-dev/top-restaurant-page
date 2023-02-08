// Home section
const homeSection = document.createElement('section')
homeSection.setAttribute('id', 'homeSection')

// About us
const aboutUs = document.createElement('div')
aboutUs.setAttribute('id', 'aboutUs')

// About us heading
const aboutUsHeading = document.createElement('h3')
aboutUsHeading.innerText = 'About Us'

// About us paragraph
const aboutPara = document.createElement('p')
aboutPara.innerText = 'Aenean consequat suscipit lorem non rutrum. Nullam consequat ac augue at tincidunt. Suspendisse nec consectetur sapien. Vestibulum faucibus, est a commodo gravida, nisl tellus euismod dolor, non condimentum quam diam a nulla. Praesent nec nibh at enim imperdiet hendrerit. Pellentesque sit amet feugiat sapien. Aliquam egestas fermentum auctor. Nulla vel erat dolor. Nulla porttitor tellus urna, malesuada sodales augue fermentum eget. Ut eu lobortis nisl, sit amet consectetur ipsum. Sed hendrerit diam enim, id ultricies sem aliquam et.'

// Gallery
const gallery = document.createElement('div')
gallery.setAttribute('id', 'gallery')

// Gallery heading
const galleryHeading = document.createElement('h3')
galleryHeading.innerText = 'Gallery'

// Gallery images
function createImages() {
    for (let i = 0; i < 6; i++) {
        const img = document.createElement('img')
        img.setAttribute('id', 'pic' + i)
        img.setAttribute('class', 'photo')
        img.setAttribute('src', '../../images/appetizing-pasta-with-tomato-sauce-parmesan-plate-closeup.jpg')
        gallery.appendChild(img)
    }
}

aboutUs.append(aboutUsHeading, aboutPara)
gallery.appendChild(galleryHeading)

homeSection.append(aboutUs, gallery)

export { homeSection, createImages }