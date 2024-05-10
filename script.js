document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const submitButton = form.querySelector("button[type='submit']");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        // If form is valid, submit data (you can replace this with your own submission logic)
        submitForm();
      }
    });
    
    
  
    function validateForm() {
      let isValid = true;
  
      // Reset validation styles and messages
      form.querySelectorAll(".is-invalid").forEach(element => {
        element.classList.remove("is-invalid");
      });
  
      // Personal Information validation
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        document.getElementById("name").classList.add("is-invalid");
        isValid = false;
      }
  
      const dob = document.getElementById("dob").value;
      if (dob === "") {
        document.getElementById("dob").classList.add("is-invalid");
        isValid = false;
      }
  
      const genderInputs = document.querySelectorAll("input[name='gender']");
      let genderSelected = false;
      genderInputs.forEach(input => {
        if (input.checked) {
          genderSelected = true;
        }
      });
      if (!genderSelected) {
        genderInputs.forEach(input => {
          input.classList.add("is-invalid");
        });
        isValid = false;
      }
  
      // Contact Details validation
      const email = document.getElementById("email").value.trim();
      if (email === "" || !isValidEmail(email)) {
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
      }
  
      const phone = document.getElementById("phone").value.trim();
      if (phone === "" || !isValidPhoneNumber(phone)) {
        document.getElementById("phone").classList.add("is-invalid");
        isValid = false;
      }
  
      const address = document.getElementById("address").value.trim();
      if (address === "") {
        document.getElementById("address").classList.add("is-invalid");
        isValid = false;
      }
  
      const city = document.getElementById("city").value.trim();
      if (city === "") {
        document.getElementById("city").classList.add("is-invalid");
        isValid = false;
      }
  
      const state = document.getElementById("state").value;
      if (state === null) {
        document.getElementById("state").classList.add("is-invalid");
        isValid = false;
      }
  
      const zip = document.getElementById("zip").value.trim();
      if (zip === "" || !isValidZipCode(zip)) {
        document.getElementById("zip").classList.add("is-invalid");
        isValid = false;
      }
  
      // Additional Information validation (optional fields)
      const eventPreferencesCheckboxes = document.querySelectorAll("input[type='checkbox'][name='eventPreference']");
     let eventPreferenceSelected = false;
    eventPreferencesCheckboxes.forEach(checkbox => {
     if (checkbox.checked) {
     eventPreferenceSelected = true;
     }
     });

    if (!eventPreferenceSelected) {
        eventPreferencesCheckboxes.forEach(checkbox => {
        checkbox.classList.add("is-invalid");
      });
      isValid = false;
  // Display validation message or handle validation logic here
       }

      // You can add validation for event preferences, dietary restrictions, and t-shirt size here
  
      return isValid;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhoneNumber(phone) {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      return phoneRegex.test(phone);
    }
  
    function isValidZipCode(zip) {
      const zipRegex = /^\d{5}$/;
      return zipRegex.test(zip);
    }
    function showToastmessage(){
      var toastmessage = document.getElementById("toastMessage");
      toastmessage.className = "show";
    }
    
    function submitForm() {
    alert("Your Registration was successful");
        
     form.reset();
    }
      
  });
  

