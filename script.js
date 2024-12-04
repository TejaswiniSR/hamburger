const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
// const menuList =document.querySelector('.menu-list')
// const munuopen=document.querySelector('.menu-open')
const main =document.querySelector('.main-content')

const gototop =document.querySelector('.go-to-top')

hamburgerIcon.addEventListener('click',()=>{
    
     headerContent.classList.add('menu-open')
})


headerContent.addEventListener('click',(e)=>{
  e.stopPropagation()

})
closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')

})

window.addEventListener('click',()=>{

    headerContent.classList.remove('menu-open')

})


gototop.addEventListener('click',(e)=>{
    main.scrollTo(0, 0)
})



