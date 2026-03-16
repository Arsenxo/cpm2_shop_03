function register(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Аккаунт создан")

}

function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let savedUser=localStorage.getItem("user")
let savedPass=localStorage.getItem("pass")

if(user===savedUser && pass===savedPass){

alert("Вы вошли")

window.location="index.html"

}else{

alert("Неверные данные")

}

}