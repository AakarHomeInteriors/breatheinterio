


function showSidebar() {
         const sidebar = document.querySelector('.sidebar')
         sidebar.style.display = 'flex'
}

function hideSidebar() {
         const sidebar = document.querySelector('.sidebar')
         sidebar.style.display = 'none'
}
// -----------------Nav Side Bar Hide and Show Java Script End-----------------

// -----------------Scroll Behaviour Start-----------------


let scrollcontainer = document.querySelector(".projects-images");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel", (evt) => {
         evt.preventDefault();
         scrollcontainer.scrollLeft += evt.deltaY;
         scrollcontainer.style.scrollBehaviour = "auto";

});

nextBtn.addEventListener("click", () => {
         scrollcontainer.style.scrollBehaviour = "smooth";
         scrollcontainer.scrollLeft += 900;

});
backBtn.addEventListener("click", () => {
         scrollcontainer.style.scrollBehaviour = "smooth";
         scrollcontainer.scrollLeft -= 900;

});

// -----------------Scroll Behaviour End----------------- 
// -----------------JQuery Scroll Behaviour Start-----------------

jQuery(document).ready(function ($) {

         $('.slider-img').on('click', function () {
                  $('.slider-img').removeClass('active');
                  $(this).addClass('active');
         })
});

// -----------------JQuery Scroll Behaviour End-----------------

