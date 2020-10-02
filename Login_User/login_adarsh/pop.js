var btn=document.querySelector('.modal-btn');
var cont=document.querySelector('.container');
var cls=document.querySelector('.closes');
var butn=document.querySelector('.bttn');


btn.addEventListener('click',function(){
    cont.classList.add('bg-activ')
});
cls.addEventListener('click', function(){
    cont.classList.remove('bg-activ')
});
butn.addEventListener('click',function(){
    alert("login Sucessfull");
    
});
window.addEventListener('load',()=>{
    const preloader=document.querySelector('.preload');
    preloader.classList.add("preload-finish");

});
