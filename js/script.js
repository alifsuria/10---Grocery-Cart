$(document).ready(function() {
  const button = document.querySelectorAll(".filter");
  const storeItem = document.querySelectorAll(".store-item");

  button.forEach(function(buttons) {
    buttons.addEventListener("click", function(e) {
      e.preventDefault();

      const filter = e.target.dataset.filter;
      storeItem.forEach(function(item) {
        if (filter == "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });

  const searchBox = $(".search-bar");

  $(searchBox).on("keyup", function() {
    const searchFilter = $(this)
      .val()
      .toLowerCase()
      .trim();
    //filter item
    var i = $(".store-item").filter(function() {
      //toggle display
      $(this).toggle(
        // find the value that as been keyup and indexOF return -1 if  not found so make it all the value input is bigger that -1 until a weird input
        $(this)
          .text()
          .toLowerCase()
          .indexOf(searchFilter) > -1
      );
    });
  });

  $("#cart-info").click(function() {
    $(".cart").toggleClass("show-cart");
  });
});

// (function(){
//   const cartIcon = document.querySelectorAll(".card-img-top-icon");
//   cartIcon.forEach(function(icon) {
//     icon.addEventListener("click", function(event) {
//       if (event.target.parentElement.classList.contains("card-img-top-icon")) {
//         //find the full path of img
//         let fullPath = event.target.parentElement.previousElementSibling.src;
//         //shorten the  img path
//         let pos = fullPath.indexOf("img");

//         let partPath = fullPath.slice(pos);
//         //create and object for the new item
//           console.log(partPath);

//         const item = {};

//         item.img = `${ partPath }`;

//         let itemName =event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

//         item.name = itemName;

//         let price =event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

//         let finalPrice = price.slice(1).trim();

//         item.price = finalPrice;
//         //create a new div when event trigger
//         const cartItem = document.createElement("div");

//         cartItem.classList.add("cart-item","d-flex","justify-content-between","text-capitalize","my-3");

//         cartItem.innerHTML = `<img src="${item.img}" class="img-cart-info" alt=""><div class="ml-3">
//           <p class="mb-0">${item.name}</p><span>$</span><span class="cart-item-price">${item.price}</span></div>
//           <div class="d-flex justify-content-center align-items-center"><a href="#" class="btn"><i class="fa fa-trash text-danger" aria-hidden="true"></i></a>
//                               </div>`;
//         //select cart

//         const cart = document.querySelector(".cart");
//         const total = document.querySelector(".cart-total-container");

//         cart.insertBefore(cartItem, total);
//         alert("Item Has Been Added To Cart");

//         showTotal();
//       }
//     });
//   });

//   function showTotal() {
//     const total = [];
//     const item12 = document.querySelectorAll(".cart-item-price");
//     item12.forEach(function(item) {
//       total.push(parseFloat(item.textContent));
//     });
//     console.log(total)
//     const totalMoney = total.reduce(function(total,item){
//       total += item;
//       return total
//     },0);

//     const finalMoney = totalMoney.toFixed(2)

//     document.querySelector(".total-amount").textContent = finalMoney;
//     document.querySelector(".item-total").textContent = finalMoney;
//     document.querySelector(".item-count").textContent = total.length
//   }

// })();

(function() {
  const cartIcon = document.querySelectorAll(".card-img-top-icon");

  cartIcon.forEach(function(icon) {
    icon.addEventListener("click", function(event) {
      if(event.target.parentElement.classList.contains("card-img-top-icon")){
        //find the full path of the img
        let fullPathSrc =event.target.parentElement.previousElementSibling.src
        console.log(fullPathSrc);
        //shorten the src path
        let srcPos =fullPathSrc.indexOf("img");
        let shortenPathSrc= fullPathSrc.slice(srcPos)
        console.log(shortenPathSrc);
        //create an object
        const item = {};
        //add path into object item
        item.img =`${shortenPathSrc}`;
        //find the text for the item name
        let itemName = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        console.log(itemName);
        //add itemName into object item
        item.name =itemName;
        //find the text price of the item
        let price =event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        //get rid of the dollar
        let finalPrice =price.slice(1).trim()
        console.log(finalPrice)
        //add price into object item
        item.price =finalPrice;
        console.log(item);
        //create div
        const div =document.createElement("div");
        div.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3")

        div.innerHTML =`<img src="${item.img}" class="img-cart-info" alt="">
        <div>
            <p class="mb-0">${item.name}</p>
            <span>$</span>
            <span class="cart-item-price">${item.price}</span>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <a href="#" class="btn"><i class="fa fa-trash text-danger" aria-hidden="true"></i></a>
        </div>`;
        const cartItem = document.querySelector(".cart");
        const total = document.querySelector(".cart-total-container")
        cartItem.insertBefore(div,total);
        alert("Item has been added to the cart");

        showTotal();
      }
    });
  });

function showTotal(){
  const total = [];
  const item = document.querySelectorAll(".cart-item-price");
  item.forEach(function(item){
    total.push(parseFloat(item.textContent));
  })
console.log(total)

  const totalMoney = total.reduce(function(total,item){
    total += item;
    return total
  },0)
//decimal point
const finalMoney =totalMoney.toFixed(2)

document.querySelector(".item-total").textContent =finalMoney;
document.querySelector(".total-amount").textContent = finalMoney;
document.querySelector(".item-count").textContent =total.length
  }
})();





//=============================My VERSION for filter===============
//using jqeury click
// $(".all-button").click(function() {
//   $(
//     "[data-item='sweet'],[data-item='cake'],[data-item='doughnut'],[data-item='cupcake']"
//   ).css("display", "block");
// });
// $(".cake-button").click(function() {
//   $("[data-item='sweet'],[data-item='doughnut'],[data-item='cupcake']").css(
//     "display",
//     "none"
//   );
//   $("[data-item='cake']").css("display", "block");
// });
// $(".cupcake-button").click(function() {
//   $("[data-item='cupcake']").css("display", "block");
//   $("[data-item='sweet'],[data-item='cake'],[data-item='doughnut']").css(
//     "display",
//     "none"
//   );
// });
// $(".sweet-button").click(function() {
//   $("[data-item='sweet']").css("display", "block");
//   $("[data-item='cupcake'],[data-item='cake'],[data-item='doughnut']").css(
//     "display",
//     "none"
//   );
// });
// $(".doughnut-button").click(function() {
//   $("[data-item='doughnut']").css("display", "block");
//   $("[data-item='sweet'],[data-item='cake'],[data-item='cupcake']").css(
//     "display",
//     "none"
//   );
// });
