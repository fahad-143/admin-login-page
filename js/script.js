



function login() {



  let fullName = document.getElementById("textArea").value;

  let email = document.getElementById("email").value;

  let passwordLogin = document.getElementById("passwordLogin").value;
  // if(!fullName || !email || !passwordLogin){
  //   Toastify({
  //     text: "This is a toast",
  //     duration: 3000,
  //     destination: "https://github.com/apvarun/toastify-js",
  //     newWindow: true,
  //     gravity: "top", // `top` or `bottom`
  //     position: "right", // `left`, `center` or `right`
  //     stopOnFocus: true, // Prevents dismissing of toast on hover
  //     style: {
  //       background: "linear-gradient(to right, #A40606, #D98324)",
  //     },
  //     onClick: function(){} // Callback after click
  //   }).showToast();
  // }
  if (!fullName || fullName.length < 5) {
    Toastify({
      text: "Enter a valid userName",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #A40606, #D98324)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return
  }
  else if (email !== "admin@gmail.com" || passwordLogin !== "12345") {
    Toastify({
      text: "Your Passowrd or Email is Incorrect",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #A40606, #D98324)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }



  else {
    window.location.href = "home.html"
  }
}


// home page


let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Sheikhupura", "Kashmir"]


// clear output

function clearOutput() {
  document.getElementById("output").innerText = ""
}

// clear input

function clearInput() {
  document.getElementById("inputField").value = ""
}

// print all cities


function printAllCities() {
  document.getElementById("output").innerText = "";
  for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>'
  }
}

// add your city


function addYourCity() {
  let newCity = document.getElementById("inputField").value;

  if (!newCity && newCity.length < 3) {
    Toastify({
      text: "Please Enter You City",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #A40606, #D98324)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return;
  }
  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === newCity) {
      cityFound = true;
      document.getElementById("output").innerHTML = '<span style="color:red">"' + newCity + '"</span>' + ' is already in  list'
    }
  }
  if (cityFound === false) {
    cities.push(newCity);
    document.getElementById("output").innerHTML = '<span style="color:green">"' + newCity + '"</span>' + ' has been successfully added into the list'
  }
}
