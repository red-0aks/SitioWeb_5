const elements = document.querySelectorAll('.img')

document.addEventListener('DOMContentLoaded', ()=>{
    elements.forEach(element =>{
        element.classList.toggle('show')
    })
})
