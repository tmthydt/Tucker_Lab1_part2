var tempClothing;
var eventClothing;
var eventType;
var tempFahr;

function eventWeather(){
   eventType = this.value;
    if (eventType === "casual"){
      eventClothing = "something comfy";
    }
    else if (eventType === "semi-formal"){
      eventClothing = "polo";
    }
    else if (eventType === "formal"){
      eventClothing = "suit";
    }
    update();
  }
document.getElementById("event").onchange = eventWeather;

document.getElementById("temperature").addEventListener("input", function() {

 tempFahr = this.value;

if (tempFahr <54) {
  tempClothing = "coat";
}
else if (tempFahr >54&& tempFahr <70) {
  tempClothing = "jacket";
}
else if (tempFahr >70) {
  tempClothing = "no jacket";
}
update();
});
function update() {
  if (tempFahr && eventType && eventClothing && tempClothing) {
    var result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a "+eventClothing+" and "+tempClothing+"."
    console.log(result);
  }
}
