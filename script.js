
    let sendMessage=()=> {
        let input = document.querySelector("#messageInput");
        let chatBox = document.querySelector("#chatBox");

        if (input.value.trim() !== "") {
            let message = document.createElement("div");
            message.classList.add("message", "user-message");
            message.textContent = input.value;
            chatBox.appendChild(message);
            chatBox.scrollTop = chatBox.scrollHeight;
            input.value = "";
        }
    }

