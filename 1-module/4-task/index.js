function checkSpam(str) {
  str = str.toLowerCase(str);

let result = str.includes('1xBet') || str.includes('XXX') ? true : false;

return result;
}
