
const caesar = function (string, shiftNum) {
  const mod = (n, m) => ((n % m) + m) % m;
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {      
      let codeCalc = string.charCodeAt(i) + shiftNum;      
      let newCode = mod((codeCalc - 97), 26) + 97;
      let newChar = String.fromCharCode(newCode);
      output += newChar;    
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      let codeCalc = string.charCodeAt(i) + shiftNum;      
      let newCode = mod((codeCalc - 65), 26) + 65;      
      let newChar = String.fromCharCode(newCode);      
      output += newChar;    
    } else {
      output += string.charAt(i);
    }
  }
  return output;
}


export default caesar