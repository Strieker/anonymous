/*jshint multistr:true *///we would use that if we used any backslashes just so say that they are just separators
var text=("Hi, my name is Cookie. My favorite animal is the lion, and I have three sons. One is named Jamal, the other Hakeem... the other I can live without. My ex's name is Luscious. Half of why we broke up was because he would say my name really wierdly :Cookay' instead of Cookie. My name is Cookie for goodness sake!... Huh, Cookie isn't my real name though. My real name is Clarice.");
var myName=("Cookie");
var hits=[];
for (var i=0;i<text.length;i++)
{
    if(text[i]==="C")
    {
        for(var j=i;j<=i+myName.length;j++)
        {
            hits.push("Cookie");
        }
    }
};
if(hits===0)
    {
        console.log("Your name wasn't found!");
    }
else
    {
        console.log(hits);
    }
    //for some reason it said that it should have come out with cookay as well because it would pick up letters with the same first letter and length, but it didn't so we are good:) 
//BUT! WE CAN Search the Internet to see if there are any built-in JavaScript string methods that can help!