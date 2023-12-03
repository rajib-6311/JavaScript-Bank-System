
// Login button event handler
const loginBtn = document.getElementById('login'); 

loginBtn = addEventListener('click', function() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');

    transactionArea.style.display = "block";
})

// Deposit button even handler
const depositBtn = document.getElementById('addDeposit');