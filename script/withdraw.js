
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-input');
    const withdrawInputStr = withdraw.value;
    const withdrawInput = parseFloat(withdrawInputStr);

    const previousWithdraw = document.getElementById('withdraw-show');
    const previousWithdrawShowStr = previousWithdraw.innerText;
    const previousWithdrawShow = parseFloat(previousWithdrawShowStr);
 
    const balance = document.getElementById('balance');
    const balanceShowStr = balance.innerText;
    const balanceShow = parseFloat(balanceShowStr);

    withdraw.value = ' ';

    if(withdrawInput > balanceShow)
    {
        alert('Insufficient Balance. Please input less than your current balance.');
        return;
    }

    const totalWithdraw = previousWithdrawShow + withdrawInput;
    previousWithdraw.innerText = totalWithdraw;

    const totalBalance = balanceShow - withdrawInput;
    balance.innerText = totalBalance;
})