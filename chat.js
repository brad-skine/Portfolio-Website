const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        messageElement.scrollIntoView({ behavior: 'smooth' });
        messageInput.value = '';
        messageInput.focus();
    }
}           





