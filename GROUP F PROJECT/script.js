let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
  login.classList.toggle('active');
  cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}



var swiper = new Swiper(".home-slider", {
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  grabCursor:true,
  loop: true,
  centeredSlides:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop: true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetwwen:20,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
});

let previewContainer = document.querySelector('.menu-preview-container');
let previewBox = previewContainer.querySelectorAll('.menu-preview');

document.querySelectorAll('.menu .box').forEach(menu =>{
  menu.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = menu.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('#close').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
    close.classList.remove('active');
  });
};
function showThankYou(){
  alert('Thanks For Your Feedback')
  document.getElementById("showThankYouButton").classList.add("clicked")
}
function loginForm() {
  event.preventDefault();


  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var dob = document.getElementById("dob").value;

  if (!dob || !username || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
  } else if (password !== confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
  } else {
      alert("you are registred successfully!");
     
  }
}



