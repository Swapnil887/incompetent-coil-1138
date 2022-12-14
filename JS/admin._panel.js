console.log("app start")

let add_btn=document.getElementById("new_product")
add_btn.addEventListener("submit",function(event){
    event.preventDefault()
let add_img=document.querySelector("#img_url").value
let add_name=document.querySelector("#name").value
let add_price=document.querySelector("#price").value
let add_des=document.querySelector("#des").value
let obj={
  
}
    console.log(add_img,add_name,add_price,add_des)

