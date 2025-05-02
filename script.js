function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chatBox");

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.textContent = "I'm just a static bot. You said: " + message;
  chatBox.appendChild(botMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
