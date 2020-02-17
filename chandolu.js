function calc(){
let totalin = parseFloat(document.getElementById("totalin").value);
console.log(typeof totalin);
let tipin = parseFloat(document.getElementById("tipin").value);

if(totalin == "" || tipin == "") {
    alert("-_- ENTER CORRECTLT *_*");
}
else{
    document.getElementById("tipout").innerHTML = "$" + totalin*(tipin/100.0);
    document.getElementById("taxout").innerHTML = 5.50 + "%";
    document.getElementById("grandout").innerHTML = "$" + (totalin + (totalin*(tipin/100)) + (totalin*0.055));
    return false;
}
}