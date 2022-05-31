let burger:any = document.querySelector('.burger_menu')
let menu:any = document.querySelector('.navbar')
let frist_menu: any = document.querySelector('.sub_menu__frist')
let second_menu: any = document.querySelector('.sub_menu__second')
let features: any = document.querySelector('.features')
let company: any = document.querySelector('.company')
burger?.addEventListener('click', ()=>{

    if( menu.style.visibility == 'visible'){
        menu.style.visibility = 'hidden'
        burger.style.backgroundImage = 'url("../images/icon-menu.svg")'

    }else{
        menu.style.visibility = 'visible'
        burger.style.backgroundImage = 'url("../images/icon-close-menu.svg")'
    }
  
})

    features.addEventListener('click', ()=>{
        if( burger.style.backgroundImage == 'url("../images/icon-menu.svg")' || burger.style.backgroundImage == 'url("../images/icon-close-menu.svg")' ){
        (  frist_menu.style.display == 'none') ? frist_menu.style.display = 'grid' : frist_menu.style.display = 'none'
      
    }
    })

    
    company.addEventListener('click', ()=>{
        if( burger.style.backgroundImage == 'url("../images/icon-menu.svg")' || burger.style.backgroundImage == 'url("../images/icon-close-menu.svg")' ){
        (  second_menu.style.display == 'none') ? second_menu.style.display = 'block' : second_menu.style.display = 'none'
      
    }
    })

