let image = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png"]


    let i = 0;

    function slideshow() {
        document.getElementById("images").src = image[i];
        i++;
        if (i > image.length - 1) {
            i = 0;
        }
    }
    setInterval(slideshow, 5000)


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    async function products(){
      try {
        let res = await fetch ("https://6398c52b29930e2bb3c190fa.mockapi.io/sw/products")

        let data = await res.json()
        display(data)
        console.log(data)
      } catch (error) {
        alert(error)
      }
    }

    products()

    function products_data(imgUrl,name,desc,price){
      return `
      <div id="pro_cards">
      <div class="pro_images"> <a href="./products.html"><img class="images_of" src="${imgUrl}" alt=""></a> </div>
        <div class="pro_desc">
            <div class="pro_name"><strong>${name}</strong></div>
            <div class="description">${desc}</div>
            <div class="pro_price"><strong>&#8377;${price}</strong></div>
        </div>
        </div> 
      `
    }

    

    function display(data){
      let pro_card = document.querySelector("#products");
      pro_card.innerHTML=`
      
      ${data.map((item)=>{
        let images = item.avatar;
        let name = item.name.substring(0,20)+"...";
        let desc = item.description.substring(0,20)+"...";
        let price = item.price

        return products_data(images,name,desc,price)
      }).join("")}
    
      `
    }