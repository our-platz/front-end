const leftBar = document.querySelector(".left-bar");
const mainTexts = document.querySelector(".main-texts");
const mainTextsInner = document.querySelector(".main-texts-inner");
const rightBar = document.querySelector(".right-bar");

const leftSideBar = document.querySelector(".left-bar-outer");
const longChange = document.querySelector(".long-change");
const shortChange = document.querySelector(".short-change");
const eachBanners = document.querySelectorAll(".left-bar-inner .each-banner");
const eachBanner1 = document.querySelector(
  ".left-bar-inner .each-banner#dashboard"
);
const eachBanner2 = document.querySelector(
  ".left-bar-inner .each-banner#who-we-are"
);
const eachBanner3 = document.querySelector(
  ".left-bar-inner .each-banner#role-system"
);
const eachBanner4 = document.querySelector(
  ".left-bar-inner .each-banner#genesis"
);
const eachBanner5 = document.querySelector(
  ".left-bar-inner .each-banner#brands"
);
const eachBanner6 = document.querySelector(
  ".left-bar-inner .each-banner#reallife"
);
const eachBanner7 = document.querySelector(
  ".left-bar-inner .each-banner#platzverse"
);
const eachBanner8 = document.querySelector(
  ".left-bar-inner .each-banner#whitelist"
);
const eachBanner9 = document.querySelector(
  ".left-bar-inner .each-banner#contactus"
);
const bottomLogo = document.querySelector(".main-texts-logo-img-wrap img");
const bannerText1 = document.querySelector("#dashboard p");
const bannerText2 = document.querySelector("#who-we-are p");
const bannerText3 = document.querySelector("#role-system p");
const bannerText4 = document.querySelector("#genesis p");
const bannerText5 = document.querySelector("#brands p");
const bannerText6 = document.querySelector("#reallife p");
const bannerText7 = document.querySelector("#platzverse p");
const bannerText8 = document.querySelector("#whitelist p");
const bannerText9 = document.querySelector("#contactus p");

longChange.addEventListener("click", function () {
  leftSideBar.style.width = "100%";
  leftSideBar.style.minWidth = "22rem";
  // leftSideBar.style.marginLeft = "15rem";
  eachBanner1.style.width = "auto";
  eachBanner1.style.right = "0.5rem";
  eachBanner2.style.width = "auto";
  eachBanner2.style.right = "0.5rem";
  eachBanner3.style.width = "auto";
  eachBanner3.style.right = "0.5rem";
  eachBanner4.style.width = "auto";
  eachBanner4.style.right = "0.5rem";
  eachBanner5.style.width = "auto";
  eachBanner5.style.right = "0.5rem";
  eachBanner6.style.width = "auto";
  eachBanner6.style.right = "0.5rem";
  eachBanner7.style.width = "auto";
  eachBanner7.style.right = "0.5rem";
  eachBanner8.style.width = "auto";
  eachBanner8.style.right = "0.5rem";
  eachBanner9.style.width = "auto";
  eachBanner9.style.right = "0.5rem";
  longChange.style.display = "none";
  shortChange.style.display = "block";
  leftBar.style.width = "100%";
  rightBar.style.width = "0%";
  bottomLogo.style.display = "none";
  mainTexts.style.width = "0%";
  bannerText1.style.display = "inline";
  bannerText2.style.display = "inline";
  bannerText3.style.display = "inline";
  bannerText4.style.display = "inline";
  bannerText5.style.display = "inline";
  bannerText6.style.display = "inline";
  bannerText7.style.display = "inline";
  bannerText8.style.display = "inline";
  bannerText9.style.display = "inline";

  // mainTextsInner.style.width = "80rem";
});

shortChange.addEventListener("click", function () {
  leftSideBar.style.width = "5rem";
  leftSideBar.style.minWidth = "5rem";
  leftSideBar.style.marginLeft = "0";
  eachBanner1.style.width = "3.10rem";
  eachBanner2.style.width = "3.10rem";
  eachBanner3.style.width = "3.1rem";
  eachBanner4.style.width = "3.1rem";
  eachBanner5.style.width = "3.1rem";
  eachBanner6.style.width = "3.1rem";
  eachBanner7.style.width = "3.1rem";
  eachBanner8.style.width = "3.1rem";
  eachBanner9.style.width = "3.1rem";
  longChange.style.display = "block";
  shortChange.style.display = "none";
  leftBar.style.width = "12%";
  mainTexts.style.width = "76%";
  rightBar.style.width = "12%";
  mainTextsInner.style.width = "120rem";
  bottomLogo.style.display = "block";
  bannerText1.style.display = "none";
  bannerText2.style.display = "none";
  bannerText3.style.display = "none";
  bannerText4.style.display = "none";
  bannerText5.style.display = "none";
  bannerText6.style.display = "none";
  bannerText7.style.display = "none";
  bannerText8.style.display = "none";
  bannerText9.style.display = "none";
});

// MAIN BTN FOR AUTO SCROLL TO BOTTOM
$(".down-btn").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 750);
});
