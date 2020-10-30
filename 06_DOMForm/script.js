const app = {
   
   submitButton: document.getElementById('submit'),

   initialize: function() {
     console.log(app.submitButton);
     app.submitButton.addEventListener('click', app.checkEntries);
   }, 

   // This function returns if a text field is empty.
   validateText: function(text){
      if (text === '') return false;
      else return true;
   },

   // This function returns if a email is an email or not.
   validateEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   },

   // This function loads the success message.
   loadMessage: function() {

      // Create the loader.
      const loaderDiv = document.createElement("div");
      loaderDiv.classList.add('loader');
      // Dispplay the loader.
      document.getElementById('inputs').replaceChild(loaderDiv, app.submitButton);

      // This function changes the loader div into the succes message.
      const successMessage = () => {
         loaderDiv.classList.remove('loader');
         loaderDiv.classList.add('success-message');
         loaderDiv.innerHTML += "Thanks for signing up!";
      }

      // Replace the loader after 3 seconds.
      setTimeout(successMessage, 3000);
   },

   // This function checks all the entries. It is called when the submit button is clicked.
   checkEntries: function() {

      // These are the input fields to be checked.
      const inputs = {
         firstName: document.getElementById('firstName'),
         lastName: document.getElementById('lastName'),
         email: document.getElementById('email'),
         checkBox: document.getElementById('checkBox'),
      };

      // These are the checks that will be applied to each input field.
      const checks = {
         checkFirstName: app.validateText(inputs.firstName.value),
         checkLastName: app.validateText(inputs.lastName.value),
         checkEmail: app.validateEmail(inputs.email.value),
         checkCheckBox: inputs.checkBox.checked
      };   

      // This function changes the border color to red of a filed which does not pass the provided check.
      const changeBorder = (check, elem) => {
         if(!check) elem.classList.add('redBorder');
         else elem.classList.remove('redBorder');
      }
      
      // Run change border on every input
      changeBorder(checks.checkFirstName, inputs.firstName);
      changeBorder(checks.checkLastName, inputs.lastName);
      changeBorder(checks.checkEmail, inputs.email);
      changeBorder(checks.checkCheckBox, inputs.checkBox);

      // Define boolean to check if everything passes.
      const done = checks.checkCheckBox && checks.checkEmail && checks.checkFirstName && checks.checkLastName;

      // If everything passes, load the success message.
      if(done) app.loadMessage();
      else console.log('not done');
   }
}

app.initialize();



