var totalScore = 0;
var targetScore = 0;
var first =0;
var second = 0;
var third = 0;



function reset() {
    
    //re- initializing values
    targetScore = Math.floor(Math.random() * 101) +19;
    first = Math.floor(Math.random() * 12);
    second = Math.floor(Math.random() * 12);
    third = Math.floor(Math.random() * 12);
    totalScore = 0;
    // initializing finished

     //display targetScore and totalScore
     $("#targetScore").html(targetScore); // print the targetscore
     $("#totalScore").html(totalScore); // print the targetscore
      //display targetScore and totalScore
    
    
    console.log('targetScore ' + targetScore);
    console.log('first ' + first);
    console.log('second ' + second);
    console.log('third ' +third);
    console.log('totalScore '+totalScore);

    startGame();

}
reset();

// function display() {
//      //display targetScore and totalScore
//      $("#targetScore").html(targetScore); // print the targetscore
//      $("#totalScore").html(totalScore); // print the targetscore
//       //display targetScore and totalScore
    
    
//      startGame();
// }


function startGame() {
    $('#1').click(function(){
        totalScore = totalScore + first;
        console.log('totalScore ' +totalScore);
        $("#totalScore").html(totalScore);
        win();
        lose();
    });
    $('#2').click(function(){
        totalScore = totalScore + second;
        console.log('totalScore '+totalScore);
        $("#totalScore").html(totalScore);
        win();
        lose();
    });
    $('#3').click(function(){
        totalScore = totalScore + third;
        console.log('totalScore '+totalScore);
        $("#totalScore").html(totalScore);
        win();
        lose();

    });   

}

function win (){
    if (targetScore === totalScore){
        alert("you win!");
        reset();
    }

}




function lose (){
    if (targetScore <  totalScore){
        alert("you lose!");
        reset();
    }

}