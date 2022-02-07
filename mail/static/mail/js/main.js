
document.addEventListener('DOMContentLoaded', function(){
  const clk = document.querySelector('#clicker')
  const Newline = document.querySelector('#newline')
  const buttons = document.querySelectorAll('#paragr')

  clk.addEventListener('click',() =>{
    let name = prompt('Enter a new name')
    clk.textContent = 'Player 1: ' + name
    })
  
  function createParagraph() {
    let para = document.createElement('li')
    para.textContent = 'U ckicked putton!'
    document.body.appendChild(para)
    }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph)}

Newline.addEventListener('click', () => {
  let line = document.createElement('hr')
  document.body.appendChild(line)
})

let NewTask = document.querySelector('#guessfield')
let submit = document.querySelector('#guessSubmit')
let guesses = document.querySelector('#guesses')
let lastResult = document.querySelector('#lastResult')
let lowOrHi = document.getElementById('lowOrHi')
let validInput = document.getElementById('validInput')
let ResetGame = document.getElementById('clsResGam')
let trying = document.getElementById('trying')
let counter = 0
trying.textContent = 'У вас осталось: ' + (+10-counter) + ' попыток'

//default parametrs
submit.disabled = true
ResetGame.classList.add('display--none')
let clue  = getRandomIntInclusive(1, 100)
var vin = false
var re  = /\D/
console.log(clue)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

ResetGame.addEventListener('click', function ResetBtn() {
  clue  = getRandomIntInclusive(1, 100)
  var vin = false
  ResetGame.classList.toggle('display--none')
  submit.classList.toggle('display--none')
  NewTask.textContent =  ' '
  lowOrHi.textContent = ' '
  guesses.textContent = ' '
  lastResult.textContent = ' '
  counter =  0
  trying.textContent = 'У вас осталось: ' + (+10-counter) + ' попыток'
  return clue
})

NewTask.onkeyup = () => {
  if((NewTask.value.match(re) != null) || (NewTask.value > 100 ) || (NewTask.value.length <1 ) || (NewTask.value <= 0 ) ){
    validInput.textContent = ''
    if(NewTask.value.match(re) != null){
      validInput.style.backgroundColor = 'yellow';
      validInput.textContent =  'вводить можно только цифры от 1 до 100'}
    submit.disabled = true

  }else{
    submit.disabled = false
    validInput.textContent = ''
  }
}
guessSubmit.addEventListener('click', () => {
  let task = Number(NewTask.value)
  NewTask.value = ''
  document.getElementById('lastResult').textContent +=  ' ' +task 

  if(clue != task){
    if(task > clue){
      lowOrHi.textContent =  'Загаданное число меньше! ' 
      guesses.style.backgroundColor = 'red';
      guesses.textContent =  'Wrong! '
      
    }else{ 
      guesses.style.backgroundColor = 'red';
      guesses.textContent =  'Wrong! '
      lowOrHi.textContent =  ' Загаданное число больше! '
    }
    counter++ 
    if(counter%10 == 0){
      alert('Вы проиграли!')
      ResetGame.classList.toggle('display--none')
      submit.classList.toggle('display--none')

    }
    trying.textContent = 'У вас осталось: ' + (+10-counter) + ' попыток'
  }else{
    alert("Вы отгадали число!")
    guesses.style.backgroundColor = 'green';
    document.getElementById('guesses').textContent =  'Загаданное число: ' + clue 
    document.getElementById('guesses').textContent =  ' Sucsses! '
    vin = true
    submit.disabled = true   
    ResetGame.classList.toggle('display--none')
    submit.classList.toggle('display--none')
  }
  submit.disabled = true

})

})

