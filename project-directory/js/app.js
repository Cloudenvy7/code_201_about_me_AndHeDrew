'use strict';
//this is prompt is storing the users name'
var userName = prompt('whats your name?');
console.log('the user name is: ' + userName);
alert('Hey ' + userName + ' welcome to the M.O.R.E. House, I just have a few questions to ask you');

//prompt asking the user if they like to build forcing a yes or no'
do {
  var building = prompt('Do you enjoy buidling solutions?');
  var likeBuilds = building.toLowerCase();

  if (likeBuilds === 'yes' || likeBuilds === 'y') {
    console.log('the user said ' + building + ' to being a Maker');
    alert('you said yes thats awesome :}');
  }
  else if (likeBuilds === 'no' || likeBuilds === 'n') {
    alert('this is unfortunate, but we can move on');
  } else {
    alert('naw brrah, you need to use yes or no, try again');
  }
} while (likeBuilds !== 'yes' && likeBuilds !== 'y' && likeBuilds !== 'no' && likeBuilds !== 'n');


//this is while loop asking the user if they like to Afrofuture forcing a yes or no
do {
  var afrofuture = prompt('Have you been inspired to create an Afrofuture?');
  var cindyMayweather = afrofuture.toLowerCase();

  if (cindyMayweather === 'yes' || cindyMayweather === 'y') {
    console.log(userName + 'said' + afrofuture + 'having been inspired to create an Afrofuture ');
    alert('Wakanda Forever :}');
  }
  else if (cindyMayweather === 'no' || cindyMayweather === 'n') {
    alert('Need to watch that Black Panther movie');
  } else {
    alert('naw sunny, you need to use yes or no, try again');
  }
} while (cindyMayweather !== 'yes' && cindyMayweather !== 'y' && cindyMayweather !== 'no' && cindyMayweather !== 'n');


//this is while loop asking the if the see mathmatics as a connecting piece to other crafts
do {
  var mathamatics = prompt('Do you see how tech, art, and music fall in the same mathmatics?');
  var mathYes = mathamatics.toLowerCase();
  if (mathYes === 'yes' || mathYes === 'y') {
    console.log(userName + 'said ' + mathYes + 'seeing the similarties to math ');
    alert('Sounds like you might be a mathamatically tech mind artist with rythm :}');
  }
  else if (mathYes === 'no' || mathYes === 'n') {
    alert('well when it comes to you we can talk some more');
  } else {
    alert('...okay but I need you to use yes or no, try again');
  }
} while (mathYes !== 'yes' && mathYes !== 'y' && mathYes !== 'no' && mathYes !== 'n');

//this is while loop asking the user they want to bring sci-fi to life
do {
  var scifi = prompt('is your goal to make sci-fi just science?');
  var nonficition = scifi.toLowerCase();

  if (nonficition === 'yes' || nonficition === 'y') {
    console.log(userName + 'said ' + nonficition + ' to making sci-fi a reality ');
    alert('time to make sci-fi just sci :}');
  }
  else if (mathamatics === 'no' || mathamatics === 'n') {
    alert('at one point cell phones, planes, and cars were all just make believe');
  } else {
    alert('...okay but I need you to use yes or no, try again');
  }
} while (nonficition !== 'yes' && nonficition !== 'y' && nonficition !== 'no' && nonficition !== 'n');

//this is while loop asking the user if they like to is into sci-fi
do {
  var more = prompt('can you dedicate 6months to learning, making, and teaching More?');
  var canidate = more.toLowerCase();

  if (canidate === 'yes' || canidate === 'y') {
    console.log(userName + 'said ' + canidate + ' to becoming a MoorHouser ');
    alert('sounds like you are a Morehouser ');
  }
  else if (mathamatics === 'no' || mathamatics === 'n') {
    alert('I get it ,not everybody can put their life on hold');
  } else {
    alert('...im sure you should no by now, yes or no');
  }
} while (canidate !== 'yes' && canidate !== 'y' && canidate !== 'no' && canidate !== 'n');



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
for (guess = 4; guess > 0; guess--) {
  var buildProjects = prompt('How many projects do you think the Moorhouse has in its que?');

  if (parseInt(buildProjects) === 100) {
    alert('yes' + buildProjects + ' projects are what we are building');
    console.log('they got it right, we have at least ' + buildProjects + ' ready to be built at the MakerHouse');
    var sixGuess = true;
    break;
  } else if (parseInt(buildProjects) < 100) {
    alert('no this is too low, try again ' + 'you have ' + (guess - 1) + ' more tries');
  } else {
    alert('no this is too high, try again ' + 'you have ' + (guess - 1) + ' more tries');
  }
  console.log('they used all 4 guess and didnt get 100 as an answer to how many builds do we have at the MakerHouse');
}



// 7 question is about * possible answers, (what projects have been build already?)
// VR racing simulator, Raspberry Pi Arcade, 3D handheld Scanner, Bodycam

var answer = ['vr racing simulator', '3d scanner ', 'body cam', 'raspberry pi arcade'];
for (var userGuess = 7; userGuess > 0; userGuess--) {
  var userAnswer = prompt('what projects do you think that we already done at the house').toLowerCase();
  console.log(userAnswer);
  console.log(answer);
  if (answer.includes(userAnswer)) {
    alert('yes ' + userAnswer + ' is one of the projects we are building at the MH');
    var sevenGuess = true;
    break;
  } else {
    alert('naw dont know about that one but, try again you have ' + (userGuess - 1) + ' more tries');
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

//at the end of the game the total is tallied
// the user is told by name that they scored "4 0ut of 7".


