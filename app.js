function handleDeposite(){
    var convertedInputValue=getConvertedValue("deposite-input","value");
    
    var convertedDepositeAmount=getConvertedValue("deposite-amount","innerText");
    var sum=convertedInputValue+convertedDepositeAmount;
    setInnerText("deposite-amount",sum);
    var convertedTotalAmount = getConvertedValue("total-amount","innerText");
    var totalSum = convertedTotalAmount+convertedInputValue;
    setInnerText("total-amount",totalSum);
    document.getElementById("deposite-input").value="";

}
function getConvertedValue(id,element){
if (element=="innerText"){
    var value = document.getElementById(id).innerText;
    return parseFloat(value);
}
else{
    var value=document.getElementById(id).value;

return parseFloat(value);
}

}

function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
function handleWithdraw(){
    var convertedInputWithdraw = getConvertedValue("withdraw-input","value");
    var convertedWithdrawAmount = getConvertedValue("withdraw-amount","innerText");

    var sum = convertedInputWithdraw+convertedWithdrawAmount;

    setInnerText("withdraw-amount",sum);
    var convertedTotalAmount = getConvertedValue("total-amount","innerText");
    var totalSum = convertedTotalAmount-convertedInputWithdraw;
    setInnerText("total-amount",totalSum);
    document.getElementById("withdraw-input").value="";

}
