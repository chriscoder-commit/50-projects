// querySelector allows you to select by anything - i.e. whereas getElementById obviously only 
// allows you to get something by its id.
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}