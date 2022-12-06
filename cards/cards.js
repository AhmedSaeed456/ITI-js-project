let items = [
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
    if (addButton[index].value == "Add to Cart") { (addButton[index].style.background = "red"); addButton[index].value = "Remove"; che(index); }
    else { addButton[index].value = "Add to Cart"; (addButton[index].style.background = "#22a39f"); del(index); };
    
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
