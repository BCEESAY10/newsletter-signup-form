// Script
const mainImage = document.getElementById('main-image');
const submitButton = document.getElementById('submit-btn');
const dismissButton = document.getElementById('dismiss-btn');
const errorMessage = document.getElementById('error-msg');
const inputField = document.getElementById('email');

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


// Form Validation
const validators = "!~`/,><][{}()\|-_*".split("");

function submitForm(e){
    e.preventDefault();
    if(inputField.value === "" || validators.some(char => inputField.value.includes(char)) || !inputField.value.includes('@') ){
        errorMessage.innerText = "Valid email required";
        inputField.classList.add('error');
    }else{
        errorMessage.innerText = "";
        inputField.classList.remove('error');
    }
}

submitButton.addEventListener('click', submitForm);
