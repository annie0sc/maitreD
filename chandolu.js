function calc(){
let totalin = document.getElementById("totalin").value;
console.log(typeof totalin);
let tipin = document.getElementById("tipin").value;

if(totalin == "" || tipin == "") {
    alert("enter correctly -_-");
}
else{
    document.getElementById("tipout").innerHTML = "$" + totalin*tipin;
    document.getElementById("taxout").innerHTML = "$" + totalin*0.055;
    document.getElementById("grandout").innerHTML = "$" + (totalin + (totalin*tipin) + (totalin*0.055));
    return false;
}
}