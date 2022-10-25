const productList = [
  {
    name: 'iPhone SE',
    price: 13900,
    mainImg: './iPhone SE main.jpg',
    colorList: [
      { name: '午夜色', color: 'rgb(53, 60, 66)', img: './iPhone SE  black.png' },
      { name: '星光色', color: 'rgb(250, 247, 242)', img: './iPhone SE white.png' },
      { name: '紅色', color: 'rgb(220, 68, 67)', img: './iPhone SE red.png' }
    ],
    spec: [
      {
        name: '容量',
        specDetail: [
          {
            name: '65GB',
            fit: 0
          },
          {
            name: '128GB',
            fit: 1600
          },
          {
            name: '256GB',
            fit: 5100
          }
        ]
      }
    ]
  },
  // {
  //   name: 'iPhone 11',
  //   price: 16500,
  //   mainImg: './iPhone 11 mian.jpg',
  //   colorList: [
  //     { name: '綠色', color: 'rgb(173, 224, 205)', img: './iPhone 11 green.png' },
  //     { name: '紫色', color: 'rgb(209, 205, 219)', img: './iPhone 11 purple.png' },
  //     { name: '白色', color: 'rgb(247, 243, 240)', img: './iPhone 11 white.png' },
  //     { name: '黃色', color: 'rgb(255, 230, 128)', img: './iPhone 11 yellow.png' },
  //     { name: '黑色', color: 'rgb(57, 54, 63)', img: './iPhone 11 black.png' },
  //     { name: '紅色', color: 'rgb(220, 68, 67)', img: './iPhone 11 red.png' }
  //   ],
  //   spec: [
  //     {
  //       name: '容量',
  //       specDetail: [
  //         {
  //           name: '65GB',
  //           fit: 0
  //         },
  //         {
  //           name: '128GB',
  //           fit: 1600
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    name: 'iPhone 12',
    price: 22900,
    mainImg: './iphone-12 main.jpg',
    colorList: [
      { name: '綠色', color: 'rgb(219, 241, 218)', img: './iphone-12 green.png' },
      { name: '紫色', color: 'rgb(189, 182, 232)', img: './iphone-12 purple.png' },
      { name: '藍色', color: 'rgb(17, 71, 109)', img: './iphone-12 bule.png' },
      { name: '白色', color: 'rgb(247, 243, 240)', img: './iphone-12 white.png' },
      { name: '黑色', color: 'rgb(57, 54, 63)', img: './iphone-12 black.png' },
      { name: '紅色', color: 'rgb(220, 68, 67)', img: './iphone-12 red.png' }
    ],
    spec: [{
      name: '容量',
      specDetail: [
        {
          name: '65GB',
          fit: 0
        },
        {
          name: '128GB',
          fit: 1600
        },
        {
          name: '256GB',
          fit: 5100
        }
      ]

    }]
  },
  {
    name: 'iPhone 13',
    price: 22900,
    mainImg: './iphone-13 main.jpg',
    colorList: [
      { name: '綠色', color: 'rgb(219, 241, 218)', img: './iphone-13 green.png' },
      { name: '粉紅色', color: 'rgb(189, 182, 232)', img: './iphone-13 pink.png' },
      { name: '藍色', color: 'rgb(17, 71, 109)', img: './iphone-13 Bule.png' },
      { name: '午夜色', color: 'rgb(247, 243, 240)', img: './iphone-13 black.png' },
      { name: '星光色', color: 'rgb(57, 54, 63)', img: './iphone-13 white.png' },
      { name: '紅色', color: 'rgb(220, 68, 67)', img: './iphone-13 red.png' }
    ],
    spec: [
      {
        name: '容量',
        specDetail: [
          {
            name: '128GB',
            fit: 0
          },
          {
            name: '256GB',
            fit: 3500
          },
          {
            name: '512GB',
            fit: 10500
          }
        ]
      }]
  },
  {
    name: 'iPhone 13 Pro',
    price: 36900,
    mainImg: './iPhone 13 Pro main.jpg',
    colorList: [
      { name: '松嶺青色', color: 'rgb(87, 104, 86)', img: './iPhone 13 Pro green.png' },
      { name: '銀色', color: 'rgb(242, 243, 238)', img: './iPhone 13 Pro seliver.png' },
      { name: '金色', color: 'rgb(250, 234, 211)', img: './iPhone 13 Pro  gold.png' },
      { name: '石墨色', color: 'rgb(99, 98, 94)', img: './iPhone 13 Pro  gray.png' },
      { name: '天峰藍色', color: 'rgb(170, 195, 218)', img: './iPhone 13 Pro bule.png' },
    ],
    spec: [
      {
        name: '容量',
        specDetail: [
          {
            name: '128GB',
            fit: 0
          },
          {
            name: '256GB',
            fit: 3500
          },
          {
            name: '512GB',
            fit: 10500
          },
          {
            name: '1TB',
            fit: 17500
          }
        ]
      }]
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
    li.onclick = function(){
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
    btn.onclick = function() {
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

  //spec
  product.spec.forEach(item => {
    
    
    const accordionContent = document.createElement('div')
    accordionContent.setAttribute('id', `panelsStayOpen-${item.name}`)
    accordionContent.classList.add('accordion-collapse', 'collapse', 'show')
    const accordionBody = document.createElement('div')
    accordionBody.classList.add('accordion-body')
    const specDiv = document.createElement('div')
    specDiv.classList.add('row')
    item.specDetail.forEach(specItem => {
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
  })
}

function showPrice(product) {
  const selectFits = Array.from(document.querySelectorAll('[fit][selected="true"]'))
  const money = selectFits.length > 0 ? selectFits.map(x => parseInt(x.getAttributeNode('fit').value)).reduce((a, b) => a + b) : 0
  priceTop.innerText = `NT$${product.price + money}`

  const p = document.querySelector('.total-price')
  p.innerText = `NT$${product.price + money}`
}
function reload(){
  colorArea.innerHTML=''
  colorAreaBtn.innerText='請選擇顏色'

  storageArea.innerHTML=''
  accordionBtn.innerText='請選擇容量'

  document.querySelectorAll('.accordion-button').forEach(x=>{x.classList.remove('collapse')})
  document.querySelectorAll('.accordion-collapse').forEach(x=>{x.classList.add('show')})
}