
    // Write all necessery JS here
    let all_products = document.querySelector("#all_products");
    let url = "https://6398c52b29930e2bb3c190fa.mockapi.io/sw/products";
    let arr = [];

    async function getData(){
      try {
        let res = await fetch(url);
        let data = await res.json();
        arr = data;
        displayCards(data);
      } catch (error) {
        console.log(error)
      }
    }
    getData();

    function displayCards(apidata){
        all_products.innerHTML = " ";
      apidata.forEach((el)=>{
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.avatar;
        let product_name = document.createElement("h4");
        product_name.textContent = el.name;
        let description = document.createElement("p");
        description.textContent = el.description;
        let price = document.createElement("h3");
        price.textContent = `₹${el.price}`
        let capital = document.createElement("p");
        capital.textContent = el.id;

        div.append(image,product_name,description,price);
        all_products.append(div);
      })
    }

    // filter the cards based on region
    document.getElementById("filter_region").addEventListener("change",function(){
      if(filter_region.value == "") return displayCards(arr);
      else{
        displayCards(arr.filter((element)=>{
          return element.region == filter_region.value;
        }))
      }
    })

    // sort the cards

    function sort_pop(){
      let select  = document.getElementById("sort_population").value;
      console.log(select);
      if(select == "asc"){
        arr.sort((a,b)=> a.population - b.population);
        displayCards(arr);
      }
      if(select == "desc"){
        arr.sort((a,b)=> b.population - a.population);
        displayCards(arr);
      }
    
    }

    
