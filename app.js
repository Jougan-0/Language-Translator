var btnTranslate=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txt-input");
var OutputDiv=document.querySelector("#Output");
var Url="https://api.funtranslations.com/translate/minion.json";


function ServerUrl(text){
    
    return (Url+"?"+"text="+text);
}

function errorHandler(error){
    console.log(error);
    alert(ServerUrl(txtInput.value));
}

function callback(){
    var inputText=txtInput.value;

    fetch(ServerUrl(inputText)).then(response=>response.json()).then(json=>{
        var translateText=json.contents.translated;
        OutputDiv.innerText= translateText;
    }).catch(errorHandler)

    
}

btnTranslate.addEventListener("click",callback);

