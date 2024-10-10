// Function for SignUp Information 
function SignUp() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    if (email === "" || password === "") {
        alert("Email or password cannot be empty");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Email already exists. Please use another email.");
        return;
    }

    localStorage.setItem(email, password);
    alert("Sign up successful! Redirecting to login page.");
    window.location = './login.html';
}

//Function For Login Page
function Login() {
    let email = document.getElementById("LoginEmail").value;
    let password = document.getElementById("LoginPassword").value;

    if (email === "" || password === "") {
        alert("Email or password cannot be empty");
        return;
    }

    let storedPassword = localStorage.getItem(email);

    if (storedPassword === null) {
        alert("Email not found. Please sign up first.");
    } else if (storedPassword === password) {
        alert("Login successful!");
        // Redirect to the dashboard or any other page
    } else {
        alert("Incorrect password. Please try again.");
    }
    window.location = './transaction.html';
}



// Function for transaction
let balance = 0;

function isNumber(value) {
  const regex = /^[0-9]*\.?[0-9]+$/; 
  return regex.test(value);
}

function deposit() {
  const amount = document.getElementById('deposit-amount').value;

  if (isNumber(amount) && amount > 0) {
    balance += parseFloat(amount);
    updateBalance();
    alert('Deposit successful!');
    document.getElementById('deposit-amount').value = ''; 
  } else {
    alert('Please enter a valid positive amount.');
  }
}

function withdraw() {
  const amount = document.getElementById('withdraw-amount').value;

  if (isNumber(amount) && amount > 0 && amount <= balance) {
    balance -= parseFloat(amount);
    updateBalance();
    alert('Withdrawal successful!');
    document.getElementById('withdraw-amount').value = ''; 
  } else {
    alert('Please enter a valid amount or insufficient funds.'); // Moved outside the if condition
  }
}

function updateBalance() {
  document.getElementById('balance-amount').textContent = balance.toFixed(2); // Changed to textContent
}
