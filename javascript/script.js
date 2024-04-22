isReversed = false;

//function for calculate button
function calculate(){
    celcius = document.getElementById('inputC');
    fahrenheit = document.getElementById('inputF');
    step = document.getElementById('step');
    if(isReversed == false){
        fahrenheit.value = (celcius.value * (9/5)) + 32;
        step.value = `${celcius.value}°C * (9/5) + 32 = ${fahrenheit.value}°F`;
    }else{
        celcius.value = (fahrenheit.value-32)*(5/9);
        step.value = `(${fahrenheit.value}°F - 32) * (5/9) = ${celcius.value}°C`;
    }
}

//function for reverse button
function disable(element){
    element.style.border = "solid red 0.2rem";
    element.setAttribute('readonly','readonly');
    element.placeholder = 'The conversion result will appear here';
}
function enable(element, name){
    element.style.border = "solid blue 0.2rem";
    element.removeAttribute('readonly');
    element.placeholder = `Enter the ${name} value here`;
}
function reverse(){
    celcius = document.getElementById('inputC');
    fahrenheit = document.getElementById('inputF');
    if(isReversed == false){
        disable(celcius);
        enable(fahrenheit,'fahrenheit');
        isReversed = true;
    }else{
        enable(celcius,'celcius');
        disable(fahrenheit);
        isReversed = false;
    }
}

//function for reset button
function reset(){
    document.getElementById('inputC').value = '';
    document.getElementById('inputF').value = '';
    document.getElementById('step').value = '';
}