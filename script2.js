

// let chatList = document.querySelector('#chat-list');
// let messageInput = document.querySelector('#message-input');
// let sendButton = document.querySelector('#send-button');

// let messages = [];

// sendButton.addEventListener('click', function() {
//   let message = messageInput.value.trim();
//   if (message !== '') {
//     messages.push(message);
//     displayMessages();
//     messageInput.value = '';
//   }
// });

// let displayMessages=()=> {
//   chatList.innerHTML = '';
//   messages.forEach(function(message, index) {
//     let li = document.createElement('li');
//     li.textContent = message;
//     // chatList.appendChild(li);
//   });
// }


let chatList = document.querySelector('#chat-list');
let messageInput = document.querySelector('#message-input');
let sendButton = document.querySelector('#send-button');

let messages = [];

sendButton.addEventListener('click', function() {
  let message = messageInput.value.trim();
  if (message !== '') {
    messages.push(message);
    displayMessages();
    messageInput.value = '';
  }
});

let displayMessages=()=> {
  chatList.innerHTML = '';
  messages.forEach(function(message, index) {
    let li = document.createElement('li');
    li.textContent = message;
    // chatList.appendChild(li);
  });
}