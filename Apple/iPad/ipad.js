const productList = [
    {
        name: 'iPad',
        price: 10500,
        mainImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=450&hei=523&fmt=jpeg&qlt=95&.v=1630973863000',
        colorList: [
            { name: '太空灰色', color: '#b1b4b6', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308881000' },
            { name: '銀色', color: '#e0e2e1', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-silver-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308880000' },
        ],
        spec: [
            {
                name: '容量',
                specDetail: [
                    { name: '64GB', fit: 0 },
                    { name: '256GB', fit: 4500 }
                ]
            },
            {
                name: '連線能力',
                specDetail: [
                    { name: 'Wi-Fi', fit: 0 },
                    { name: 'Wi-Fi + 行動網路', fit: 4000 },
                ]
            }
        ]
    },
    {
        name: 'iPad mini',
        price: 14900,
        mainImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840745000',
        colorList: [
            { name: '太空灰色', color: 'rgb(176, 179, 181)', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840743000' },
            { name: '粉紅色', color: 'rgb(232, 209, 207)', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-pink-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840714000' },
            { name: '紫色', color: 'rgb(186, 185, 210)', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840735000' },
            { name: '星光色', color: 'rgb(230, 222, 213)', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840745000' },
        ],
        spec: [
            {
                name: '容量',
                specDetail: [
                    { name: '64GB', fit: 0 },
                    { name: '256GB', fit: 4500 }
                ]
            },
            {
                name: '連線能力',
                specDetail: [
                    { name: 'Wi-Fi', fit: 0 },
                    { name: 'Wi-Fi + 行動網路', fit: 4000 },
                ]
            }
        ]
    }

]
//DOM
const navBar = document.querySelector('.nav-bar')
const productType = document.querySelector('.product-type')
const priceTop = document.querySelector('.price-top')
const productImg = document.querySelector('.product-img')
const productName = document.querySelector('.product-name')

const accordionBox = document.querySelector('.accordion')
const colorAreaBtn = document.querySelector('[aria-controls="panelsStayOpen-color"]')
const colorArea = document.querySelector('.color-area')
const storageArea = document.querySelector('.storage-area')
const accordionBtn = document.querySelector('.storage-btn')

const internetArea = document.querySelector('.internet-area')
const internetBtn = document.querySelector('.internet-btn')


//window.onload
window.onload = function () {
    showNavBar()
    slectProduct(productList[0])
}

//function
function showNavBar() {
    const list = productList.map(x => x.name)
    list.forEach((name, index) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = name
        a.href = `#${name}`
        a.classList.add('btn', 'btn-dark', 'product', 'fs-4')

        li.appendChild(a)
        navBar.appendChild(li)
        li.onclick = function () {
            reload()
            slectProduct(productList[index])
        }
    })
}

function slectProduct(product) {
    productType.innerText = product.name
    priceTop.innerText = `NT$${product.price}`
    productImg.src = product.mainImg
    productName.innerText = `購買 ${product.name}`

    //color
    product.colorList.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('col-6', 'mb-3')
        const btn = document.createElement('button')
        btn.classList.add('btn', 'color-btn', 'w-100')
        btn.onclick = function () {
            productImg.src = item.img
            colorAreaBtn.innerText = item.name
            colorAreaBtn.click()
        }

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')

        const i = document.createElement('i')
        i.classList.add('fas', 'fa-circle', 'fs-4', 'm-4')
        i.style.color = item.color
        const span = document.createElement('span')
        span.classList.add('color-name')
        span.innerText = item.name

        btnDiv.appendChild(i)
        btnDiv.appendChild(span)
        btn.appendChild(btnDiv)
        div.appendChild(btn)
        colorArea.appendChild(div)
    })

    //storage
    let storage = product.spec[0]
    const accordionContent = document.createElement('div')
    accordionContent.setAttribute('id', `panelsStayOpen-${storage.name}`)
    accordionContent.classList.add('accordion-collapse', 'collapse', 'show')
    const accordionBody = document.createElement('div')
    accordionBody.classList.add('accordion-body')
    const specDiv = document.createElement('div')
    specDiv.classList.add('row')

    storage.specDetail.forEach(specItem => {
        const div = document.createElement('div')
        div.classList.add('col-6', 'mb-3')

        const btn = document.createElement('button')
        btn.classList.add('btn', 'fit-btn', 'w-100')

        btn.setAttribute('fit', specItem.fit)
        btn.setAttribute('selected', 'false')
        btn.onclick = function () {
            specDiv.querySelectorAll('.btn').forEach(b => {
                b.setAttribute('selected', 'false')
            })
            btn.setAttribute('selected', 'true')

            showPrice(product)
            accordionBtn.innerText = specItem.name
            accordionBtn.click()

        }


        const btnDiv = document.createElement('div')
        btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')

        const p = document.createElement('p')
        p.classList.add('spec-val', 'm-0')
        p.innerText = specItem.name
        const span = document.createElement('span')
        span.classList.add('fit')
        span.innerText = `NT$${product.price + specItem.fit}`
        btnDiv.appendChild(p)
        btnDiv.appendChild(span)
        btn.appendChild(btnDiv)
        div.appendChild(btn)
        specDiv.appendChild(div)
    })
    accordionBody.appendChild(specDiv)
    accordionContent.appendChild(accordionBody)
    storageArea.appendChild(accordionContent)


    //internet
    let internet = product.spec[1]
    const internetContent = document.createElement('div')
    internetContent.setAttribute('id', `panelsStayOpen-${internet.name}`)
    internetContent.classList.add('accordion-collapse', 'collapse', 'show')
    const internetBody = document.createElement('div')
    internetBody.classList.add('accordion-body')
    const internetDiv = document.createElement('div')
    internetDiv.classList.add('row')
    internet.specDetail.forEach(specItem => {
        const div = document.createElement('div')
        div.classList.add('col-6', 'mb-3')

        const btn = document.createElement('button')
        btn.classList.add('btn', 'fit-btn', 'w-100')

        btn.setAttribute('fit', specItem.fit)
        btn.setAttribute('selected', 'false')
        btn.onclick = function () {
            internetDiv.querySelectorAll('.btn').forEach(b => {
                b.setAttribute('selected', 'false')
            })
            btn.setAttribute('selected', 'true')

            showPrice(product)
            internetBtn.innerText = specItem.name
            internetBtn.click()
        }


        const btnDiv = document.createElement('div')
        btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')

        const p = document.createElement('p')
        p.classList.add('spec-val', 'm-0')
        p.innerText = specItem.name
        const span = document.createElement('span')
        span.classList.add('fit')
        span.innerText = `NT$${product.price + specItem.fit}`
        btnDiv.appendChild(p)
        btnDiv.appendChild(span)
        btn.appendChild(btnDiv)
        div.appendChild(btn)
        internetDiv.appendChild(div)
    })
    internetBody.appendChild(internetDiv)
    internetContent.appendChild(internetBody)
    internetArea.appendChild(internetContent)

    
}





function showPrice(product) {
    const selectFits = Array.from(document.querySelectorAll('[fit][selected="true"]'))
    const money = selectFits.length > 0 ? selectFits.map(x => parseInt(x.getAttributeNode('fit').value)).reduce((a, b) => a + b) : 0
    priceTop.innerText = `NT$${product.price + money}`

    const p = document.querySelector('.total-price')
    p.innerText = `NT$${product.price + money}`
}
function reload() {
    colorArea.innerHTML = ''
    colorAreaBtn.innerText = '請選擇顏色'

    storageArea.innerHTML = ''
    accordionBtn.innerText = '請選擇容量'

    internetArea.innerHTML = ''
    internetBtn.innerText = '請選擇容量'

    document.querySelectorAll('.accordion-button').forEach(x => { x.classList.remove('collapse') })
    document.querySelectorAll('.accordion-collapse').forEach(x => { x.classList.add('show') })
}
