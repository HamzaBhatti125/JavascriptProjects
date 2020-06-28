function addChar(character) {
    var display=document.getElementById("display");
	if(display.value == null || display.value == "0")
        display.value = character
	else
        display.value += character
}

function getNumber(num){
    var display=document.getElementById("display");
    display.value += num;
}

function clearResult(){
    var display=document.getElementById("display");
    display.value =" ";

}
 function getResult(){
    var display=document.getElementById("display");
    display.value=eval(display.value);
 }

function deleteChar() {
	display.value = display.value.substring(0, display.value.length - 1)
}

function changeSign() {
	if(display.value.substring(0, 1) == "-")
        display.value = display.value.substring(1, display.value.length)
	else
        display.value = "-" + display.value
}
function sin(){
    var display=document.getElementById("display");
    display.value = Math.sin(display.value)
}
    
function cos(){
        var display=document.getElementById("display");
        display.value = Math.cos(display.value)
}
function tan(){
    var display=document.getElementById("display");
    display.value = Math.tan(display.value)
}

function sqrt() {
    var display=document.getElementById("display");
    display.value = Math.sqrt(display.value)

}

function ln() {
    var display=document.getElementById("display");
	display.value = Math.log(display.value);
}

function exp() {
    var display=document.getElementById("display");
	display.value = Math.exp(display.value);
}

function square() {
    var display=document.getElementById("display");
	display.value = eval(display.value) * eval(display.value)
}





