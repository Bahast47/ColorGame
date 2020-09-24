

var mainBox = document.getElementById("mainBox");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

/*Counterplus and counterminus is the two separet counter for negative points and positive points from the HTML file*/
var counterPlus = document.getElementById("counter1");
var counterMinus = document.getElementById("counter2");

var counter1;
var counter0;

/*color1, color2, color3 create three indvudel color form the RGB color system */
var color1 = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
var color2 = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
var color3 = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";


/*Color0 is the array which box0 wil mimic from*/
var color0 = [color1, color2, color3];
/*randomColor is the will choses one of the three boxes to mimic*/
var randomColor = color0 [Math.floor(Math.random() * 3)];

/*this is the styleset for each of the boxes */
mainBox.style.backgroundColor = randomColor;
mainBox.style.width = "100px";
mainBox.style.height = "100px";
mainBox.style.display = "inline-block";


box1.style.backgroundColor = color1;
box1.style.width = "100px";
box1.style.height = "100px";
box1.style.display = "inline-block";
box1.style.border = "solid 0px";

box2.style.backgroundColor = color2;
box2.style.width = "100px";
box2.style.height = "100px";
box2.style.display = "inline-block";
box2.style.border = "solid 0px";

box3.style.backgroundColor = color3;
box3.style.width = "100px";
box3.style.height = "100px";
box3.style.display = "inline-block";
box3.style.border = "solid 0px";

/*the counters is set to count from zero */
counter1 = 0;
counter0 = 0;

/*I've created a function for each of the three boxes so when you click on them it will detect if it is equal to the mainbox,
and then execute the stylesetting and add or subtracked plus one to the counter */
box1.onclick = function click1 () {
if( box1.style.backgroundColor === mainBox.style.backgroundColor){
    result.innerHTML = "Riktig!";
    box1.style.width = "105px";
    box1.style.height = "105px";
    box1.style.border = "solid 2px";
    counter1++;
    counterPlus.innerHTML = `${counter1}`;
    mainBox.style.backgroundColor = randomColor;
    box1.style.backgroundColor = color1;
    box2.style.backgroundColor = color2;
    box3.style.backgroundColor = color3;    
    }else{
    result.innerHTML = "Feil!";
    counter0--;
    counterMinus.innerHTML = `${counter0}`;
    }
}

box2.onclick = function click2 () {
if( box2.style.backgroundColor === mainBox.style.backgroundColor){
    result.innerHTML = "Riktig!";
    box2.style.width = "105px";
    box2.style.height = "105px";
    box2.style.border = "solid 2px";
    counter1++;
    counterPlus.innerHTML = `${counter1}`;
    mainBox.style.backgroundColor = randomColor;
    box1.style.backgroundColor = color1;
    box2.style.backgroundColor = color2;
    box3.style.backgroundColor = color3;
}else{
        
    result.innerHTML = "Feil!";
    counter0--;
    counterMinus.innerHTML = `${counter0}`;
    }
}

box3.onclick = function click3 () {
if( box3.style.backgroundColor === mainBox.style.backgroundColor){
    result.innerHTML = "Riktig!";
    box3.style.width = "105px";
    box3.style.height = "105px";
    box3.style.border = "solid 2px";
    counter1++;
    counterPlus.innerHTML = `${counter1}`;
    mainBox.style.backgroundColor = randomColor;
    box1.style.backgroundColor = color1;
    box2.style.backgroundColor = color2;
    box3.style.backgroundColor = color3;
}else{
        
    result.innerHTML = "Feil!";
    counter0--;
    counterMinus.innerHTML = `${counter0}`;
   }
}
