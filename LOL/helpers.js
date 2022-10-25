//document.querySelcetorAll
function $g(selector){
    let nodelist = document.querySelectorAll(selector)

    if(nodelist.length == 0){
        return null
    }

    return nodelist.length == 1 ? nodelist[0] : nodelist
}

//createElement + innerText
function $ct(element, text){
    let e1 = document.createElement(element)

    if(text != null && text.length > 0 && typeof(text != 'undefined')){
        e1.innerText = text
    }
    return e1
}

export{ $g , $ct }