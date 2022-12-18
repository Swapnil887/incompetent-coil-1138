let total = 0;
let totalMRP = 0;
let cart_medicines = document.querySelector("#cart_items");

let append = (data) => {
  let discount = 0;
  discount = data.length * 99;

  data.forEach((el) => {
    let id = el.id;
    // console.log(id);
    let n = 1;

    let div = document.createElement("div");
    div.setAttribute("class", "items");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "div_align");

    let name = document.createElement("h4");
    name.innerText = el.name;

    let price = document.createElement("h4");
    price.innerText = `Rs. ${+el.price}.00/-`;
    total = total + +el.price;
    // console.log(total);
    div1.append(name, price);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div_align");

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let MRP = document.createElement("p");
    MRP.innerText = `Rs. ${+el.price + 99}.00/-`;
    totalMRP = totalMRP + (+el.price + 99);
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
    img1.addEventListener("click", () => {
      alert(`${el.name} will be removed from list`);
      del_cart_Data(id);
    });

    let div3l2 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = "Remove";
    p1.style.cursor = "pointer";
    div3l2.append(p1);
    p1.addEventListener("click", () => {
      alert(`${el.name} will be removed from list`);
      del_cart_Data(id);
      // window.location.reload();
      // location.reload();
    });

    div3l.append(div3l1, div3l2);

    let div3r = document.createElement("div");
    div3r.setAttribute("class", "add");

    let div3r1 = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://www.1mg.com/images/minus-cart.svg";
    img2.style.cursor = "pointer";
    div3r1.append(img2);

    img2.addEventListener("click", () => {
      n--;

      price.innerText = `Rs. ${+el.price * n}.00/-`;
      MRP.innerText = `Rs. ${(+el.price + 99) * n}.00/-`;

      // total = total - +el.price;
      // console.log(total);
      totalMRP = totalMRP - (+el.price + 99);
      // console.log(totalMRP);
      let totalmrp = document.getElementById("itm_total");
      totalmrp.innerText = `Rs. ${totalMRP}/-`;
      discount = discount - 99;
      let priceDiscount = document.getElementById("ttl_dsc1");
      priceDiscount.innerText = `- Rs. ${discount}/-`;

      let subTotal = document.getElementById("ttl");
      subTotal.innerText = `Rs. ${totalMRP - discount}`;

      let totalSaving = document.getElementById("ttl_dsc");
      totalSaving.innerText = `Rs. ${discount}/-`;
      let disc_msg = document.querySelector("#discount_msg div");
      if (data.length >= 1) {
        disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
        disc_msg.style.color = "green";
      }

      if (n >= 1) {
        p2.innerText = n;
      } else if (n == 0) {
        alert("do you really want to remove it?");
        alert(`${el.name} will be removed from list`);
        del_cart_Data(id);
      }
    });

    let div3r2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.innerText = n;
    div3r2.append(p2);

    let div3r3 = document.createElement("div");
    let img3 = document.createElement("img");
    img3.src = "https://www.1mg.com/images/plus-cart.svg";
    img3.style.cursor = "pointer";
    div3r3.append(img3);
    img3.addEventListener("click", () => {
      n++;
      price.innerText = `Rs. ${+el.price * n}.00/-`;
      // tot1 = (+el.price+99 )* n;
      // console.log(tot1);

      MRP.innerText = `Rs. ${(+el.price + 99) * n}.00/-`;
      total = total + +el.price * n;
      totalMRP = totalMRP + (+el.price + 99);
      // console.log("mrptot", totalMRP);
      discount = discount + 99;
      // console.log("ss", discount);

      let totalmrp = document.getElementById("itm_total");
      totalmrp.innerText = `Rs. ${totalMRP}/-`;

      let priceDiscount = document.getElementById("ttl_dsc1");
      priceDiscount.innerText = `- Rs. ${discount}/-`;

      let subTotal = document.getElementById("ttl");
      subTotal.innerText = `Rs. ${totalMRP - discount}`;

      let totalSaving = document.getElementById("ttl_dsc");
      totalSaving.innerText = `Rs. ${discount}/-`;

      let disc_msg = document.querySelector("#discount_msg div");
      if (data.length >= 1) {
        disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
        disc_msg.style.color = "green";
      }

      if (n <= 10) {
        p2.innerText = n;
      }
      if (n >= 11) {
        alert("You Can't Add More Than 10 Products of Same Type!");
      }
    });

    div3r.append(div3r1, div3r2, div3r3);

    div3.append(div3l, div3r);

    div.append(div1, div2, div3);
    cart_medicines.append(div);
  });
  // console.log(discount, total, totalMRP);
  // let totalmrp = document.getElementById("itm_total");
  // let priceDiscount = document.getElementById("ttl_dsc1");
  // let subTotal = document.getElementById("ttl");
  // let totalSaving = document.getElementById("ttl_dsc");
  // let disc_msg = document.querySelector("#discount_msg div");
  let totalmrp = document.getElementById("itm_total");
  totalmrp.innerText = `Rs. ${totalMRP}/-`;
  // console.log("async", totalMRP);

  // let discount = data.length * 99;
  // console.log("inside", discount);
  // console.log(data.length);

  let priceDiscount = document.getElementById("ttl_dsc1");
  priceDiscount.innerText = `- Rs. ${discount}/-`;

  let subTotal = document.getElementById("ttl");
  subTotal.innerText = `Rs. ${totalMRP - discount}`;

  let totalSaving = document.getElementById("ttl_dsc");
  totalSaving.innerText = `Rs. ${discount}/-`;

  let disc_msg = document.querySelector("#discount_msg div");
  if (data.length >= 1) {
    disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
    disc_msg.style.color = "green";
  }
  let coupon = document.querySelector("#promo button");
  coupon.addEventListener("click", () => {
    if (totalMRP > 2000) {
      let val = prompt("Enter Promo Code");
      // console.log(val);

      if (val == "BEHAPPY200") {
        discount = discount + 200;
        subTotal.innerText = `Rs. ${totalMRP - discount}`;
        priceDiscount.innerText = `- Rs. ${discount}/-`;
        totalSaving.innerText = `Rs. ${discount}/-`;
        disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
      } else {
        alert("Enter Valid Promo Code");
      }
    } else {
      alert("Your Cart Value of Total Items Should Be More Than Rs. 2000/-");
    }
  });
};
// let num;
async function get_Cart_Data() {
  let res = await fetch("https://6398c52b29930e2bb3c190fa.mockapi.io/sw/cart");
  let data = await res.json();
  append(data);

  // let totalmrp = document.getElementById("itm_total");
  // totalmrp.innerText = `Rs. ${totalMRP}/-`;
  // // console.log("async", totalMRP);

  // let discount = data.length * 99;
  // // console.log("inside", discount);
  // // console.log(data.length);

  // let priceDiscount = document.getElementById("ttl_dsc1");
  // priceDiscount.innerText = `- Rs. ${discount}/-`;

  // let subTotal = document.getElementById("ttl");
  // subTotal.innerText = `Rs. ${totalMRP - discount}`;

  // let totalSaving = document.getElementById("ttl_dsc");
  // totalSaving.innerText = `Rs. ${discount}/-`;

  // let disc_msg = document.querySelector("#discount_msg div");
  // if (data.length >= 1) {
  //   disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
  //   disc_msg.style.color = "green";
  // }

  // let coupon = document.querySelector("#promo button");
  // coupon.addEventListener("click", () => {
  //   if (totalMRP > 2000) {
  //     let val = prompt("Enter Promo Code");
  //     // console.log(val);

  //     if (val == "BEHAPPY200") {
  //       subTotal.innerText = `Rs. ${totalMRP - discount - 200}`;
  //       priceDiscount.innerText = `- Rs. ${discount + 200}/-`;
  //       totalSaving.innerText = `Rs. ${discount + 200}/-`;
  //       disc_msg.innerText = `Yay!! you just saved Rs. ${
  //         discount + 200
  //       }/- 🎉🎉`;
  //     } else {
  //       alert("Enter Valid Promo Code");
  //     }
  //   } else {
  //     alert("Your Cart Value of Total Items Should Be More Than Rs. 5000/-");
  //   }
  // });

  let payment = document.getElementById("chkout");
  payment.addEventListener("click", () => {
    window.location.href = "payment.html";
  });
}
get_Cart_Data();

async function del_cart_Data(id) {
  var x = await fetch(
    `https://6398c52b29930e2bb3c190fa.mockapi.io/sw/cart/${id}`,
    {
      method: "DELETE",
    }
  );
  document.location.reload();
}
