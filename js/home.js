document.getElementById('btn-add').
addEventListener('click',function(event){
    event.preventDefault();
    let amountAdd = document.getElementById('amount-add').value;
    const pinAdd = document.getElementById('pin-add').value;

    if(pinAdd === '1234'){
        let balance = document.getElementById('balance').innerText;
        balance = parseFloat(balance);
        amountAdd = parseFloat(amountAdd);
        const newAmount = balance + amountAdd;

        document.getElementById('balance').innerText = newAmount;
    }
    else{
        alert('Invalid Pin');
    }

})





document.getElementById('btn-out').
addEventListener('click',function(event){
    event.preventDefault();
    let amountOut = document.getElementById('amount-out').value;
    const pinOut = document.getElementById('pin-out').value;

    if(pinOut === '1234'){
        let balance = document.getElementById('balance').innerText;
        balance = parseFloat(balance);
        amountOut = parseFloat(amountOut);
        const newAmount = balance - amountOut;

        document.getElementById('balance').innerText = newAmount;
    }
    else{
        alert('Invalid Pin');
    }

})




// Event listener for "Cash Out" button
document.getElementById('cash-out').addEventListener('click', function () {
    console.log('Cash out clicked'); // Debugging
    document.getElementById('moneyOut').classList.remove('hidden');  // Show moneyOut section
    document.getElementById('moneyAdd').classList.add('hidden');     // Hide moneyAdd section
});

// Event listener for "Add Money" button
document.getElementById('add-money').addEventListener('click', function () {
    console.log('Add money clicked'); // Debugging
    document.getElementById('moneyAdd').classList.remove('hidden');  // Show moneyAdd section
    document.getElementById('moneyOut').classList.add('hidden');     // Hide moneyOut section
});

