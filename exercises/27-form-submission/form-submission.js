(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  // Write your answer here
  /**
   * Problem 1: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here

  //Target
  const oceanForm = document.querySelector("#handleThisForm");
  const oceanInput = document.querySelector("#oceanInput");
  const oceanDisplay = document.querySelector("#oceanOutput");

  //React to event
  oceanForm.addEventListener("sumbit", (e) => {
    e.preventDefault();

    //Do something - stop the form from refreeshing and display "No results for ___ found". 
    oceanDisplay.textContent = `No results for ${oceanInput.value} found`;
  });
  /**
   * Problem 2: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To see an example of what this looks like:
   * When the page loads, @see terms-on-load.png
   * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
   * @see terms-on-error.png
   * When the user checks the "I Agree ..." checkbox and click "Continue",
   * @see terms-on-success.png
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here

  //Target
  const terms = document.querySelector("#terms");
  const termsError = document.querySelector("#termsError");
  const termsSuccess = document.querySelector("#termsSucess");
  const checkbox = document.querySelector("#terms");

  // Do something

  const showTermsError = () => {
    //Makes "I agree to terms and conditions" read
    if (!terms.classList.contains("is-invalid")) {
      terms.classList.add("is-invalid");
    }

    //Hides sucess message
    if(!termsSuccess.classList.contains("hidden")) {
      termsSuccess.classList.add("hidden");
    }

    //shows error message
    if (termsError.classList.contains("hidden")) {
      termsError.classList.remove("hidden");
    }
  };

  const showTermsSuccess = ( => {
    //reverts "I agreebto the Terms and Conditions" 
    //back to origional color

    if (terms.classList.contains("is-invalid")){
      terms.classList.remove("is-invalid");
    }

    //Hides sucess message
    if (termsSuccess.classList.contains("hidden")) {
      termsSuccess.classList.remove("hidden");
    }

    if (!termsError.classList.contains("hidden")) {
      termsError.classList.add("hidden");
    }
  };

  //react to an event
  document.querySelector.apply("#termsForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkbox.checked) {
      showTermsSuccess();
     } else {
      showTermsError();
     }
  });
})();
