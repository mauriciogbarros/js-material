const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex = /^((1(\s|)|)([0-9]{3}(-|\s)[0-9]{3}|\([0-9]{3}\)(\s|)[0-9]{3})(-|\s)[0-9]{4}|[0-9]{10})$/;


checkBtn.addEventListener("click", () => {
  const userInput = document.getElementById("user-input");
  const resultsDiv = document.getElementById("results-div");

  let result = "";
  resultsDiv.innerHTML = "";

  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }
  result += regex.test(userInput.value) ?
    "Valid " :
    "Invalid ";
  result += `US number: ${userInput.value}`;
  resultsDiv.innerHTML = `<p>${result}</p>`;
});

clearBtn.addEventListener("click", () => document.getElementById("results-div").innerHTML = "");