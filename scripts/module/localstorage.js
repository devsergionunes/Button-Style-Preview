import {objectStyle , resultado , btn , hendalTextstyle} from './formsValue.js'
import {elementsDark } from './dark.js'

const reset = document.querySelector('.btn-reset')
reset.addEventListener('click', hendalReset)
function saveLocalStorange(name, value) {
    localStorage[name] = value
}
function setValuelocalStorange() {
    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i)
        let value = localStorage.getItem(name)
        if(localStorage[name] === 'dark'){
            elementsDark.forEach( elemento => {
                elemento.classList.toggle('dark')
            })
        }
        else { 
        objectStyle[name](value)
        }
    }
    hendalTextstyle()
    
}
function hendalReset() {
    localStorage.clear()
    resultado.innerHTML = ''
    btn.style.cssText = ''
}
export {saveLocalStorange , setValuelocalStorange}