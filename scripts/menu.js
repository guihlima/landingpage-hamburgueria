var btn = document.querySelector('#menu-bars')
var menu = document.querySelector('#nav-list')
var btnClose = document.querySelector('#btn-close')

btn.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

btnClose.addEventListener('click', ()=>{
    menu.classList.remove('active')
})


window.onscroll = () =>{
    menu.classList.remove('active')
}