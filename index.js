const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";

const passwordEl = document.getElementById("password1-el");
const anotherPasswordEl = document.getElementById("password2-el");
const lengthEl = document.getElementById("length-el");

function generateRandomPassword(length, useNumbers, useSymbols) {
  let chars = letters;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

function generatePasswords() {
  const length = parseInt(lengthEl.value);
  if (isNaN(length) || length < 12 || length > 64) {
    alert("Please enter a password length between 4 and 64.");
    return;
  }

  const useNumbers = document.getElementById("include-numbers").checked;
  const useSymbols = document.getElementById("include-symbols").checked;

  passwordEl.value = generateRandomPassword(length, useNumbers, useSymbols);
  anotherPasswordEl.value = generateRandomPassword(length, useNumbers, useSymbols);
}

function copyPassword(id) {
  const passwordInput = document.getElementById(id);
  const password = passwordInput.value;

  if (!password) {
    alert("No password to copy!");
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy password.");
    });
}
