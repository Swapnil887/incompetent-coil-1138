let total = 0;
let cart_medicines = document.querySelector("#cart_items");

let data = [
  {
    image: "http://www.masaischool.com/img/navbar/logo.svg",
    name: "Rudra",
    price: 5000,
    description: "great",
  },
  {
    image: "http://www.masaischool.com/img/navbar/logo.svg",
    name: "Rudra1",
    price: 50001,
    description: "greatestt",
  },
  {
    image: "http://www.masaischool.com/img/navbar/logo.svg",
    name: "Rudra1",
    price: 50001,
    description: "greatestt",
  },
];

let append = (data) => {
  // cart_medicines.innerHTML=null
  data.forEach((el, id) => {
    let div = document.createElement("div");
    div.setAttribute("class", "items");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "div_align");

    let name = document.createElement("h4");
    name.innerText = el.name;

    let price = document.createElement("h4");
    price.innerText = el.price;
    div1.append(name, price);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div_align");

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let MRP = document.createElement("p");
    MRP.innerText = "Rs. 1250/-";
    MRP.style.textDecoration = "line-through";
    div2.append(desc, MRP);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "div_align");

    let div3l = document.createElement("div");
    div3l.setAttribute("class", "remove");

    let div3l1 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = "https://img.1mg.com/images/delete_icon.svg";
    img1.style.cursor = "pointer";
    div3l1.append(img1);
    img1.addEventListener("click", (event) => {
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
      alert(`${el.name} will be removed from list`);
      remove_med(id);
    });

    let div3l2 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = "Remove";
    p1.style.cursor = "pointer";
    div3l2.append(p1);
    p1.addEventListener("click", (event) => {
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
      alert(`${el.name} will be removed from list`);
      remove_med(id);
    });

    div3l.append(div3l1, div3l2);

    let div3r = document.createElement("div");
    div3r.setAttribute("class", "add");

    let div3r1 = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://www.1mg.com/images/minus-cart.svg";
    div3r1.append(img2);

    let div3r2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.innerText = "9";
    div3r2.append(p2);

    let div3r3 = document.createElement("div");
    let img3 = document.createElement("img");
    img3.src = "https://www.1mg.com/images/plus-cart.svg";
    div3r3.append(img3);

    div3r.append(div3r1, div3r2, div3r3);

    div3.append(div3l, div3r);

    div.append(div1, div2, div3);
    cart_medicines.append(div);
  });
};

append(data);

// let remove_med
