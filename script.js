// Script

const mainImage = document.getElementById('main-image');

function updateImage() {
  if (window.innerWidth >= 1200) {
    mainImage.src = 'assets/images/illustration-sign-up-desktop.svg';
  } else if(window.innerWidth >= 768 && window.innerWidth < 1200){
    mainImage.src = 'assets/images/illustration-sign-up-tablet.svg';
  }
   else {
    mainImage.src = 'assets/images/illustration-sign-up-mobile.svg';
  }
}

updateImage();

// Run it whenever the window resizes
window.addEventListener('resize', updateImage);
