
// Variables
let numberPhone = document.getElementById("phone");
let textField = document.getElementById("message");
let sendButton = document.getElementById("sendSms");
let notify = document.getElementById("success");

// Event send message with enter
textField.addEventListener('keyup', function(e) {
  e.preventDefault();
  if ((e.keyCode || e.charCode) === 13) {
    if (validation(numberPhone) && validation(textField)) sendSms(e);
    else console.log("Ingrese un número y/o mensaje");
  }

}, false);

// Event send message with button
sendButton.addEventListener('click', sendSms, false);

// Validations
function validation(input) {
  if (input.value !== '') return true;
  else return false;
}

// Function send message
function sendSms() {
  console.log('send')
  let number = numberPhone.value.replace(/\D/g,''); // Remove all non numeric chars
  let text = textField.value;

  // Post
  fetch('/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({number: number, text: text})
  })
  .then(function(res){ console.log(res) })
  .catch(function(error){ console.log(error)});
}