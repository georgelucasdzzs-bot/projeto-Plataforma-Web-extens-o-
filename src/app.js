import * as donationModule from './modules/donation/donationModule.js'

document.querySelector('#show-window')
  .addEventListener('click', () => {

    window.alert(`Largura: ${window.innerWidth} px | Altura: ${window.innerHeight}`)
  })

  donationModule.render()
