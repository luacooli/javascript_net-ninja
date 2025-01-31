import Tooltip from "./ninja-ui/tooltip"
import Accordion from "./ninja-ui/accordion"

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'))
tooltip.init()

// create accordions
const accordions = document.querySelectorAll('.accordion')
accordions.forEach(accordion => {
  const instance = new Accordion(accordion)
  instance.init()
})