(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */

  const quote = document.querySelector("#quote");

  const getData = async () => {
    
    const response = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
  
    quote.textContent = response.data[0];

    //error handling
  } catch (err) {

    console.error(err);

    quote.textContent = "Sorry, an unexprected error has occurred";
  }
};
  const button = document.querySelector("button");
  button.addEventListener("click", getData);
);