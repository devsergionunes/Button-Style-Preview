import {saveLocalStorange} from './localstorage.js'

const form = document.querySelector('#controles')
const btn = document.querySelector('.btn')
let resultado = document.querySelector('.css')
let objectStyle = {
    texto(value) {
        btn.innerText = value
    },
    color(value) {
        btn.style.color = value
    },
    backgroundColor(value) {
        btn.style.backgroundColor = value
    },
    height(value) {
        btn.style.height = `${value}px`
    },
    width(value) {
        btn.style.width = `${value}px`
    },
    border(value) {
        btn.style.border = value
    },
    borderRadius(value) {
        btn.style.borderRadius = `${value}px`
    },
    fontFamily(value) {
        btn.style.fontFamily = value
    },
    fontSize(value) {
        btn.style.fontSize = `${value}px`
    }
}
function initFormsvalue() {
    form.addEventListener('change', handelForm)
    function handelForm(event) {
        const name = event.target.name
        const value = event.target.value
        objectStyle[name](value)
        hendalTextstyle()
        saveLocalStorange(name, value)
    }
}
function hendalTextstyle() {
    resultado.innerHTML = '<span>' + btn.style.cssText.replaceAll('; ', ';</span><span>')
}
export {objectStyle , initFormsvalue  ,  btn ,hendalTextstyle , resultado} 