document.addEventListener('DOMContentLoaded', () => {
    console.log ("DOM Loaded now");
    const generateBtn = document.getElementById('btn-key-gen');
    const generatedKeyDisplay = document.getElementById('text-key-gen');
    const inputDisplay = document.getElementById('input-display');
    const message = document.getElementById('message');
    const keypadButtons = document.querySelectorAll('.keyboard-btn');
    const submitBtn = document.getElementById('btn-submit');
    const clearBtn = document.getElementById('btn-clear');
    const backspaceBtn = document.getElementById('btn-backspace');

    let generatedKey = '';
    let inputPassword = '';

    function generateKey() {
        console.log ("Generate Key pressed!");
        generatedKey = Math.floor(100000 + Math.random() * 900000).toString();
        generatedKeyDisplay.textContent = generatedKey;
        inputPassword = '';
        inputDisplay.textContent = inputPassword;
        message.textContent = '';
    }

    function handleKeypadClick(event) {
        if (inputPassword.length < 6) {
            inputPassword += event.target.textContent;
            inputDisplay.textContent = inputPassword;
        }
    }

    function handleBackspace() {
        inputPassword = inputPassword.slice(0, -1);
        inputDisplay.textContent = inputPassword;
    }

    function handleClear() {
        inputPassword = '';
        inputDisplay.textContent = inputPassword;
    }

    function handleSubmit() {
        if (inputPassword === generatedKey) {
            message.textContent = 'Password Matched with the key! 🎉';
            message.style.color = 'green';
        } else {
            message.textContent = 'Password and Key Match failed ❌';
            message.style.color = 'red';
        }
    }

    generateBtn.addEventListener('click', generateKey);

    keypadButtons.forEach(button => {
        if (button.id !== 'btn-backspace' && button.id !== 'btn-clear' && button.id !== 'btn-submit') {
            button.addEventListener('click', handleKeypadClick);
        }
    });

    backspaceBtn.addEventListener('click', handleBackspace);
    clearBtn.addEventListener('click', handleClear);
    submitBtn.addEventListener('click', handleSubmit);
});