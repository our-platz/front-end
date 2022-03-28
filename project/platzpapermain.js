const boxRight_1 = document.querySelector("#box1 .box-right");
const boxLeft_1 = document.querySelector("#box1 .box-left");

const mainTitle_1 = document.querySelector("#box1 .box-inner-main-title");
const mainTitle2_1 = document.querySelector("#box1 .box-inner-main-title2");
const mainTitle3_1 = document.querySelector("#box1 .box-inner-main-title3");
const subTitle_1 = document.querySelector("#box1 .box-inner-sub-title");
const logoImg_1 = document.querySelector("#box1 .logo-img");

const boxRight_2 = document.querySelector("#box2 .box-right");
const boxLeft_2 = document.querySelector("#box2 .box-left");

const mainTitle_2 = document.querySelector("#box2 .box-inner-main-title");
const mainTitle2_2 = document.querySelector("#box2 .box-inner-main-title2");
const mainTitle3_2 = document.querySelector("#box2 .box-inner-main-title3");
const subTitle_2 = document.querySelector("#box2 .box-inner-sub-title");
const logoImg_2 = document.querySelector("#box2 .logo-img");

const boxRight_3 = document.querySelector("#box3 .box-right");
const boxLeft_3 = document.querySelector("#box3 .box-left");

const mainTitle_3 = document.querySelector("#box3 .box-inner-main-title");
const mainTitle2_3 = document.querySelector("#box3 .box-inner-main-title2");
const mainTitle3_3 = document.querySelector("#box3 .box-inner-main-title3");
const subTitle_3 = document.querySelector("#box3 .box-inner-sub-title");
const logoImg_3 = document.querySelector("#box3 .logo-img");

const boxRight_4 = document.querySelector("#box4 .box-right");
const boxLeft_4 = document.querySelector("#box4 .box-left");

const mainTitle_4 = document.querySelector("#box4 .box-inner-main-title");
const mainTitle2_4 = document.querySelector("#box4 .box-inner-main-title2");
const mainTitle3_4 = document.querySelector("#box4 .box-inner-main-title3");
const subTitle_4 = document.querySelector("#box4 .box-inner-sub-title");
const logoImg_4 = document.querySelector("#box4 .logo-img");

const boxRight_5 = document.querySelector("#box5 .box-right");
const boxLeft_5 = document.querySelector("#box5 .box-left");

const mainTitle_5 = document.querySelector("#box5 .box-inner-main-title");
const mainTitle2_5 = document.querySelector("#box5 .box-inner-main-title2");
const mainTitle3_5 = document.querySelector("#box5 .box-inner-main-title3");
const subTitle_5 = document.querySelector("#box5 .box-inner-sub-title");
const logoImg_5 = document.querySelector("#box5 .logo-img");

const boxRight_6 = document.querySelector("#box6 .box-right");
const boxLeft_6 = document.querySelector("#box6 .box-left");

const mainTitle_6 = document.querySelector("#box6 .box-inner-main-title");
const mainTitle2_6 = document.querySelector("#box6 .box-inner-main-title2");
const mainTitle3_6 = document.querySelector("#box6 .box-inner-main-title3");
const subTitle_6 = document.querySelector("#box6 .box-inner-sub-title");
const logoImg_6 = document.querySelector("#box6 .logo-img");

const boxRight_7 = document.querySelector("#box7 .box-right");
const boxLeft_7 = document.querySelector("#box7 .box-left");

const mainTitle_7 = document.querySelector("#box7 .box-inner-main-title");
const mainTitle2_7 = document.querySelector("#box7 .box-inner-main-title2");
const mainTitle3_7 = document.querySelector("#box7 .box-inner-main-title3");
const subTitle_7 = document.querySelector("#box7 .box-inner-sub-title");
const logoImg_7 = document.querySelector("#box7 .logo-img");

const boxRight_8 = document.querySelector("#box8 .box-right");
const boxLeft_8 = document.querySelector("#box8 .box-left");

const mainTitle_8 = document.querySelector("#box8 .box-inner-main-title");
const mainTitle2_8 = document.querySelector("#box8 .box-inner-main-title2");
const mainTitle3_8 = document.querySelector("#box8 .box-inner-main-title3");
const subTitle_8 = document.querySelector("#box8 .box-inner-sub-title");
const logoImg_8 = document.querySelector("#box8 .logo-img");

const HIDDEN_CLASSNAME  = 'hidden';

boxLeft_1.addEventListener("mouseover", function () {
  boxRight_1.style.right = "-17rem"
  mainTitle_1.style.top="1rem"
  mainTitle2_1.style.opacity="1"
  mainTitle3_1.style.opacity="1"
  mainTitle2_1.style.left="12rem"
  mainTitle3_1.style.left="24rem"
  subTitle_1.classList.remove(HIDDEN_CLASSNAME);
  subTitle_1.style.opacity="1"
  logoImg_1.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_1.addEventListener("mouseout", function () {
  boxRight_1.style.right = "0"
  mainTitle_1.style.top="2rem"
  mainTitle2_1.style.opacity="0"
  mainTitle3_1.style.opacity="0"
  mainTitle2_1.style.left="1rem"
  mainTitle3_1.style.left="1rem"
  subTitle_1.classList.add(HIDDEN_CLASSNAME);
  subTitle_1.style.opacity="0"
  logoImg_1.classList.remove(HIDDEN_CLASSNAME);


})

boxLeft_2.addEventListener("mouseover", function () {
  boxRight_2.style.right = "-17rem"
  mainTitle_2.style.top="1rem"
  mainTitle2_2.style.opacity="1"
  mainTitle3_2.style.opacity="1"
  mainTitle2_2.style.left="12rem"
  mainTitle3_2.style.left="24rem"
  subTitle_2.classList.remove(HIDDEN_CLASSNAME);
  subTitle_2.style.opacity="1"
  logoImg_2.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_2.addEventListener("mouseout", function () {
  boxRight_2.style.right = "0"
  mainTitle_2.style.top="2rem"
  mainTitle2_2.style.opacity="0"
  mainTitle3_2.style.opacity="0"
  mainTitle2_2.style.left="1rem"
  mainTitle3_2.style.left="1rem"
  subTitle_2.classList.add(HIDDEN_CLASSNAME);
  subTitle_2.style.opacity="0"
  logoImg_2.classList.remove(HIDDEN_CLASSNAME);


})

boxLeft_3.addEventListener("mouseover", function () {
  boxRight_3.style.right = "-17rem"
  mainTitle_3.style.top="1rem"
  mainTitle2_3.style.opacity="1"
  mainTitle3_3.style.opacity="1"
  mainTitle2_3.style.left="12rem"
  mainTitle3_3.style.left="24rem"
  subTitle_3.classList.remove(HIDDEN_CLASSNAME);
  subTitle_3.style.opacity="1"
  logoImg_3.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_3.addEventListener("mouseout", function () {
  boxRight_3.style.right = "0"
  mainTitle_3.style.top="2rem"
  mainTitle2_3.style.opacity="0"
  mainTitle3_3.style.opacity="0"
  mainTitle2_3.style.left="1rem"
  mainTitle3_3.style.left="1rem"
  subTitle_3.classList.add(HIDDEN_CLASSNAME);
  subTitle_3.style.opacity="0"
  logoImg_3.classList.remove(HIDDEN_CLASSNAME);


})

boxLeft_4.addEventListener("mouseover", function () {
  boxRight_4.style.right = "-17rem"
  mainTitle_4.style.top="1rem"
  mainTitle2_4.style.opacity="1"
  mainTitle3_4.style.opacity="1"
  mainTitle2_4.style.left="12rem"
  mainTitle3_4.style.left="24rem"
  subTitle_4.classList.remove(HIDDEN_CLASSNAME);
  subTitle_4.style.opacity="1"
  logoImg_4.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_4.addEventListener("mouseout", function () {
  boxRight_4.style.right = "0"
  mainTitle_4.style.top="2rem"
  mainTitle2_4.style.opacity="0"
  mainTitle3_4.style.opacity="0"
  mainTitle2_4.style.left="1rem"
  mainTitle3_4.style.left="1rem"
  subTitle_4.classList.add(HIDDEN_CLASSNAME);
  subTitle_4.style.opacity="0"
  logoImg_4.classList.remove(HIDDEN_CLASSNAME);


})

boxLeft_5.addEventListener("mouseover", function () {
  boxRight_5.style.right = "-17rem"
  mainTitle_5.style.top="1rem"
  mainTitle2_5.style.opacity="1"
  mainTitle3_5.style.opacity="1"
  mainTitle2_5.style.left="12rem"
  mainTitle3_5.style.left="24rem"
  subTitle_5.classList.remove(HIDDEN_CLASSNAME);
  subTitle_5.style.opacity="1"
  logoImg_5.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_5.addEventListener("mouseout", function () {
  boxRight_5.style.right = "0"
  mainTitle_5.style.top="2rem"
  mainTitle2_5.style.opacity="0"
  mainTitle3_5.style.opacity="0"
  mainTitle2_5.style.left="1rem"
  mainTitle3_5.style.left="1rem"
  subTitle_5.classList.add(HIDDEN_CLASSNAME);
  subTitle_5.style.opacity="0"
  logoImg_5.classList.remove(HIDDEN_CLASSNAME);


})



boxLeft_6.addEventListener("mouseover", function () {
  boxRight_6.style.right = "-17rem"
  mainTitle_6.style.top="1rem"
  mainTitle2_6.style.opacity="1"
  mainTitle3_6.style.opacity="1"
  mainTitle2_6.style.left="12rem"
  mainTitle3_6.style.left="24rem"
  subTitle_6.classList.remove(HIDDEN_CLASSNAME);
  subTitle_6.style.opacity="1"
  logoImg_6.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_6.addEventListener("mouseout", function () {
  boxRight_6.style.right = "0"
  mainTitle_6.style.top="2rem"
  mainTitle2_6.style.opacity="0"
  mainTitle3_6.style.opacity="0"
  mainTitle2_6.style.left="1rem"
  mainTitle3_6.style.left="1rem"
  subTitle_6.classList.add(HIDDEN_CLASSNAME);
  subTitle_6.style.opacity="0"
  logoImg_6.classList.remove(HIDDEN_CLASSNAME);


})


boxLeft_7.addEventListener("mouseover", function () {
  boxRight_7.style.right = "-17rem"
  mainTitle_7.style.top="1rem"
  mainTitle2_7.style.opacity="1"
  mainTitle3_7.style.opacity="1"
  mainTitle2_7.style.left="12rem"
  mainTitle3_7.style.left="24rem"
  subTitle_7.classList.remove(HIDDEN_CLASSNAME);
  subTitle_7.style.opacity="1"
  logoImg_7.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_7.addEventListener("mouseout", function () {
  boxRight_7.style.right = "0"
  mainTitle_7.style.top="2rem"
  mainTitle2_7.style.opacity="0"
  mainTitle3_7.style.opacity="0"
  mainTitle2_7.style.left="1rem"
  mainTitle3_7.style.left="1rem"
  subTitle_7.classList.add(HIDDEN_CLASSNAME);
  subTitle_7.style.opacity="0"
  logoImg_7.classList.remove(HIDDEN_CLASSNAME);
})

boxLeft_8.addEventListener("mouseover", function () {
  boxRight_8.style.right = "-17rem"
  mainTitle_8.style.top="1rem"
  mainTitle2_8.style.opacity="1"
  mainTitle3_8.style.opacity="1"
  mainTitle2_8.style.left="12rem"
  mainTitle3_8.style.left="24rem"
  subTitle_8.classList.remove(HIDDEN_CLASSNAME);
  subTitle_8.style.opacity="1"
  logoImg_8.classList.add(HIDDEN_CLASSNAME);
})

boxLeft_8.addEventListener("mouseout", function () {
  boxRight_8.style.right = "0"
  mainTitle_8.style.top="2rem"
  mainTitle2_8.style.opacity="0"
  mainTitle3_8.style.opacity="0"
  mainTitle2_8.style.left="1rem"
  mainTitle3_8.style.left="1rem"
  subTitle_8.classList.add(HIDDEN_CLASSNAME);
  subTitle_8.style.opacity="0"
  logoImg_8.classList.remove(HIDDEN_CLASSNAME);
})

// MAIN BTN FOR UNDER-MAIN 
$(".scrollmore-btn").click(function(event){
  event.preventDefault(); 
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); 
});