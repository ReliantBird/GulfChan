document.querySelector("#chat form").addEventListener("submit", function(event) {
  event.preventDefault();
  var input = event.target.elements.input;
  var messages = document.querySelector("#chat #messages");
  var message = document.createElement("li");
  message.textContent = "You: " + input.value;
  messages.appendChild(message);
  input.value = "";
});
