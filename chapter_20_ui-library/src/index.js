import Tooltip from "./ninja-ui/tooltip"
import Accordion from "./ninja-ui/accordion"
import Tabs from "./ninja-ui/tabs"
import Snackbar from "./ninja-ui/snackbar"

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'))
tooltip.init()

// create accordions
const accordions = document.querySelectorAll('.accordion')
accordions.forEach(accordion => {
  const instance = new Accordion(accordion)
  instance.init()
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

// create snackbar
const snackbar = new Snackbar
snackbar.init()

const button = document.querySelector('button')
button.addEventListener('click', () => {
  snackbar.show('You clicked me 😉')
})