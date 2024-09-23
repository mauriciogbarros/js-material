const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = () => {
  let value = parseInt(number.value);
  if (checkInput(value)) {
    output.innerText = "";
    while (value >= 1000) {
      output.innerText += "M";
      value -= 1000;
    }
    if (value >= 900) {
      output.innerText += "CM";
      value -= 900;
    }
    if (value >= 500) {
      output.innerText += "D";
      while (value >= 600) {
        output.innerText += "C";
        value -= 100;
      }
      value -= 500;
    }
    if (value >= 400) {
      output.innerText += "CD";
      value -= 400;
    }
    while (value >= 100) {
      output.innerText += "C";
      value -= 100;
    }
    if (value >= 90) {
      output.innerText += "XC";
      value -= 90;
    }
    if (value >= 50) {
      output.innerText += "L";
      while (value >= 60) {
        output.innerText += "X"
        value -= 10;
      }
      value -= 50;
    }
    if (value >= 40) {
      output.innerText += "XL";
      value -= 40;
    }
    if (value >= 10) {
      output.innerText += "X";
      while (value >= 20) {
        output.innerText += "X"
        value -= 10;
      }
      value -= 10;
    }
    if (value == 9) {
      output.innerText += "IX";
    } else if (value >= 5) {
      output.innerText += "V";
      while (value >= 6) {
        output.innerText += "I";
        value -= 1;
      }
    } else if (value == 4) {
      output.innerText = "IV";
    } else {
      while (value >= 1) {
        output.innerText += "I";
        value -= 1;
      }
    }
  }
}

const checkInput = (value) => {
  if (value.length == 0 || isNaN(value)) {
    output.innerText = "Please enter a valid number"
    return false;
  } else if (value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  } else {
    return true;
  }
}

convertBtn.addEventListener("click", convert);