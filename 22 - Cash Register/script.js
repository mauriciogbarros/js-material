let price = 1.87;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let currency = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}


const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const reset = () => {
  changeDue.textContent = "";
}

const checkCashInput = () => {
  return !isNaN(cash.value) && cash.value.length > 0;
}

const getChange = () => {
  const cashValue = Math.floor(parseFloat(cash.value) * 100);
  return cashValue - price;
}

const getTotalCid = (change) => {
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    const currency_i = Math.floor(currency[cid[i][0]] * 100);
    if (currency_i <= change) {
      total += Math.floor(cid[i][1] * 100);
    }
  }

  return total;
}

const getChangeDueStr = (change) => {
  let changeStr = "Status: ";

  const totalCid = getTotalCid(change);
  if (totalCid < change) {
    changeStr += "INSUFFICIENT_FUNDS";
  } else {
    let changeStr_i = totalCid > change ? "OPEN" : "CLOSED";

    for (let i = cid.length - 1; i >= 0; i--) {
      let change_i = 0;
      let cid_i = Math.floor(cid[i][1] * 100);
      const currency_i = Math.floor(currency[cid[i][0]] * 100);

      while (cid_i > 0 && change >= currency_i) {
        change_i += currency_i;
        cid_i -= currency_i;
        change -= currency_i;
      }

      if (change_i > 0) {
        changeStr_i += ` ${cid[i][0]}: $${(change_i / 100).toFixed(2)}`;
        cid[i][1] = (cid_i / 100).toFixed(2);
      }
    }
    changeStr += change === 0 ? changeStr_i : "INSUFFICIENT_FUNDS";
  }

  return changeStr;
}

const setChangeDue = () => {
  let change = getChange();
  if (change < 0) {
    alert("Customer does not have enough money to purchase the item");
  } else if (change === 0) {
    changeDue.textContent += "No change due - customer paid with exact cash";
  } else {
    changeDue.textContent += getChangeDueStr(change);
  }
}

purchaseBtn.addEventListener("click", () => {
  reset();
  if (checkCashInput()) {
    price = Math.floor(price * 100);
    setChangeDue();
  } else {
    alert("Enter a number");
    return;
  }
});