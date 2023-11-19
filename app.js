'use strict'

let heading = document.querySelector('h2');
let decBtn = document.querySelector('.dec')
let incBtn = document.querySelector('.inc')
let resBtn = document.querySelector('.res')


let body = document.body

let determinant = heading.innerText

function increase(){
     heading.innerText = Number(heading.innerText) + 1
     if(heading.innerText > 0){
        body.style.backgroundColor = "green"
        }
        else if(heading.innerText < 0){body.style.backgroundColor = 'red'}
        else{body.style.backgroundColor = 'yellow'}
    // body.style.backgroundColor = 'green'
    // heading.innerText++
    
    
    
}

incBtn.addEventListener('click',increase)

// for dec

decBtn.addEventListener('click',function(){
    heading.innerText = heading.innerText - 1
    if(heading.innerText > 0){
        body.style.backgroundColor = "green"
        }
        else if(heading.innerText < 0){body.style.backgroundColor = 'red'}
        else{body.style.backgroundColor = 'yellow'}
    // body.style.backgroundColor = 'red'

})

// res

let reset = function (){
    heading.innerText = determinant
    if(heading.innerText > 0){
        body.style.backgroundColor = "green"
        }
        else if(heading.innerText < 0){body.style.backgroundColor = 'red'}
        else{body.style.backgroundColor = 'yellow'}
    // body.style.backgroundColor = 'yellow'
}


resBtn.addEventListener('click',reset)





