
// Login button event handler
const loginBtn = document.getElementById('login'); 

loginBtn.addEventListener('click', function () {
    
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

// Deposit button even handler
const depositBtn = document.getElementById('addDeposit');

depositBtn.addEventListener('click', function(){
    const depositAmounts = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmounts);

    //add currentDeposit
    const currentDeposits = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposits);
    const totalDeposit = depositNumber + currentDepositNumber;
     
    //Card value show
    document.getElementById('currentDeposit').innerText = totalDeposit;
})