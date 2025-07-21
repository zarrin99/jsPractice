//will determined the checked status

const myCheckbox = document.getElementById("myCheckbox");

const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }
    
    if(visaBtn.checked){
        paymentResult.textContent = `you selected Visa as payment method`
    }
    else if (masterBtn.checked){
        paymentResult.textContent = `you selected Master Card as payment method`
    }
    else if(paymentBtn.checked) {
        paymentResult.textContent = `you selected Paypal as payment method`
    }
    
}