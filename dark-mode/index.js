const principal = document.getElementById('mode')


principal.addEventListener('click',()=>{
const container = document.getElementById('container')
const body = document.querySelector('.body')

  if(principal.classList.contains('fa-moon')){
    principal.classList.remove('fa-moon')
    principal.classList.add('fa-sun')
    
    body.classList.add('light')
    container.classList.add('light')
    return
  }
  principal.classList.add('fa-moon')
  principal.classList.remove('fa-sun')

  container.classList.remove('light')
  body.classList.remove('light')
})