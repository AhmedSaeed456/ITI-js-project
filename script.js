let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");
let name="";
function setPage() {
  name = getCookie("name");
  document.getElementById("name").innerText = name;
  if (name != "") {
    document.getElementById("login").style.opacity = "0%";
  }
}
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1 + "px";
  // header.style.top = value * 0.5 + 'px';
});

////////////side bar/////////////////////////
document.getElementById("cross").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

document.getElementById("name").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

//////////canvas animation/////////////////////

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const canvasMax = document.getElementById("maxCanvas");
const contextMax = canvasMax.getContext("2d");

const frameCount = 148;
const maxFrameCount = 45;

function currentFrame(index) {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;
}

function currentMaxFrame(index) {
  return `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/large/large_${index
    .toString()
    .padStart(4, "0")}.jpg`;
}

function preloadImages() {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }

  for (let i = 1; i < maxFrameCount; i++) {
    const imgMax = new Image();
    imgMax.src = currentMaxFrame(i);
  }
}

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const imgMax = new Image();
imgMax.src = currentMaxFrame(1);
canvasMax.width = 1004;
canvasMax.height = 1214;
imgMax.onload = function () {
  contextMax.drawImage(imgMax, 0, 0);
};

function updateImage(index) {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

function updateMaxImage(index) {
  imgMax.src = currentMaxFrame(index);
  contextMax.drawImage(imgMax, 0, 0);
}

function positiveOnly(res) {
  if (res > 0) {
    return res;
  } else {
    return 1;
  }
}

function changeCanvas() {
  const speed = 1.5;
  const maxScroll = canvas.offsetTop + canvas.clientHeight;
  const scrollFraction = Math.min(
    (window.scrollY - canvas.offsetTop / 2) / maxScroll,
    1
  );
  const frameIndex = positiveOnly(
    Math.min(Math.ceil(scrollFraction * frameCount * speed), frameCount)
  );

  console.log("frame index: " + frameIndex);
  updateImage(frameIndex);
}

function changeMaxCanvas() {
  const speed = 3;
  const maxScroll = canvasMax.offsetTop + canvasMax.clientHeight;
  const scrollFraction = Math.min(
    (window.scrollY - canvasMax.offsetTop) / maxScroll,
    1
  );
  const frameIndex = positiveOnly(
    Math.min(Math.ceil(scrollFraction * maxFrameCount * speed), maxFrameCount)
  );

  console.log("MAX frame index: " + frameIndex);
  updateMaxImage(frameIndex);
}

window.addEventListener("scroll", function () {
  changeCanvas();
  changeMaxCanvas();
  // parallaxMountain();
});
preloadImages();

//------------------------------------------------------------------

function che(index) {
 
    console.log(index);
    let card_img = card[index].children[0].children[0].src;
    setCoockie("cardImg", card_img, 1);

    let card_type = card[index].children[1].children[0].innerText;
    setCoockie("cardType", card_type, 1);

    let card_price = prices[index];
    setCoockie("cardPrice", card_price, 1);

    addToCart(index);
  
}

var counn = 1,
  total = 0,
  price = 0,
  itemID;
function addToCart(car) {
  itemID = car;

  //create (a)
  let selectedElement = document.createElement("a");
  counn += 1;
  selectedElement.href = "#";
  selectedElement.setAttribute("id", "item"+itemID);

  //create div and add in a
  let divv = document.createElement("div");
  divv.setAttribute("class", "item");
  selectedElement.append(divv);

  //create img and add in div
  let img_src = getCookie("cardImg");
  let img = document.createElement("img");
  img.setAttribute("src", img_src);
  divv.append(img);

  let list = document.createElement("ul");
  list.setAttribute("class", "info");
  let li1 = document.createElement("li");
  li1.innerText = getCookie("cardType");
  list.append(li1);

  let li2 = document.createElement("li");
  li2.innerText = getCookie("cardPrice");
  price = parseFloat(prices[itemID]);
 
  total += price * noOfitemsInput[itemID].value;

  
  document.getElementById("total").innerText = total.toFixed(2);

  list.append(li2);
  divv.append(list);

  //number of items
  let priceNum = document.createElement('p');
  priceNum.setAttribute('id', 'NUMS');
  priceNum.innerText = "x"+noOfitemsInput[itemID].value;
  selectedElement.append(priceNum);

  //create cross and add to a
  let cross = document.createElement("p");
  cross.setAttribute("id", "inner-cross");
  cross.setAttribute("class", "fa-sharp fa-solid fa-xmark");
  cross.setAttribute("onclick", "convert(" + itemID + ")");

  selectedElement.append(cross);
  //append in sidebar
  let cartItems = document.getElementById("link");
  cartItems.append(selectedElement);
}

//to convert from "number" to card+"number" so we can change the value
function convert(i) {
  console.log("id is : " + addButton[i].value);
  addButton[i].value = "Add to Cart";
  addButton[i].style.background = "#22a39f";
  //  document.getElementById(i).value = "Add to Cart";
  //  document.getElementById(i).style.background = "#22a39f";
  console.log("i"+i);
  del(i);
}

//modify2

function del(item) {
  var items = document.getElementById("item"+item);
  price = parseFloat(prices[item]);
  
  total -= price * noOfitemsInput[item].value;
  document.getElementById("total").innerText =Math.abs(total.toFixed(2));

  items.remove();
}

/* --------------- header scrolling behavior --------------- */
window.onscroll = function () {
  if (window.scrollY > 40) {
    header.classList.add("headerBack");
  } else {
    header.classList.remove("headerBack");
  }
};
