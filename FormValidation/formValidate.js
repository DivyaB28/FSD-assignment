const formElem = document.getElementsByTagName("form")[0];

toValidateInput("forUserName", "userNameDiv");
toValidateInput("forEmailAddress", "userEmailId");
toValidateInput("forPassword", "userPassword");
toValidateInput("forPhoneNumber", "userPhoneNumber");

function removeElement(id) {
  var elem = document.getElementsByClassName(id);
  console.log([...elem]);
  return [...elem].map((n) => n && n.remove());
}

// storing all the regex in object
const REGEXOBJ = {
  forUserName: "^[a-zA-Z0-9_]+$",
  forEmailAddress: "^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+.[a-zA-Z]{2,4}$",
  forPassword:
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
  forPhoneNumber: {
    india: "^\\d{10}$",
    usa: "^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$",
  },
};

//Custom logic to add country code
let selectCountry = document.getElementById("forSelectCountry");
let spanCountryCode = document.getElementsByClassName("input-group-text")[0];
let inputPhoneNumber = document.getElementById("forPhoneNumber");
let countryOpted;
selectCountry.addEventListener("change", (event) => {
  countryOpted = event.target.value;
  switch (countryOpted) {
    case "india":
      spanCountryCode.innerHTML = `+91`;
      inputPhoneNumber.placeholder = "Enter your phone number";
      break;
    case "usa":
      spanCountryCode.innerHTML = `+1`;
      inputPhoneNumber.placeholder = "(123) 456-7890";
      break;
    default:
      spanCountryCode.innerHTML = `+`;
      inputPhoneNumber.placeholder = "Enter your phone number";
      break;
  }
});

function toValidateInput(idName, parentDivId) {
  const inputElem = document.getElementById(idName);

  inputElem.addEventListener("change", (event) => {
    const fieldName = event.target.name;
    let regexString = "";
    //Getting the regex based on idName
    if (idName === "forPhoneNumber" && countryOpted !== "") {
      regexString = REGEXOBJ[idName][countryOpted];
    } else if (idName === "forPhoneNumber" && countryOpted === "") {
      regexString = REGEXOBJ[idName]["india"];
    } else {
      regexString = REGEXOBJ[idName];
    }

    let regex = new RegExp(regexString);

    //creating div to show error texts
    let div = document.createElement("div");
    let parentDivElem = document.getElementById(parentDivId);

    if (!regex.test(event.target.value)) {
      div.setAttribute("id", "errorMessage");
      div.setAttribute("class", "text-danger");
      div.innerHTML = `Please provide a valid ${fieldName}`;

      parentDivElem.append(div);
    } else {
      //removing error message if regex test passes
      removeElement("text-danger");
    }
  });
}

//
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElem);

  //   for (let key of formData.entries()) {
  //     console.log(`${key[0]} : ${key[1]}`);
  //   }

  const result = Object.fromEntries(formData);
  let payload = JSON.stringify(result);

  console.log(payload);
});
