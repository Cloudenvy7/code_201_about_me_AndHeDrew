'use strict'
// var foundCorrectAnswer = false;
// for(var i= 0; o < correctAnswers{7}.length; i++) {
//   if(correctAnswers[6][i] === answers[6]) {
//     foundCorrectAnswer = true;
//   }
// }



//day 4 code in class
// //have a string and going to check if its inside the arrary. 
// //"arrayName".includes



// var data = ['name', 'shoe size', 'cat\'s name'];
// for(var i = 0; i < data.length; i++) {
//   var answers = prompt('what is your' + data[i] + '?');
//   console.log(data[i] + 'is' + answers);
// };

function collectData(data) {
  var answer = prompt('what is your' + data + '?');
  console.log(data + 'is' + answer);
  return answer;
}
var data = ['name','shoe size', 'cat\'s name'];


function informationArray(infoArr) {
  for(var i = 0; i < infoArr.lengthl i++){
    collectData(infoArr[i]);
  }
}

collectData(data);