document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountStr = depositInput.value;
    const newDepositInput = parseFloat(newDepositAmountStr);

    const depositText = document.getElementById('deposit-text');
    const previousAmountShowStr = depositText.innerText;
    const previousAmountShow = parseFloat(previousAmountShowStr);

    const totalDeposit = previousAmountShow + newDepositInput;
     depositText.innerText = totalDeposit;
    
     const balance = document.getElementById('balance');
     const balanceShowStr = balance.innerText;
     const balanceShow = parseFloat(balanceShowStr);

     const totalBalance = balanceShow + newDepositInput;
     balance.innerText = totalBalance;
     depositInput.value = ' ';
})