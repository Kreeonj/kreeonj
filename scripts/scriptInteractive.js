let burgBtn=document.querySelector('.menu-btn');
let nav=document.querySelector('.header-block__nav');
let wrapper=document.querySelector('.wrapper');

burgBtn.addEventListener('click',function(){
    nav.classList.toggle('nav__active');
    wrapper.classList.toggle('overflow__hidden');
    console.log("click");
})