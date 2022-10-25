products = [
    {
        name: 'AirPods 第2代', price: 4290,
        mainImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489688005',
        img: [
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489688005',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489684370',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489686690',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1552508263186',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2_AV4_GEO_TW?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1604113451000'
        ]
    },
    {
        name: 'AirPods 第3代', price: 5990,
        mainImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000',
        img: [
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861338000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV5_GEO_TW?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1633987158000'
        ]
    },
    {
        name: 'AirPods Pro', price: 7990,
        mainImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
        img: [
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634652000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634643000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634662000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22_AV4_GEO_TW?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1604112986000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22_AV5_GEO_TW?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634791000'
        ]

    }
]

const productName = document.querySelector('.price-info h1')
const price = document.querySelector('.total-price')
const navBar = document.querySelector('.nav-bar')
const smallpic = document.querySelector('.smallpic')
const mainpic = document.querySelector('.mainpic img')


window.onload = function () {
    showNavBar()
    select(products[0])
}

function showNavBar() {
    const list = products.map(x => x.name)
    list.forEach((name, index) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = name
        a.href = `#${name}`
        a.classList.add('btn', 'btn-dark', 'product', 'fs-4')

        li.appendChild(a)
        navBar.appendChild(li)
        li.onclick = function () {
            select(products[index])
        }
    })
}

function select(product) {

    productName.innerText = product.name
    price.innerText = `$${product.price}`
    mainpic.src = product.mainImg

    smallpic.innerHTML = ''
    product.img.forEach(img => {
        smallpic.innerHTML += `<img src="${img}" class=" col-2 sm-pic border">`
    })
    const selectpic = document.querySelectorAll('.sm-pic')
    selectpic.forEach(img=>{
        img.onclick=function(){
            mainpic.src = img.src
        }
    })
}