const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showNextQuote() {
    quotes.forEach((quote, index) => {
        quote.classList.remove('visible');
    });

    quotes[currentQuote].classList.add('visible');
    currentQuote = (currentQuote + 1) % quotes.length;
}


quotes[currentQuote].classList.add('visible');

setInterval(showNextQuote, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const chatboxInput = document.querySelector(".chatbox-input");
    const chatMessageInput = document.getElementById("chat-message");
    const messagesContainer = document.querySelector(".messages");

    chatboxInput.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = chatMessageInput.value.trim();

        if (message) {
            // Append the user's message to the messages container
            const userMessage = document.createElement("div");
            userMessage.textContent = message;
            userMessage.classList.add("user-message");
            messagesContainer.appendChild(userMessage);

            // Clear the input field
            chatMessageInput.value = "";

            // Scroll to the bottom of the messages container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Send the message to the server
            fetch('submit_feedback.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `message=${encodeURIComponent(message)}`,
            }).then(response => response.text())
              .then(data => console.log(data))
              .catch(error => console.error('Error:', error));
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const chatboxInput = document.querySelector(".chatbox-input");
    const chatMessageInput = document.getElementById("chat-message");
    const messagesContainer = document.querySelector(".messages");

    chatboxInput.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = chatMessageInput.value.trim();

        if (message) {
            // Append the user's message to the messages container
            const userMessage = document.createElement("div");
            userMessage.textContent = message;
            userMessage.classList.add("user-message");
            messagesContainer.appendChild(userMessage);

            // Clear the input field
            chatMessageInput.value = "";

            // Scroll to the bottom of the messages container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Placeholder for sending the message to a server or handling it further
            // For example, you could use an AJAX call to send the feedback to your backend
        }
    });
});

