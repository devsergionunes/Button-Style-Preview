const buttonDark = document.querySelector('[data-dark="button"]')
const elementsDark = document.querySelectorAll('[data-dark]')
function initDark(){
    buttonDark.addEventListener('click' , activeDark)
    function activeDark(){
    elementsDark.forEach( elemento => {
        elemento.classList.toggle('dark')
    })
    if(!!localStorage.getItem('dark')){
        localStorage.removeItem('dark')
    }
    else {
        localStorage.setItem('dark' , 'dark')
    }
    }
}
export{ initDark , elementsDark }
