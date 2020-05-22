let inputR = document.querySelector('#r')
let inputG = document.querySelector('#g')
let inputB = document.querySelector('#b')

let outputR = document.querySelector('#r-value')
let outputG = document.querySelector('#g-value')
let outputB = document.querySelector('#b-value')

let colorBox = document.querySelector('.color-block')

const inputCp = document.querySelector('.input-valor')
const colorBlock = document.querySelector('.color-block')
const copiado = document.querySelector('.copiado')

inputR.addEventListener('change', () => {
  outputR.value = inputR.value
})

inputG.addEventListener('change', () => {
  outputG.value = inputG.value
})

inputB.addEventListener('change', () => {
  outputB.value = inputB.value
})

inputR.addEventListener('click', function changeColorBox() {
  const r = inputR.value
  const g = inputG.value
  const b = inputB.value
  const newColor = `rgb(${r},${g},${b})`

  colorBox.style.backgroundColor = newColor
  inputCp.value = newColor
})

inputG.addEventListener('click', function changeColorBox() {
  const r = inputR.value
  const g = inputG.value
  const b = inputB.value
  const newColor = `rgb(${r},${g},${b})`

  colorBox.style.backgroundColor = newColor
  inputCp.value = newColor
})

inputB.addEventListener('click', function changeColorBox() {
  const r = inputR.value
  const g = inputG.value
  const b = inputB.value
  const newColor = `rgb(${r},${g},${b})`

  colorBox.style.backgroundColor = newColor
  inputCp.value = newColor
})

function valueCopiar() {
  inputCp.select()
  inputCp.setSelectionRange(0, 99999)
  document.execCommand('copy')

  copiado.src = 'img/tick.png'
}
