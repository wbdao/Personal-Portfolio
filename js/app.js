let menu=document.querySelector('.navbar ul');
let btnToggle=document.querySelector('.menu_toggle');

let toggle="hide";
btnToggle.addEventListener('click',()=>{
    
    switch (toggle) {
        case "hide":
            toggle="show";
            menu.style.top='80px';
        break;
        case "show":
            toggle="hide";
            menu.style.top='-100%';
        break;
        default:
        break;
    }
});