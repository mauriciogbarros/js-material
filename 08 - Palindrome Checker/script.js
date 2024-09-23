const checkBtn = document.getElementById("check-btn");

const checkBtnClick = () => {
  const textInput = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (checkTextLength(textInput)) {
    if (checkPalindrome(cleanText(textInput))) {
      result.innerHTML = `<strong>${textInput}</strong> is a palindrome`;
    } else {
      result.innerHTML = `<strong>${textInput}</strong> is not a palindrome`;
    }
  } else {
    alert("Please input a value");
  }
}

const checkTextLength = (text) => {
  return text.length > 0;
}

// Clean text and return text without punctuation, case, and spacing.
const cleanText = (text) => {
  let clean = text
    // Remove punctuation
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    // Remove spaces
    .replaceAll(' ', '')
    // Change all to lower case
    .toLowerCase();
  return clean;
}

const checkPalindrome = (text) => {
  if (text.length == 1) {
    return true;
  } else {
    let isPalindrome = true;
    let i = 0;
    while(i <= Math.floor(text.length / 2) && isPalindrome) {
      if (text[i] !== text[text.length - 1 - i]) {
        isPalindrome = false;
      }
      i++;
    }

    return isPalindrome;
  }
}

checkBtn.addEventListener("click", checkBtnClick);
