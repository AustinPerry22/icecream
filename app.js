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


function orderTopping(type) {
    let toppingObj = toppings.find(topping => topping.name == type)
    toppingObj.quantity++
    drawCart()
}

function orderScoop(flavor) {
    console.log("ordering " + flavor)
    let scoopObj = iceCream.find(icecream => icecream.name == flavor)
    scoopObj.quantity++
    drawCart()
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