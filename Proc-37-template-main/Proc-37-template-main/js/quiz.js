class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    var allConstestants;
    var displaypos = 230;

    //write condition to check if contestantInfor is not undefined
    if(allConstestants!==undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Cntestant who answered correct are highlighted in green",130,230);
    }

    //write code to highlight contest who answered correctly
    for(var plr in allConstestants){
      var correctans = "2";
      if(correctans === allConstestants[plr].answer)
      fill("Green");
      else
      fill("red");

    textSize(20);
    text(allContestants[plr].name + ":" + allContestants[plr].answer, 250,displaypos);
  }
}
}
