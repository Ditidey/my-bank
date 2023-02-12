
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-input');
    const withdrawInputStr = withdraw.value;
    const withdrawInput = parseFloat(withdrawInputStr);

    const previousWithdraw = document.getElementById('withdraw-show');
    const previousWithdrawShowStr = previousWithdraw.innerText;
    const previousWithdrawShow = parseFloat(previousWithdrawShowStr);

    const totalWithdraw = previousWithdrawShow + withdrawInput;
    previousWithdraw.innerText = totalWithdraw;
    
    const balance = document.getElementById('balance');
    const balanceShowStr = balance.innerText;
    const balanceShow = parseFloat(balanceShowStr);

    const totalBalance = balanceShow - withdrawInput;
    balance.innerText = totalBalance;

    withdraw.value = ' ';
})