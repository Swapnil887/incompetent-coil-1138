let total = 0;
let cart_medicines = document.querySelector("#cart_items");
cart_medicines.innerHTML = "hello orders";

let append = (data) => {
  // cart_medicines.innerHTML=null
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "items");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "div_align");

    let name = document.createElement("h4");
    name.innerText = el.name;

    let price = document.createElement("h4");
    price.innerText = el.price;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div_align");

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let MRP = document.createElement("p");
    MRP.innerText = "Rs. 1250/-";

    let div3 = document.createElement("div");
    div3.setAttribute("class", "div_align");

    let div3l = document.createElement("div");
    div3l.setAttribute("class", "remove");

    let div3l1 = document.createElement("div");
    let img1 = document.createElement("img");

    let div3l2 = document.createElement("div");

    let div3r = document.createElement("div");
    div3r.setAttribute("class", "add");

    let div3r1 = document.createElement("div");
    let img2 = document.createElement("img");

    let div3r2 = document.createElement("div");

    let div3r3 = document.createElement("div");
    let img3 = document.createElement("img");
  });
};
