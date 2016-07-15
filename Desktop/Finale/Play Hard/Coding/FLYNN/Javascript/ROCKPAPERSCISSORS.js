//If we declare a variable and make it equal to Math.random(), that variable will equal a number between 0 and 1.

var userChoice=prompt("ROCK PAPER OR SCISSORS?!");
var computerChoice=Math.random();
//console.log(computerChoice); if you want to see the actual random number;

//to put constraints on that Math.random number then you do the following if else statement
//if more than 1 if else statement is needed do if / else if / else. 
if(0<computerChoice<0.33){
	console.log("rock");
}//never do semicolon with{} until you finish the WHOLE statement!
else if(0.34<computerChoice<.066){
	console.log("paper");
}
else(0.67<computerChoice<1){
	console.log("scissors");
};
//RETURN IS SO YOU KEEP IT IN THE CODE'S MEMORY, BUT SOONER OR LATER, YOU NEED TO DO CONSOLE.LOG TO ACTUALLY PRINT IT OUT ON THE CONSOLE... FIG OUT WHEN USE WHICH
//be careful to have the right number of brackets
var compare=function(choice1,choice2)
    {
        if(choice1===choice2)
        {
            return"The result is a tie!";}
        else if(choice1==="rock")
        {
            if(choice2==="scissors")
            {
                return"rock wins";
            }
            else
            {
                return"paper wins";
            }
        }
        else if(choice1==="paper")
        {
            if(choice2==="scissors")
            {
                return"scissors wins";
            }
            else
            {
                return"paper wins";
            }
        }
        else if(choice1="scissors")
        {
            if(choice2==="paper")
            {
                return"scissors wins";
            }
            else
            {
                return"rock wins";
            }
        }
    };
    compare(userChoice,computerChoice);