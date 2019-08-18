const buttons = document.querySelectorAll('button')
const sidebar = document.querySelector('.index')

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    let id = button.getAttribute('id')
    buttons.forEach((button) => button.classList.remove('active'))
    button.classList.toggle('active')
    let content = document.querySelector(`#${id}Content`)
    let contentEls = document.querySelectorAll('.js-content')
    contentEls.forEach((el) => el.classList.add('hidden'))
    content.classList.remove('hidden')
  })
})





