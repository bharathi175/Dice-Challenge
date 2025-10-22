var random1=Math.floor(1+Math.random()*6);
var randomdice1="dice"+random1+".png";//dice q to 6
var image1="images/"+randomdice1;
var i1=document.querySelectorAll("img")[0];//0 because index 0 th ku generate pannanum
i1.setAttribute("src",image1);
var random2 = Math.floor(1 + Math.random() * 6);
var randomdice2 = "dice" + random2 + ".png"; //dice q to 6
var image2 = "images/" + randomdice2;
var i2= document.querySelectorAll("img")[1]; //0 because index 0 th ku generate pannanum
i2.setAttribute("src", image2);
if(random1>random2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="player 2 wins";

}
