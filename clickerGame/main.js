let clicker = document.getElementById("click")
let balance = document.getElementById("balance")
let up = document.getElementById("up")
//market
let buy = document.getElementById("buy")
let buyOne = document.getElementById("buyOne")
let buyTwo = document.getElementById("buyTwo")
let buyThree = document.getElementById("buyThree")
let buyFour = document.getElementById("buyFour")
let buyfive = document.getElementById("buyFive")
//skins
let changeColor = document.getElementById("color")
let skinChangeColorValue = document.querySelector(".color")
let skinRandom = document.getElementById("randomSkin")
let pokeball = document.getElementById("pokeball")
let rgb = document.getElementById("rgb")
let bill = document.getElementById("bill")
let donut = document.getElementById("donut")

let money = 0
let updating = 1
let status
up.innerText = "bonus = " + updating

function clickCircle() {
  money = money + updating
  balance.innerText = "$" + money
}
clicker.addEventListener("click", clickCircle)

function buyPlusOne() {
  if (money >= 299) {
    updating = updating + 1
    money = money - 299
    balance.innerText = "$" + money
    up.innerText = "bonus = " + updating
    buy.style.borderColor = "lime"
    setTimeout(function() {
      buy.style.borderColor = "yellow"
    }, 500)
  } else {
    buy.style.borderColor = "red"
    setTimeout(function() {
      buy.style.borderColor = "yellow"
    }, 500)
  }
}
buy.addEventListener("click", buyPlusOne)

function buyPlusFour() {
  if (money >= 699) {
    updating = updating + 4
    money = money - 699
    balance.innerText = "$" + money
    up.innerText = "bonus = " + updating
    buyOne.style.borderColor = "lime"
    setTimeout(function() {
      buyOne.style.borderColor = "yellow"
    }, 500)
  } else {
    buyOne.style.borderColor = "red"
    setTimeout(function() {
      buyOne.style.borderColor = "yellow"
    }, 500)
  }
}
buyOne.addEventListener("click", buyPlusFour)

function buyPlusTen() {
  if (money >= 2299) {
    updating = updating + 10
    money = money - 2299
    balance.innerText = "$" + money
    up.innerText = "bonus = " + updating
    buyTwo.style.borderColor = "lime"
    setTimeout(function() {
      buyTwo.style.borderColor = "yellow"
    }, 500)
  } else {
    buyTwo.style.borderColor = "red"
    setTimeout(function() {
      buyTwo.style.borderColor = "yellow"
    }, 500)
  }
}

buyTwo.addEventListener("click", buyPlusTen)

function buyPlusFifteen() {
  if (money >= 3999) {
    updating = updating + 15
    money = money - 3999;
    balance.innerText = "$" + money
    up.innerText = "bonus = " + updating
    buyThree.style.borderColor = "lime"
    setTimeout(function() {
      buyTwo.style.borderColor = "yellow"
    }, 500)
  } else {
    buyThree.style.borderColor = "red"
    setTimeout(function() {
      buyThree.style.borderColor = "yellow"
    }, 500)
  }
  }

buyThree.addEventListener("click", buyPlusFifteen)

function buyTwentyFive() {
  if (money >= 7500) {
    updating = updating + 25
    money = money - 7500
    balance.innerText = "$" + money
    up.innerHTML = "bonus = " + updating
    buyFour.style.borderColor = "lime"
    setTimeout(function() {
      buyFour.style.borderColor = "yellow"
    }, 500)
  } else {
    buyFour.style.borderColor = "red"
    setTimeout(function() {
      buyFour.style.borderColor = "yellow"
    }, 500)
    }
}
buyFour.addEventListener("click", buyTwentyFive)

function buyPlusThirty() {
  if (money >= 9000) {
    updating = updating + 30
    money = money - 9000
    balance.innerText = "$" + money
    up.innerHTML = "bonus = " + updating
    buyfive.style.borderColor = "lime"
    setTimeout(function() {
      buyfive.style.borderColor = "yellow"
    }, 500)
  } else {
    buyfive.style.borderColor = "red"
    setTimeout(function() {
      buyfive.style.borderColor = "yellow"
    }, 500)
  }
}
buyfive.addEventListener("click", buyPlusThirty)

function color() {
  if (money >= 99) {
    money = money - 99
    status = false
    balance.innerText = "$" + money
    //remove
    clicker.classList.remove("clickChangeSkinPokeball")
    clicker.classList.remove("clickChangeSkinRgb")
    clicker.classList.remove("clickChangeSkinBill")
    clicker.classList.remove("clickChangeSkinDonut")
    /////////////////////////
    clicker.style.backgroundColor = changeColor.value
  }
  skinChangeColorValue.style.backgroundColor = changeColor.value;
}
changeColor.oninput = color

function skinRnd() {
  if (money >= 249000) {
    status = true
    money = money - 249000
    balance.innerText = "$" + money
    randomColor()
  }
}

function randomColor() {
  if (status === true) {
    r = Math.floor(Math.random() * (256)),
      g = Math.floor(Math.random() * (256)),
      b = Math.floor(Math.random() * (256)),
      color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    clicker.style.backgroundColor = color
    //remove
    clicker.classList.remove("clickChangeSkinPokeball")
    clicker.classList.remove("clickChangeSkinRgb")
    clicker.classList.remove("clickChangeSkinBill")
    clicker.classList.remove("clickChangeSkinDonut")
    /////////////////////////
    clicker.style.backgroundColor = color
    clicker.addEventListener("click", randomColor)
  }
}
skinRandom.addEventListener("click", skinRnd)

function pokeballSkin() {
  if (money >= 15999) {
    money = money - 15999
    status = false
    balance.innerText = "$" + money
    //remove 
    clicker.classList.remove("clickChangeSkinRgb")
    clicker.classList.remove("clickChangeSkinBill")
    clicker.classList.remove("clickChangeSkinDonut")
    /////////////////////////
    clicker.style.backgroundColor = "transparent"
    clicker.classList.toggle("clickChangeSkinPokeball")
  }
}
pokeball.addEventListener("click", pokeballSkin)

function rgbSkin() {
  if (money >= 8999) {
    money = money - 8999
    status = false
    balance.innerText = "$" + money
    //remove
    clicker.classList.remove("clickChangeSkinPokeball")
    clicker.classList.remove("clickChangeSkinBill")
    clicker.classList.remove("clickChangeSkinDonut")
    /////////////////////////
    clicker.style.backgroundColor = "transparent"
    clicker.classList.toggle("clickChangeSkinRgb")
  }
}
rgb.addEventListener("click", rgbSkin)

function billSkin() {
  if (money >= 29990) {
    money = money - 29990
    status = false
    balance.innerText = "$" + money
    //remove
    clicker.classList.remove("clickChangeSkinPokeball")
    clicker.classList.remove("clickChangeSkinRgb")
    clicker.classList.remove("clickChangeSkinDonut")
    /////////////////////////
    clicker.style.backgroundColor = "transparent"
    clicker.classList.toggle("clickChangeSkinBill")
  }
}
bill.addEventListener("click", billSkin)

function donutSkin() {
  if (money >= 56990) {
    money = money - 56990
    status = false
    balance.innerText = "$" + money
    //remove
    clicker.classList.remove("clickChangeSkinPokeball")
    clicker.classList.remove("clickChangeSkinRgb")
    clicker.classList.remove("clickChangeSkinBill")
    /////////////////////////
    clicker.style.backgroundColor = "transparent"
    clicker.classList.toggle("clickChangeSkinDonut")
  }
}
donut.addEventListener("click", donutSkin)