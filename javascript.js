var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var hold=document.getElementById("place");
var button=document.getElementById("button");
button.addEventListener("click",change_color);
var body=document.getElementById("bodye");
color1.addEventListener("input",change_color);
color2.addEventListener("input",change_color);

function change_color()
{
console.log(hold.value);
body.style.background="linear-gradient(" +hold.value+ "," +color1.value +"," +color2.value+")";

}
