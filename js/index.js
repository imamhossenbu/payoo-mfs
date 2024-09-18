document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
    


    if(phone === '016' && pin === '1234'){
        window.location.href='./home.html';
    }
    else{
        alert('Phone Number Or Pin Number Invalid!')
    }

})