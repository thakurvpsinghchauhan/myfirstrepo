var txtInput=document.querySelector("#txt-input");
var txtButton=document.querySelector('#txt-button');
var outputDiv=document.querySelector('#output-div');

txtButton.addEventListener('click',clickHandler);
function clickHandler(){
    inputText=txtInput.value;
    text= inputText+" welcome";
    outputDiv.innerHTML=text;
}