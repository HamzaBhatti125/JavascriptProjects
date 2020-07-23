// function power(a, b) {
//     let result = a ** b
//     console.log(result)
// }
// // power(5, 4)

// function leap(year){
//     if(year % 4 == 0){
//         console.log("This is leap year")
//     }else{
//         console.log("not a leap year")
//     }
// }
// // leap(1999)
// // leap(2012)

// function length(a,b,c){
//     let s = (a+b+c)/2;
//     area(s,a,b,c);
// }
// function area(p,q,r,z){
//     let res = p*(p-q)*(p-r)*(p-z)
//     console.log(res)
// }
// // length(5,4,3)

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

// function deleteRow(e){
//     var remove = document.getElementsByTagName("tr")
//     remove[e].setAttribute("class", "display")
// }

// var count = document.getElementById("count").innerHTML
// function increase(){
//     var res = ++count   
//     document.getElementById("count").innerHTML = res
// }
// function decrease(){
//     var res = --count 
//     document.getElementById("count").innerHTML = res
// }

// function call(){
//     var names = [];
//     var classArray = []
//     var name = prompt("Enter name: ")
//     names.push(name)
//     var classes = +prompt("Enter Class: ")
//     classArray.push(classes);

//     //todo function
//     var callBacks = appendChilds(names, classArray)
//     document.getElementById("table").appendChild(callBacks)
// }
// function appendChilds(array1,array2){
//     var list = document.createElement("tr")
//     for(var i=0; i< array1.length; i++){
//         var index = document.createElement("td")
//         index.appendChild(document.createTextNode(i))
//         list.appendChild(index)
//         var nameI = document.createElement("td")
//         nameI.appendChild(document.createTextNode(array1[i]))
//         list.appendChild(nameI)
//         var classI = document.createElement("td")
//         classI.appendChild(document.createTextNode(array2[i]))
//         list.appendChild(classI)
//     }
//     return list
// }

