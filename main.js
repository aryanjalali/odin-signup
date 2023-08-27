const userPassword = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-password");
const createAccount = document.querySelector(".create-account-btn");
const form = document.querySelector("#main-form");
const userPasswordLabel = document.querySelector("label[for='user-password']");
const firstName = document.querySelector("#first-name");
const userEmail = document.querySelector("#user-email");
const userPhone = document.querySelector("#user-phone");

createAccount.addEventListener("click", submitForm);
userPassword.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validatePassword);

function submitForm (e){
     if (userPassword.value !== confirmPassword.value) {
          alert("Passwords must match");
          e.preventDefault();
          return;
     }

     if (userPassword.value === "") {
          alert("Must have a password");
          e.preventDefault();
          return;
     }

     if (firstName.value === "" || firstName.checkValidity() == false) {
          alert("Please enter a first name")
          e.preventDefault();
          return;
     }

     if (userEmail.value === "" && userPhone.value === "") {
          alert("Please enter either an email or a phone number")
          e.preventDefault();
          return;
     }

     alert("Account created successfully!");
     form.reset();
}

function validatePassword (e){
     e.preventDefault();

     if (userPassword.value == confirmPassword.value){
          userPassword.setCustomValidity("");
          confirmPassword.setCustomValidity("");

          // Remove error statement if it exists
          if (document.querySelector("#password-error")){
               document.querySelector("#password-error").remove();
          }
     } else {
          userPassword.setCustomValidity("Invalid field");
          confirmPassword.setCustomValidity("Invalid field");

          // Add an error statement if one is not already included
          if (!document.querySelector("#password-error")){
               const errorMsg = document.createElement("div");
               errorMsg.innerText = "* Passwords do not match";
               errorMsg.setAttribute("id","password-error");
               errorMsg.classList.add("error-message");
               userPassword.after(errorMsg);
          }
     }
}