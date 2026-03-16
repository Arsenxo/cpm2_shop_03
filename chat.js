function sendMessage(){

let input=document.getElementById("messageInput")

let msg=input.value

if(msg==="") return

let div=document.createElement("div")

div.innerText="Вы: "+msg

document.getElementById("messages").appendChild(div)

input.value=""

setTimeout(()=>{

let reply=document.createElement("div")

reply.innerText="Поддержка: мы ответим скоро."

document.getElementById("messages").appendChild(reply)

},1000)

}