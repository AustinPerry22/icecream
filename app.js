const iceCream = [
    {
        name: 'Vanilla',
        price: 1,
        quantity: 0
    }, {
        name: 'Chocolate',
        price: 1.25,
        quantity: 0
    },
    {
        name: 'Strawberry',
        price: 1.25,
        quantity: 0
    }]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

function orderSprinkles() {
    let sprinklesObj = toppings.find(topping => topping.name == 'Sprinkles')
    sprinklesObj.quantity++
}

function orderChocoChips() {
    let chocoChipObj = toppings.find(topping => topping.name == 'Chocolate Chips')
    chocoChipObj.quantity++
}

function orderGummyWorms() {
    let gummyWormsObj = toppings.find(topping => topping.name == 'Gummy Worms')
    gummyWormsObj.quantity++
}

function orderVanilla() {
    console.log("ordering vanilla")
    let vanillaObj = iceCream.find(icecream => icecream.name == 'Vanilla')
    vanillaObj.quantity++
    console.log(vanillaObj.quantity)
}

function orderChocolate() {
    console.log("ordering Chocolate")
    let chocolateObj = iceCream.find(icecream => icecream.name == 'Chocolate')
    chocolateObj.quantity++
    console.log(chocolateObj.quantity)
}

function orderStrawberry() {
    console.log("ordering strawberry")
    let strawberryObj = iceCream.find(icecream => icecream.name == 'Strawberry')
    strawberryObj.quantity++
    console.log(strawberryObj.quantity)
}

function drawTotal() {
    let cost = 0

    iceCream.forEach(flavor => {
        cost += (flavor.price * flavor.quantity)
    })
    toppings.forEach(topping => {
        cost += (topping.price * topping.quantity)
    })
    let totalElem = document.getElementById('total')
    totalElem.innerText = cost.toFixed(2)
}

function drawCart() {
    let cartContent = ""

    iceCream.forEach(flavor => {
        cartContent += `<p>flavor: ${flavor.name} qty: ${flavor.quantity}</p>`
    })
    toppings.forEach(topping => {
        cartContent += `<p>topping: ${topping.name} qty: ${topping.quantity}</p>`
    })

    let cartElem = document.getElementById('cart')
    cartElem.innerHTML = cartContent
    drawTotal()
}