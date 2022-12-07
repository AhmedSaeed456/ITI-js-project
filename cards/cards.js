let items = [
  pencil,
  airtags,
  magSafeCharger,
  magSafeCase,
  magSafeWallet,
  powerAdapter,
  mac,
  ipad,
  iphone,
  airpods,
  watch,
  cover,
  iphone13,
  ipadMini,
  airTag,
  mug,
  keyboard,
  appleNikeWatch,
];

var card = document.querySelectorAll(".card"),
  cardName = document.querySelectorAll(".cardName"),
  cardDescription = document.querySelectorAll(".cardDescription"),
  productPic = document.querySelectorAll(".productPic"),
  addButton = document.querySelectorAll(".addButton"),
  incrementalButtons = document.querySelectorAll(".increment"),
  decrementalButtons = document.querySelectorAll(".decrement"),
  noOfitemsInput = document.querySelectorAll(".noOfItems"),
  prices = [];
/* ------  Entering data in the card          ------------- */

for (let index = 0; index < items.length; index++) {
  cardName[index].innerText = items[index][0];
  cardDescription[index].innerHTML =
    items[index][1].split(". ").join("<br>") +
    "<br> <br> Price: " +
    items[index][3];
  prices[index] = items[index][3];//to get array of prices
  productPic[index].src = items[index][2];
}

/* ------  toggling  Add/Remove  to cart button      ---------- */
for (let index = 0; index < addButton.length; index++) {
  addButton[index].onclick = function () {
    if (name != "") {
      if (addButton[index].value == "Add to Cart") { (addButton[index].style.background = "red"); addButton[index].value = "Remove"; che(index); }
      else { addButton[index].value = "Add to Cart"; (addButton[index].style.background = "#22a39f"); del(index); console.log('index' + index); };
    }
    else {
      alert("please,login first...");
    }
  };
}
/* --------------------- incremental buttons functionality */

for (let index = 0; index < incrementalButtons.length; index++) {
  incrementalButtons[index].onclick = function () {
    if (noOfitemsInput[index].value < 10) noOfitemsInput[index].value++;
  };
}

/* --------------------- decremental buttons functionality */

for (let index = 0; index < decrementalButtons.length; index++) {
  decrementalButtons[index].onclick = function () {
    if (noOfitemsInput[index].value > 1) noOfitemsInput[index].value--;
  };
}


let slideIndex = 1;
showSlides(slideIndex);

// for next  and prev arrow 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//for dot button
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// to show card and dot
function showSlides(n) {
  let i;
  let cards = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  
  // to not display cards
  for (i = 0; i < 6; i++) {
    cards[i].style.display = "none";  
  }
     
  if (n > 6) {slideIndex = 1}  
  if (n < 1) {slideIndex = 4} 
    
  // to return the dot to not active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 

  // for active dot
  if(slideIndex == 1)
  {
    dots[slideIndex-1].className += " active";
    
    cards[slideIndex-1].style.display = "inline";  
    cards[slideIndex].style.display = "inline";  
    cards[slideIndex+1].style.display = "inline";  
    
    }  else if(slideIndex == 4) {
     
    dots[slideIndex/2-1].className += " active";

    cards[slideIndex-1].style.display = "inline";  
    cards[slideIndex].style.display = "inline";  
    cards[slideIndex+1].style.display = "inline"; 
  
  }
}