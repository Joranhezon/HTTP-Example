/* Imported libraries */
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = "https://instabuy.com.br/apiv2_2/";
const myRequest = new XMLHttpRequest();
var responseText;

myRequest.onreadystatechange = function() {
  // Action to be performed when a response is made;
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = responseText;
      console.log(responseText);
    }
};

/* Stablishes connection to api */
myRequest.open("GET", url, true);
myRequest.send();
