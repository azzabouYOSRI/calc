function suppr(input){
    input.value="0";
}
function effacer(input)
{
    input.value= input.value.substring(0,input.value.length - 1);
}
function one(x){
    frm.display.value += x;
}
function racine(){
    document.frm.display.value=Math.sqrt(document.frm.display.value);
}
function exp(){

    document.frm.display.value=Math.exp(document.frm.display.value);
}
function ln(){
    document.frm.display.value=Math.log(document.frm.display.value);
}
function power(){
    document.frm.display.value=Math.pow(document.frm.display.value,2);
}
function calcul(input)
{/*
    if(input.value.includes("%"))
        input.value=eval(input.value.substring(0,input.value.length - 1)/100)
    else input.value= eval(input.value)
*/
    document.frm.display.value=eval(document.frm.display.value);
}