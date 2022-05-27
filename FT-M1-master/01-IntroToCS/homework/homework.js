'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let total = 0;
  for(let i =0; i < num.length; i++){
    total = total + num[i] * Math.pow(2, num.length -1 -i); 
  }
  return total;
}

function DecimalABinario(num) {
  // tu codigo aca
  let str= "" ;
  while (num>0){
    let resto=num%2;
    str=resto+str;
    num=Math.floor(num/2)
  }
  return str;
 }



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}