var m1=Math.random()
m1=Math.floor(m1*6)+1;
var m2=Math.random()
m2=Math.floor(m2*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+m1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+m2+".png");
if(m1==m2)
{
  document.querySelector(".result").innerHTML="<strong> Try Once More</strong>";
}
else if(m1>m2)
{
  document.querySelector(".result").innerHTML="<strong> Player1 won</strong>";
}
else {
  document.querySelector(".result").innerHTML="<strong> Player2 won</strong>";
}
