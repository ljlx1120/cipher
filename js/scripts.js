var userSentence = prompt("Please type your sentence here");


 function info(getinfo){
  var letter1 = getinfo.charAt(0);
  var letter2 = getinfo.charAt(getinfo.length-1);
  uppercaseletter1 = letter1.toUpperCase();
  uppercaseletter2 = letter2.toUpperCase();
};

console.log(info(userSentence));
