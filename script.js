// const tabs = document.querySelectorAll(".tab-btn");

// tabs.forEach((tab) => tab.addEventListener("click", () => tabClicked(tab)));

// const tabClicked = (tab) => {
//   tabs.forEach((tab) => tab.classList.remove("active"));
//   tab.classList.add("active");

//   const contents = document.querySelectorAll(".content");
//   contents.forEach((content) => content.classList.remove("show"));

//   const contentId = tab.getAttribute("content-id");
//   const content = document.getElementById(contentId);

//   content.classList.add("show");
// };

// const currentActiveTab = document.querySelector(".tab-btn.active");
// tabClicked(currentActiveTab);



//
const img_carrosel = document.querySelectorAll('.slides img');
const slides = document.querySelector('.slides');
const btn_carroselRight = document.querySelector('#btn-carrosel-right');

let slideAtual = 0

btn_carroselRight.addEventListener('click', ()=>{
  console.log('cliquei');
    slideAtual++;
    if (slideAtual >= img_carrosel.length){
      slideAtual = 0; 
    };
    let altCarrosel = -slideAtual * 100;
    slides.style.transform = `translateX(${altCarrosel}%)`;   
})

const btn_carroselLeft = document.querySelector("#btn-carrosel-left");

btn_carroselLeft.addEventListener('click', ()=>{
  slideAtual--;
  if (slideAtual < 0){
    slideAtual = img_carrosel.length - 1;
  };
  let altCarrosel = -slideAtual * 100;
  slides.style.transform = `translateX(${altCarrosel}%)`;

})
