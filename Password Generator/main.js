//get dom elements
const resultEl = document.querySelector('#para')
const symbolsEl = document.getElementById('symbols')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const specialEl = document.getElementById('special')
const numbersEl = document.getElementById('numbers')


const btnEl = document.getElementById('BTN')
















//Click Event
btnEl.addEventListener('click', () => {


//lengthEl Validation
if (lengthEl.value === '') {
  alert('Please Choose Password Length')
}else if (lengthEl.value < 4){
  alert('Please Get At least 4 Characters')
   password.innerHTML = ''
}else if (lengthEl.value > 18 ){
  alert('Maximan Length is 18')
     password.innerHTML = ''

}




  let password = [] //length = 0


  //upper Case Latters
  let uper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N']
  let randomUper = uper[Math.floor(Math.random() * uper.length)]


  //see if checkbox checked or not
  if (upperEl.checked) {
    password += randomUper
  }







//Special Characters

let specialChar = ['@','#','$','&','!','£','¥']
  
let randomizeSpecial = specialChar[Math.floor(Math.random()*specialChar.length)]


//
if (specialEl.checked) {
 password+=randomizeSpecial
}





//special characters2
let specialChar2 = ['@','#','$','&','!','£','¥']
  
let randomizeSpecial2 = specialChar2[Math.floor(Math.random()*specialChar2.length)]


if (specialEl.checked) {
  password += randomizeSpecial2
}



//Numbers
let numbers = ['0','1','2','3','4','5','6','7','8','9']

let randomizeNum = numbers[Math.floor(Math.random()*numbers.length)]


if (numbersEl.checked) {
  password += randomizeNum
}



//Numbers2
let numbers2 = ['0','1','2','3','4','5','6','7','8','9']

let randomizeNum2 = numbers2[Math.floor(Math.random()*numbers2.length)]

if (numbersEl.checked) {
  password += randomizeNum2
}











  //lowercase Case Latters
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z']

  //Extract array via loop 
  for (var i = 0; i < lower.length; i++) {
    var randomLower = lower[Math.floor(Math.random() * lower.length)]
    
    password += randomLower
  }
  







 
resultEl.innerHTML = password.slice(0,lengthEl.value)





})