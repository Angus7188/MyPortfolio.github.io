//宣告
let state, currentIndex
const today = new Date()
const block = document.querySelector('.block')
const storage = document.querySelector('.storage')
const closeBtn = document.querySelector('.close')
const input = document.querySelector('input')
const editBtn = document.querySelector('.edit-btn')
const delBtn = document.querySelector('.del-btn')
const addBtn = document.querySelector('.add-btn')
const textArea = document.querySelector('.text-area')
const noteTitle = document.querySelector('.storage h3')

//window.onload
window.onload = function () {
    init()
    
}

//初始化
function init() {
    state = new Date()
    render()

}
function preMonth() {
    state.setMonth(state.getMonth() - 1)
    render()
}
function nextMonth() {
    state.setMonth(state.getMonth() + 1)
    render()
}

//根據資料產生畫面
function render() {

    let head = document.querySelector('#year-month')
    head.textContent = `${state.getFullYear()} / ${state.getMonth() + 1}`
    let list = document.querySelector('#list')

    //清空畫面
    list.innerHTML = ''

    //取得這個月第一天
    let firstDay = new Date(state.getFullYear(), state.getMonth(), 1)
    let date = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1)

    //往前算到星期日
    date.setDate(date.getDate() - date.getDay())

    //判斷上個月的後幾天
    while (date < firstDay) {
        renderDate(date, list)
    }

    //判斷這個月日期
    while (date.getMonth() === state.getMonth()) {
        //劃出一天的格子
        renderDate(date, list)
        showDateInfo()
    }

    //判斷下個月日期
    while (date.getDay() > 0) {
        renderDate(date, list)
    }

    //操控記事本介面
    let dateBtn = document.querySelectorAll('.date:not(.fadeout)')
    
    dateBtn.forEach(btn => {
        btn.onclick = () => {
            openNote(state.getFullYear(), state.getMonth() + 1, btn.childNodes[0].data)
            //進入記事本介面時的textArea
            showNoteInfo()
        }
    })
    closeBtn.onclick = function () {
        storage.style.display = 'none'
        block.style.display = 'none'
    }

}
//劃出格子
function renderDate(date, list) {
    let cell = document.createElement('div')
    cell.classList.add('date')
    date.getMonth() === state.getMonth() ? '' : cell.classList.add('fadeout')

    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? cell.classList.add('today') : cell.classList.remove('today')

    cell.textContent = date.getDate()
    list.appendChild(cell)

    //日期+1
    date.setDate(date.getDate() + 1)
    cell.scroll(100, cell.scrollHeight)
}

//記事本介面UI
function openNote(year, month, date) {
    noteTitle.innerHTML = `${year}/${month}/${date}`
    storage.style.display = 'block'
    block.style.display = 'block'
}

//storage

function addTodoItem() {
    let date = noteTitle.textContent
    let todoItem = input.value
    let todoList = []
    let todoObj = {
        title: todoItem
    }
    if (input.value.length > 0) {

        if (localStorage.getItem(date) == null) {
            todoList.push(todoObj)
        } else {
            todoList = JSON.parse(localStorage.getItem(date))
            todoList.push(todoObj)
        }
        localStorage.setItem(date, JSON.stringify(todoList))
    }
    showNoteInfo()
    render()
}

function editTodoItem() {
    let date = noteTitle.textContent
    let todoItem = input.value

    let todoList = JSON.parse(localStorage.getItem(date))
    todoList[currentIndex] = { title: todoItem }
    localStorage.setItem(date, JSON.stringify(todoList))
    showNoteInfo()
    render()
}

function deletTodoItem() {
    let date = noteTitle.textContent
    let todoList = JSON.parse(localStorage.getItem(date))
    todoList.splice(currentIndex, 1)

    localStorage.setItem(date, JSON.stringify(todoList))



    showNoteInfo()
    render()
}

function showNoteInfo() {
    let date = noteTitle.childNodes[0].data
    textArea.innerHTML = ''
    input.value = ''
    if (localStorage.getItem(date) != null) {
        let ul = document.createElement('ul')
        let todoList = JSON.parse(localStorage.getItem(date))
        todoList.forEach((item, index) => {
            let li = document.createElement('li')
            li.innerText = `${index + 1}. ${item.title}`
            //點到指定li編輯
            li.onclick = function () {
                currentIndex = index
                input.value = item.title
                delBtn.removeAttribute('disabled')
                editBtn.removeAttribute('disabled')
            }
            ul.appendChild(li)
        })
        textArea.appendChild(ul)
    }
    delBtn.setAttribute('disabled', 'disabled')
    editBtn.setAttribute('disabled', 'disabled')
}

function showDateInfo() {
    let dateBtn = document.querySelectorAll('.date:not(.fadeout)')
    dateBtn.forEach(btn => {
        if (localStorage.getItem(`${state.getFullYear()}/${state.getMonth() + 1}/${btn.textContent}`) != null) {
            let ul = document.createElement('ul')
            let todoList = JSON.parse(localStorage.getItem(`${state.getFullYear()}/${state.getMonth() + 1}/${btn.textContent}`))

            todoList.forEach(item => {
                let li = document.createElement('li')
                li.innerText = `${item.title}`
                ul.appendChild(li)
            })
            btn.appendChild(ul)
        }
    })
    
}