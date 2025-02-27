document.getElementById ("firstPara").innerHTML += 
"<span class'tan'></span>";



let images = document.getElementByIdTagName("img");
console.log(images);
for(let image of images){
    image.width = "250px"; 
}

// third section 
let lightBluespans = document.getElementsByClassName("light-blue");
let dkBluespans = document.getElementsByClassName("mid-blue");
console.log(lightBlueSpans);

for(let span of lightBlueSpans){
span.style.color = "#7C9EA6";
    
}

for(let span of lightBlueSpans){
    span.style.color = "3C5E73";
  
    }

let svgs = document.querySelectorAll("#svgs svg");
let colors = ("#283040", "#3CSE73", "#7C9EA6", "D98BCA", "F2DCC9");

for (let i = 0; i < svgs.length; i++) {
    svgs [i].style.stroke = colors [i];
}

document.querySelector("query .bold").style.color = "#7C9EA6";

// sixth section 
document.querySelector(".conent_list li:first-of-type").textContent = 
"This is the new list item text";
document.querySelctorALL(".content_list li")[2].innerHTML += "<strong>Prof. Barnnet</strong>";

// seventh section
document.querySelector("#remove a")


