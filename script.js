// simple JS to add and remove the active class

// get references to 3 classses
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// add an event listener, toggle the class on and off. Focus put the cursor inside the search box(??)
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})