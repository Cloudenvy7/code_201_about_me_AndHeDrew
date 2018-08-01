"use strict";
//this is prompt is storing the users name"
var userName = prompt("whats your name?")
console.log("the user name is: " + userName);
alert("Hey " + userName +" welcome to the M.O.R.E. House, I just have a few questions to ask you");


//this is while loop asking the user if they like to build forcing a yes or no"
do { 
    var building = prompt("Do you enjoy buidling solutions?");
    var likeBuilds = building.toLowerCase();

    if(likeBuilds === 'yes' || likeBuilds === 'y' ){
        console.log("the user said " + building + " to being a Maker");
        alert("you said yes thats awesome :}");    
    } 
    else if(likeBuilds === 'no' || likeBuilds === 'n' ){
        alert("this is unfortunate, but we can move on");    
    } else {
        alert("naw brrah, you need to use yes or no, try again");
    }
} while ( likeBuilds !== 'yes' && likeBuilds !== 'y' && likeBuilds !== 'no' && likeBuilds !== 'n')
    

//this is while loop asking the user if they like to Afrofuture forcing a yes or no
do { 
    var afrofuture = prompt("Have you been inspired to create an Afrofuture?");
    var cindyMayweather = afrofuture.toLowerCase();
    
    if(cindyMayweather === 'yes' || cindyMayweather === 'y' ){
        console.log(userName +"said"+ afrofuture + "having been inspired to create an Afrofuture ");
        alert("Wakanda Forever :}");    
    } 
    else if(cindyMayweather === 'no' || cindyMayweather === 'n' ){
        alert("Need to watch that Black Panther movie");    
    } else {
        alert("naw sunny, you need to use yes or no, try again");
    }
} while ( cindyMayweather !== 'yes' && cindyMayweather !== 'y' && cindyMayweather !== 'no' && cindyMayweather !== 'n')


//this is while loop asking the if the see mathmatics as a connecting piece to other crafts
do { 
    var mathamatics = prompt("Do you see how tech, art, and music fall in the same mathmatics?");
    var mathYes = mathamatics.toLowerCase();
 
       if(mathYes === 'yes' || mathYes === 'y' ){
            console.log(userName +"said "+ mathYes + "seeing the similarties to math ");
            alert("Sounds like you might be a mathamatically tech mind artist with rythm :}");    
        } 
        else if(mathYes === 'no' || mathYes === 'n' ){
           alert("well when it comes to you we can talk some more");    
        } else {
            alert("...okay but I need you to use yes or no, try again");
    }
} while ( mathYes !== 'yes' && mathYes !== 'y' && mathYes !== 'no' && mathYes !== 'n')

//this is while loop asking the user they want to bring sci-fi to life
do { 
    var scifi = prompt("is your goal to make sci-fi just science?");
    var nonficition = scifi.toLowerCase();
 
       if(nonficition === 'yes' || nonficition === 'y' ){
            console.log(userName +"said "+ nonficition + " to making sci-fi a reality ");
            alert("time to make sci-fi just sci :}");    
        } 
        else if(mathamatics === 'no' || mathamatics === 'n' ){
           alert("at one point cell phones, planes, and cars were all just make believe");    
        } else {
            alert("...okay but I need you to use yes or no, try again");
    }
} while ( nonficition !== 'yes' && nonficition !== 'y' && nonficition !== 'no' && nonficition !== 'n')

//this is while loop asking the user if they like to is into sci-fi
do {
    var more = prompt("can you dedicate 6months to learning, making, and teaching More?");
    var canidate = more.toLowerCase();
 
       if(canidate === 'yes' || canidate === 'y' ){
            console.log(userName +"said "+ canidate + " to becoming a MoorHouser ");
            alert("sounds like you're a Morehouser ");    
        } 
        else if(mathamatics === 'no' || mathamatics === 'n' ){
           alert("I get it ,not everybody can put their life on hold");    
        } else {
            alert("...im sure you should no by now, yes or no");
    }
} while ( canidate !== 'yes' && canidate !== 'y' && canidate !== 'no' && canidate !== 'n')


    
