var btnTranslate=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txt-input");

console.log(txtInput);

function callback(){
    console.log("Clicked!");
    console.log("input",txtInput.value);
}

btnTranslate.addEventListener("click",callback);

