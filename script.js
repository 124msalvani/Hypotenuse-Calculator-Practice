let a;
let b;
let c;
/*
a= window.prompt("Enter Side A");
a= Number(a);
b= window.prompt("Enter Side B");
b= Number(b);
c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("SideC:", c);
*/

document.getElementById("submitButton").onclick = function() {
  a = document.getElementById("aTextBox").value;
  a = Number(a);
  b = document.getElementById("bTextBox").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("cLabel").innerHTML = "Side C:" + c;
  console.log("SideC:", c);
}