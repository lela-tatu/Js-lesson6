//js-lesson6

let buttons = document.querySelectorAll('.submit');

buttons.forEach(function(item){
item.addEventListener('click',function(){
    alert ('hello');
})
})