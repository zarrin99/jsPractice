const submit = document.getElementById('submit');

const result = document.getElementById('result');


submit.onclick = function (){
    min = document.getElementById('minValue').value;
    max = document.getElementById('maxValue').value;
    //console.log(min);
    //console.log(max);

    let random;
    random = Math.floor( (Math.random() * max) + min );
    
    result.textContent = random;
    
}
