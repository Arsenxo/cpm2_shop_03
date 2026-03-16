let accounts=[

{
name:"KING ACCOUNT 👑",
cars:"10-20",
money:"50,000,000",
coins:300,
price:15
},

{
name:"KING PRO ACCOUNT 👑",
cars:"20",
money:"50,000,000",
coins:300,
price:20
}

]

let cart=[]

function renderProducts(){

let container=document.getElementById("products")

accounts.forEach(acc=>{

let div=document.createElement("div")

div.className="product"

div.innerHTML=`

<h3>${acc.name}</h3>

<p>Cars: ${acc.cars}</p>
<p>Money: ${acc.money}</p>
<p>Coins: ${acc.coins}</p>

<p class="price">$${acc.price}</p>

<button onclick="addToCart('${acc.name}',${acc.price})">
В корзину
</button>

`

container.appendChild(div)

})

}

renderProducts()

function addToCart(name,price){

cart.push({name,price})

renderCart()

saveCart()

}

function renderCart(){

let container=document.getElementById("cartItems")

container.innerHTML=""

cart.forEach(item=>{

let div=document.createElement("div")

div.innerText=item.name+" - $"+item.price

container.appendChild(div)

})

}

function checkout(){

if(cart.length===0){

alert("Корзина пустая")
return

}

let orders=JSON.parse(localStorage.getItem("orders")||"[]")

orders.push(...cart)

localStorage.setItem("orders",JSON.stringify(orders))

alert("Заказ создан")

cart=[]

renderCart()

saveCart()

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase()

let products=document.querySelectorAll(".product")

products.forEach(p=>{

p.style.display=p.innerText.toLowerCase().includes(input)?"block":"none"

})

}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart))

}

function loadCart(){

let saved=localStorage.getItem("cart")

if(saved){

cart=JSON.parse(saved)

}

renderCart()

}

loadCart()