console.log("app start")
async function getData(){
    var x = await fetch("https://6398c52b29930e2bb3c190fa.mockapi.io/sw/products");
    var data = await x.json();
    console.log(data)
    renderCardList(data);
  }

  getData()
let add_btn=document.getElementById("new_product")
add_btn.addEventListener("submit",function(event){
    event.preventDefault()
    let add_img=document.querySelector("#img_url").value
    let add_name=document.querySelector("#name").value
    let add_price=document.querySelector("#price").value
    let add_des=document.querySelector("#des").value
var obj = {
        name: add_name,
        description: add_des,
        avatar: add_img,
        price: add_price,
        
      }
    
      addData(obj)
     window.onload
})


let d_btn=document.querySelector(".mdlt")
d_btn.addEventListener("click",function(event){
   event.preventDefault()
let d_id=document.querySelector("#delete_id").value
  delData(d_id)
  console.log("delete")

})

let dlt_btn=document.getElementById("delete")
dlt_btn.addEventListener("click",function(event){
    event.preventDefault()
   
  let p_id=document.querySelector("#delete_id").value
  delData(p_id)
    console.log(p_id)
   // window.onload
})
async function addData(obj){
    var x = await fetch(`https://6398c52b29930e2bb3c190fa.mockapi.io/sw/products`,{
      method:"POST",
      headers:{"Content-Type":"application/json"}
      ,body:JSON.stringify(obj)
    })
  }
let main =document.querySelector(".main")

function renderCardList(cardData) {
    main.innerHTML=`

  
    ${cardData
      .map((item) => {
        let imageURL = `${item.avatar}`;
        let name = `${item.name}`;
        let description = `${item.description}`;
        let id=`${item.id}`;
        let price=`${item.price}`
        return getAsCard(imageURL, name, description,id,price );
      })
      .join("")}

`;
}

function getAsCard(imageURL, name, description, id,price) {
 
  return `
  <div class="show_products">
  <div> <img src=${imageURL} alt="img"></div>
  <h3>${name}</h3>
     <h3>${price}</h3>
     <p>${description}</p>
     <h3>PRODUCT ID:${id}</h3>
     <button class="mdlt">DELETE</button>
     </div>
`;
}



  async function delData(id){
    var x = await fetch(`https://6398c52b29930e2bb3c190fa.mockapi.io/sw/products/${id}`,{
      method:"DELETE"
    });
  }

