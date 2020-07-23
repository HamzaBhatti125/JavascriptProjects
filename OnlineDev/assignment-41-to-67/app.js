//Chapter 38-42

//Task1
// function power(a, b) {
//     let result = a ** b
//     console.log(result)
// }
// // power(5, 4)

//Task2
// function leap(year){
//     if(year % 4 == 0){
//         console.log("This is leap year")
//     }else{
//         console.log("not a leap year")
//     }
// }
// // leap(1999)
// // leap(2012)


//Task3
// function length(a,b,c){
//     let s = (a+b+c)/2;
//     area(s,a,b,c);
// }
// function area(p,q,r,z){
//     let res = p*(p-q)*(p-r)*(p-z)
//     console.log(res)
// }
// // length(5,4,3)

//Task4
// function marks(m1,m2,m3){
//     let total = m1+m2+m3
//     let avg = avgFun(total)
//     let per = perFun(total)
//     console.log("The avg is: " + avg)
//     console.log("The percentage is: " + per + "%")
// }
// function avgFun(totals){
//     let avg = (totals/3)
//     return avg
// }
// function perFun(totals){
//     let per = (totals/300)*100
//     return per
// }
// // marks(96,87,64)

//Task5
// function index(word,char){
//     word = word.split("")
//     let count = -1
//     for(var i=0; i < word.length; i++){
//         if(char == word[i]){
//             count = i;
//             break;
//         }
//     }
//     if(count >=0){
//         console.log("your character " + char + " is found at index " + i)
//     }else{
//         console.log("not found")
//     }
// }
// // index("Hello world", "i")

//Task6
// function deleteVowel(sentence){
//     let arr = sentence.split("");
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
//             arr.splice(i,1)
//             continue
//         }
//     }
//     arr = arr.join("")
//     console.log("Original Sentence: " + sentence)
//     console.log("After deleting vowels: " + arr)
// }
// // deleteVowel("The quick brown fox jumps over lazy dog")

//Task8
// function main(num){
//     let m = meters(num);
//     let cm = cent(num);
//     let inch = inches(num);
//     let feet = feets(num);
//     console.log("distance in m is: " + m)
//     console.log("distance in cm is: " + cm)
//     console.log("distance in inch is: " + inch)
//     console.log("distance in feet is: " + feet)
// }
// function meters(num){
//     let res = num*1000
//     return res
// }
// function cent(num){
//     let res = (num*1000)*100
//     return res
// }
// function inches(num){
//     let res = num*39370.1
//     return res
// }
// function feets(num){
//     let res = num*3280.84
//     return res
// }
// // main(103);

//Task9
// function overTime(hour){
//     let over = 0;
//     if(hour > 40){
//         over = hour - 40;
//         let total = over * 12;
//         console.log("total overtime payment is: Rs."+ total)
//     }else{
//         console.log("No over time")
//         return
//     }
// }
// // overTime(45)
// // overTime(39)

//Task10
// function test(){
//     var amount = +prompt("Enter Amount to withdraw")
//     var hundred = 0 
//     var fifty = 0
//     var ten = 0
//     if(amount >= 100){
//         hundred = Math.floor(amount/100);
//         amount = amount - (hundred*100)
//     }
//     if (amount >= 50){
//         fifty = Math.floor(amount/50);
//         amount = amount - (fifty*50);
//     }
//     if ( amount >= 10){
//         ten = Math.floor(amount/10);
//         amount = amount - (ten*10)
//     }
//     console.log("you will have "+ hundred + " hundred note " + fifty + " fifty notes and " + ten + " ten notes")
// }
// // test()


//Chapter 43-48

//Task3
// function deleteRow(e){
//     var remove = document.getElementsByTagName("tr")
//     remove[e].setAttribute("class", "display")
// }


//Task5
// var count = document.getElementById("count").innerHTML
// function increase(){
//     var res = ++count   
//     document.getElementById("count").innerHTML = res
// }
// function decrease(){
//     var res = --count 
//     document.getElementById("count").innerHTML = res
// }

// Chapter 49-52 EVENTS
// TASK1
// function checkAddress(userId,fieldId){
//     var name=document.getElementById(userId).value;
//     var val=document.getElementById(fieldId).value;
//     if(name=="" || val==""){
//         alert("Username and Email address are required.");
//     }
//     else{
//         alert(name+"\n"+val);
//     }
// }

// TASK2
// function showMore() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
//     }

//Task3
//Pending

// Chapter 58-67 DOM 
// TASK1

// i)
// var d= document.getElementById("main-content");
// ii)
// var p = document.getElementsByTagName("p")
// iii)
// var p = document.getElementsByClassName("render")
// for(var i=0; i<p.length;i++){
//     var content=p[i].innerHTML;
//     console.log(content);
// }
// iv)
// var firstname=document.getElementById("first-name");
// firstname.value="Hamza";
// v)
// var lastname=document.getElementById("last-name");
// lastname.value="Bhatti";
// vI)
// var emailaddress=document.getElementById("email");
// emailaddress.value = "hamzaexample@yahoo.com";



