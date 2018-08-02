'use strict';
//this is prompt is storing the users name'

var userName = prompt('whats your name?');
console.log('the user name is: ' + userName);
alert('Hey ' + userName + ' welcome to the M.O.R.E. House, I just have a few questions to ask you');

// We want the response from prompt to go into the function

function yesNo(response) {
  if (response === 'yes' || response === 'y') {
    console.log('the user said ' + response + ' to question: ' + mainQuestions[i]);
    alert('you said yes thats awesome :}');
  }
  else if (response === 'no' || response === 'n') {
    alert('this is unfortunate, but we can move on');
    console.log('the user said ' + response + ' to question: ' + mainQuestions[i]);
  } else {
    alert('naw brrah, you need to use yes or no, try again');
  }
}

var build = 'Do you wanna be a maker?';
var future = 'Have you been inspired to create an Afrofuture?';
var mathematics = 'Do you see how tech, art, and music fall in the same mathmatics?';
var scifi = 'Is your goal to make sci-fi just science?';
var sixMonths = 'Can you dedicate 6 months to learning, making, and teaching More?';

var mainQuestions = [build, future, mathematics, scifi, sixMonths];

for (var i = 0; i < mainQuestions.length; i++) {
  var testing = prompt(mainQuestions[i]).toLowerCase();
  yesNo(testing);
}

// //It's an about page for the Moorhouse
// This is code that ask the user to put in their name and then
// answer a few questions.
// each question gets put into a console.log that "explains what was asked"

// taking the information about about my work experince and education
// and apply it in a <ul> (unordered list)


// At the end of the game the user should know something more about me.
// take inspiration from other about me pages (the quiz button to start the game )

// want a quiz <button> that will start the game at the bottom

// five questiont that can cover what I do who I am
// or what the comapny does and type of people that im looking for

// 6 quesiton that is takes a number, they can guess high or low and alert() them if they
//too high or two low

var guess = 4;
var sixGuess = false;

function projectNumber(buildGuess) {
  if (parseInt(buildGuess) === 100) {
    alert('yes' + buildGuess + ' projects are what we are building');
    console.log('they got it right, we have at least ' + buildGuess + ' ready to be built at the MakerHouse');
    sixGuess = true;
    return sixGuess;
  } else if (parseInt(buildGuess) < 100) {
    alert('no this is too low, try again ' + 'you have ' + (guess - 1) + ' more tries');
  } else {
    alert('no this is too high, try again ' + 'you have ' + (guess - 1) + ' more tries');
  }
  console.log('they used all 4 guess and didnt get 100 as an answer to how many builds do we have at the MakerHouse');
}

for (guess = 4; guess > 0; guess--) {
  if (sixGuess === false) {
    var numberQuestion = prompt('How many projects do you think the Moorhouse has in its que?');
    projectNumber(numberQuestion);
  } else {
    break;
  }
}

// 7 question is about * possible answers, (what projects have been build already?)
// VR racing simulator, Raspberry Pi Arcade, 3D handheld Scanner, Bodycam

var answer = ['vr racing simulator', '3d scanner ', 'body cam', 'raspberry pi arcade'];
var sevenGuess = false;

function question7(answerInput) {
  if (answer.includes(answerInput)) {
    alert('yes ' + answerInput + ' is one of the projects we are building at the MH');
    sevenGuess = true;
  } else {
    alert('naw dont know about that one but, try again you have ' + (userGuess - 1) + ' more tries');
  }
}

for (var userGuess = 6; userGuess > 0; userGuess--) {
  if (sevenGuess === false) {
    var userAnswer = prompt('what projects do you think that we already done at the house').toLowerCase();
    question7(userAnswer);
  } else {
    break;
  }
}

var finalTotal = 0;
if (sevenGuess === true && sixGuess === true) {
  finalTotal = 7;
} else if (sevenGuess === true || sixGuess === true) {
  finalTotal = 6;
} else {
  finalTotal = 5;
}

alert('hey ' + userName + 'you got ' + finalTotal + ' out of 7');

// at the end of the game the total is tallied
// the user is told by name that they scored "4 0ut of 7".


