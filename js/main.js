

let block = document.querySelector('.data-time')
let block1 = document.getElementById('first')
let description = document.querySelector('.main__bag-link')
let close = document.querySelector('.main__price-button')

block.addEventListener('click', function(){
    console.log('ghb')
    block.classList.toggle('data-time-active')
    
})
block1.addEventListener('click', function(){
    block1.classList.toggle('data-time-active')
})

description.addEventListener('click', function (){
   document.querySelector('.main__price-description').classList.add('main__price-desc')
})

close.addEventListener('click', function(){
    document.querySelector('.main__price-description').classList.remove('main__price-desc')
})