// console.log(FILE.JS)

// LOG IN jS 

document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const passwordField = document.getElementById('user-password')
  const password = passwordField.value;
  if (email === 'sohrabuddint@gmail.com' && password === 'secret') {
    window.location.href = 'index.html';
  }
  else {
    alert('invalid password');
  }
})

// JS for Deposit, balance and Withdraw Section 

document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');

  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositField.value;

  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString
  );

  const newbalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newbalanceTotal;
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = "";
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  const balanceElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newBalanceTotal;

})

// ========-------------===============
//get the input value
// function getInputFeildValueById(inputId) {
//   const inputValue = document.getElementById(inputId);
//   const inputValueString = inputValue.value;
//   const newInputValue = parseFloat(inputValueString);
//   inputValue.value = '';
//   return newInputValue;
// }

// //get the element vlaue
// function getElementValueById(elementId) {
//   const elementIdValue = document.getElementById(elementId);
//   const elementValueString = elementIdValue.innerText;
//   const elementValue = parseFloat(elementValueString);
//   return elementValue;
// }

// //reset the element valuej
// function setTextElementValueById(elementId, newValue) {
//   const newElementvalue = document.getElementById(elementId);
//   newElementvalue.innerText = newValue;
// } 