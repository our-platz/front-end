let rollingData = [
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
  "NFT.",
  "Metaverse.",
  "Real-Life.",
]; // 롤링할 데이터를 넣으면 됩니다 갯수 제한 없어요

let timer = 1500; // 롤링되는 주기 입니다 (1000 => 1초)

let first = document.getElementById("first"),
  second = document.getElementById("second"),
  third = document.getElementById("third");
let move = 2;
let dataCnt = 1;
let listCnt = 1;

//위 선언은 따로 완전히 수정하지 않는 한 조정할 필요는 없습니다.
first.children[0].innerHTML = rollingData[0];

setInterval(() => {
  if (move == 2) {
    first.classList.remove("card_sliding");
    first.classList.add("card_sliding_after");

    second.classList.remove("card_sliding_after");
    second.classList.add("card_sliding");

    third.classList.remove("card_sliding_after");
    third.classList.remove("card_sliding");

    move = 0;
  } else if (move == 1) {
    first.classList.remove("card_sliding_after");
    first.classList.add("card_sliding");

    second.classList.remove("card_sliding_after");
    second.classList.remove("card_sliding");

    third.classList.remove("card_sliding");
    third.classList.add("card_sliding_after");

    move = 2;
  } else if (move == 0) {
    first.classList.remove("card_sliding_after");
    first.classList.remove("card_sliding");

    second.classList.remove("card_sliding");
    second.classList.add("card_sliding_after");

    third.classList.remove("card_sliding_after");
    third.classList.add("card_sliding");

    move = 1;
  }

  if (dataCnt < rollingData.length - 1) {
    document.getElementById("rolling_box").children[
      listCnt
    ].children[0].innerHTML = rollingData[dataCnt];
    dataCnt++;
  } else if (dataCnt == rollingData.length - 1) {
    document.getElementById("rolling_box").children[
      listCnt
    ].children[0].innerHTML = rollingData[dataCnt];
    dataCnt = 0;
  }

  if (listCnt < 2) {
    listCnt++;
  } else if (listCnt == 2) {
    listCnt = 0;
  }

  console.log(listCnt);
}, timer);

window.addEventListener("DOMContentLoaded", function () {
  let roller = document.querySelector(".roller");
  roller.id = "roller1";

  let clone = roller.cloneNode(true);
  clone.id = "roller2";
  document.querySelector(".wrap").appendChild(clone);

  document.querySelector("#roller1").style.left = "0px";
  document.querySelector("#roller2").style.left =
    document.querySelector(".roller ul").offsetWidth + "px";

  roller.classList.add("original");
  clone.classList.add("clone");
});

// MAIN BTN FOR UNDER-MAIN
$(".scrollmore-btn").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});

$(".scroll-to-roles").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});

// NAVBAR HOVER EFFECTS

const navbarFirst = document.querySelector(".community-main-btn");

const navbarFirstImg = document.querySelector(".community-main-btn img");

const navbarSubFirst = document.querySelector(".community-each-wrap ul");

navbarFirst.addEventListener("click", function () {
  if (navbarSubFirst.style.display === "none") {
    navbarSubFirst.style.display = "block";
    navbarFirstImg.src = "./css/outline_expand_less_black_24dp.png";
  } else {
    navbarSubFirst.style.display = "none";
    navbarFirstImg.src = "./css/outline_expand_more_black_24dp.png";
  }
});

// ROADMAP CLICK EFFECT
const roadmapBtnFrist = document.querySelector("#roadmap-btn-first");
const roadmapBtnSecond = document.querySelector("#roadmap-btn-second");
const roadmapBtnThird = document.querySelector("#roadmap-btn-third");
const roadmapOnBtn = document.querySelector(".on-btn");

const roadmapMainFirst = document.querySelector(".roadmap-main-content-ul");

roadmapBtnFrist.addEventListener("click", function () {
  roadmapOnBtn.style.left = "0.6rem";
  roadmapMainFirst.style.left = "0rem";
});
roadmapBtnSecond.addEventListener("click", function () {
  roadmapOnBtn.style.left = "17.5rem";
  roadmapMainFirst.style.left = "-45rem";
});
roadmapBtnThird.addEventListener("click", function () {
  roadmapOnBtn.style.left = "34.1rem";
  roadmapMainFirst.style.left = "-90rem";
});
