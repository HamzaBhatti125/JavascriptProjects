//---------------------------------------------
// <============ Chapter 21 to 25 ============>
//---------------------------------------------

//1.
// var str1 = prompt("Enter first name: ")
// var str2 = prompt("Enter last name: ");
// var full = str1 + str2
// alert("Hello "+ full)

//2.
// var mobile = prompt("Enter your favourite mobile set: ");
// var len = mobile.length;
// document.write("My favourite phone is: " + mobile + "<br> Length of String: " + len)

//3.
// var str = "Pakistani"
// var ind = str.indexOf('n')
// document.write("String: " + str + "<br> Index of 'n': " + ind)

//4.
// var str = "Hello world"
// var ind = str.lastIndexOf('l')
// document.write("String: " + str + "<br> Lsst index of 'l': " + ind)

//5.
// var str = "Pakistani"
// var ind = str.charAt(3)
// document.write("String: " + str + "<br> character at index 3: " + ind)

//6.
// var str1 = prompt("Enter first name: ")
// var str2 = prompt("Enter last name: ");
// var full = str1.concat(str2)
// alert("Hello "+ full)

//7.
// var city = "Hyderabad"
// var newCity = city.replace('Hyder', 'Islam')
// document.write("City: " + city + "<br> After replacement: " + newCity)

//8.
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var newMsg = message.replace(/and/g, '&')
// document.write("Current msg: " + message + "<br> After replacement: " + newMsg)

//9.
// var str = '472'
// var num = Number(str)
// document.write("Value: " + str + "<br> Type: " + typeof(str) + "<br> Value: " + num + "<br> Type: " + typeof(num))

//10.
// var inp = prompt("Enter any string: ")
// var up = inp.toUpperCase();
// document.write("User input: " + inp + "<br> Upper Case: " + up)

//11.
// var inp = prompt("Enter any string: ")
// var first = (inp.charAt(0)).toUpperCase()
// var rest = (inp.slice(1)).toLowerCase()
// var final = first.concat(rest)
// document.write("User input: " + inp + "<br> Title Case: " + final)

//12.
// var num = 35.36;
// var str = num.toString()
// var str1 = str.slice(0,2)
// var str2 = str.slice(3)
// var string = str1.concat(str2)
// document.write("Number " + num + "<br> Result: " + string)


//13.
// var str = prompt("Enter any String: ")
// var found = false;
// var ind = 0;
// for(var i=0 ; i < str.length; i++){
//     ind = str.charCodeAt(i)
//     console.log(ind)
//     if( ind == 33 || ind == 44 || ind == 46 || ind == 64){
//         found = true
//         break;
//     }
// }
// if(found){
//     alert("Please enter valid userName")
// }else{
//     alert("UserName Accepted!")
// }

//14.
// var bakery = ['cake', 'apple pie', 'cookie','chaips', 'patties']
// var search = prompt("What do you want to order?")
// var found = false;
// var ind;
// search = search.toLowerCase()
// for(var i=0; i < bakery.length; i++){
//     if(search == bakery[i]){
//         found = true;
//         ind = i
//         break
//     }
// }
// if(found){
//     document.write(search + " is available in our bakery at index " + ind)
// }else{
//     document.write("Sorry! " + search + " is not available")
// }

//15.
// var notValid = false
//     var valid = false
//     var pass = prompt("Please Enter a password:")
//     if(pass.length !== 6){
//         notValid = true
//     }else{
//         for(var i=48;i<58;i++){
//             if(pass.charCodeAt(0) == i){
//                 notValid = true
//                 break;
//             }
//         }
//         for(var i=1; i<pass.length;i++){
//             for(var j=48;j<57;j++){
//                 if(pass.charCodeAt(i) == j){
//                     valid = true;
//                     break;
//                 }
//             }
//             if(valid){
//                 break;
//             }
//         }
//     }
//     if(notValid == false && valid == true){
//         document.write("Your password is: "+ pass)
//     }else{
//         document.write("Invalid password")
//     }

//16.
// var university = "University of Karachi"
// var arr = university.split('')
// for(var i = 0; i<arr.length; i++){
//     document.write(arr[i] + "<br>")
// }

//17.
// var inp = prompt("Enter any string")
// var last = inp.charAt(inp.length - 1);
// document.write("User input: " + inp + "<br> Last character: " + last)

//18.
// var str = 'The quick brown fox jumps over the lazy dog'
// var search = 'the'
// str = str.toLowerCase()
// var arr = str.split(' ')
// var count = 0;
// for (var i=0; i<arr.length ; i++){
//     if ( search == arr[i] ){
//             ++count
//     }
// }
// if (count > 0){
//     document.write("Text: " + str + "<br> There are " + count + " occurnces of the word " + search)
// }else{
//     document.write("Text: " + str + "<br> There are no occurence of " + search + " word")
// }

//---------------------------------------------
// <============ Chapter 26 to 30 ============>
//---------------------------------------------

//1.
// var num = +prompt("Enter number: ");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br> round off value: " + round + "<br> floor value: " + floor + "<br> ceil value: " + ceil)

//2.
// var num = +prompt("Enter negative number: ");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br> round off value: " + round + "<br> floor value: " + floor + "<br> ceil value: " + ceil)

//3.
// var num = +prompt("Enter negative number: ");
// var abs = Math.abs(num)
// document.write("Absolute value of " + num + " is " + abs)

//4.
// var rand = Math.random() * 10
// var round = Math.round(rand)
// if(round > 6){
//     round = round -6;
// }
// console.log("Random dice value is: " + round)

//5.
// var rand = Math.random()
// var toss;
// if(rand >= 0.5){
//     toss = "Heads"
// }else{
//     toss = "Tails"
// }
// document.write("random coin value: " + toss)

//6.
// var rand = Math.random()
// var num = Math.round(rand * 100)
// document.write("random number between 1 and 100: " + num)

//8.
// var num = +prompt("Enter a number between 1 to 10: ")
// var rand = Math.random()
// rand = Math.round(rand) * 10
// if(num == rand){
//     alert("Bingoo! You guess the same number")
// }else{
//     alert("Try again")
// }

//---------------------------------------------
// <============ Chapter 31 to 34 ============>
//---------------------------------------------

//1.
// var date = new Date();
// document.write(date)

//2.
// var months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var month = date.getMonth()
// document.write("Current month: " + months[month])

//3.
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date().getDay()
// document.write("Today is: " + days[day])

//4.
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date().getDay()
// funDay = days[day]
// if(funDay == "Sun" || funDay == "Sat"){
//     alert("Fun Day!")
// }else{
//     alert("No Fun :(")
// }

//5.
// var dat = new Date();
//     var day = dat.getDate()
//     document.write("The current date is: "+day+"<br>")
//     if(day > 15){
//         document.write("Last Fifteen Days of the Month")
//     }else{
//         document.write("first Fifteen Days of the month")
//     }


//6.
// var date = new Date()
// var time = date.getTime();
// var minutes = (time/1000)/60
// document.write("Current date: " + date + "<br> Ellapsed milliseconds since Jan 1,1970: "+ time + "<br> Ellapsed minutes since Jan 1,1970: "+ minutes )

//7.
// var hours = (new Date()).getHours()
// if(hours <=11){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

//8.
// var date = new Date("Dec 31, 2020");
// document.write(date)

//9.
// var lastDate = new Date("Jun 18, 2015").getTime()
// var today = (new Date()).getTime();
// var ans = today - lastDate
// var minutes = Math.round((ans/1000)/60)
// var days = Math.round(minutes/1440)         // 1140 minutes in 1 day
// document.write(days + " days have passed since 1st Ramadan, 2015")

//10.
// var lastYear = new Date("Dec 05, 2015")
// var lastTime = lastYear.getTime()
// var firstYear = new Date("Jan 01, 2015")
// var firstTime = firstYear.getTime()
// var ans = Math.round((lastTime - firstTime)/1000)
// document.write("On reference date: " + lastYear + "<br>" + ans + " seconds have passed since beginning of 2015")

//11.
// var date1 = new Date("Dec 05, 2015 23:08:16");
// var date2 = new Date("Dec 05, 2015 22:08:16");
// document.write("Current Date: " + date1 + "<br> 1 hour ago it was: " + date2)

//12.
//to do

//13.
// var age = +prompt("Enter your age: ")
// var date = (new Date()).getFullYear();
// var year = date - age;
// document.write("Your Birth Year is: " + year)

//14.
// var customer = prompt("Enter your full Name: ")
// var units = +prompt("Enter number of units: ")
// var months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date()
// var monthInd = date.getMonth() 
// var month = months[monthInd]
// var charges = 16;
// var netAmount = units * charges
// var latePay = 350
// var grossAmount = netAmount + latePay

// document.write(`
//     <h1>K-Electric Bill</h1>
//     <p>Customer Name: <b>` + customer  +`</b></p>
//     <p>Current Month: <b>` + month  +`</b></p>
//     <p>Number of Units: <b>` + units  +`</b></p>
//     <p>Charges Per Unit: <b>` + charges  +`</b></p><br>
//     <p>Net Amount Payable(Within Due Date): <b>` + netAmount  +`</b></p>
//     <p>Late Payment Charges: <b>` + latePay  +`</b></p>
//     <p>Gross Amount Payable (After Due Date): <b>` + grossAmount +`</b></p>
// `)


//---------------------------------------------
// <============ Chapter 35 to 40 ============>
//---------------------------------------------

//1.
// function date(){
//     var current = new Date();
//     console.log(current)
// }
// date()

//2.
// function name(first,last){
//     let full = first + last
//     alert("Hello " + full)
// }
// name('hamza', 'hameed')

//3.
// function add(num1,num2){
//     return num1 + num2
// }
// console.log(add(2,1))

//4.
// function calc(num1,num2,op){
//     if (op === '+'){
//         console.log(num1 + num2)
//     }
//     else if(op === '-'){
//         console.log(num1 - num2)
//     }else if(op === '*'){
//         console.log(num1 * num2)
//     }else if (op === '/'){
//         console.log(num1 / num2)
//     }
// }
// calc(24,4,'+')
// calc(24,4,'-')
// calc(24,4,'*')
// calc(24,4,'/')

//5.
// function sqr(num){
//     console.log(num*num)
// }
// sqr(5)
// sqr(8)

//6.
// function fact(num){
//     let result = 1
//     if(typeof(num) == 'string' || num < 0 ){
//         console.log("Invalid Input")
//     }else if (num == 0){
//         console.log("Factorial of 0 is 1")
//     }else{
//         for(var i=1; i<= num; i++){
//             result = result * i;
//         }
//         console.log("Factorial of " + num + " is " + result)
//     }
// }
// fact('i')
// fact(-2)
// fact(0)
// fact(5)

//7.
// function counter(num1,num2){
//     for(var i=num1; i<= num2; i++){
//         document.write(i + "<br>")
//     }
// }
// counter(2,20)

//8.
// function calculateHyp(base, perp){
//     let hyp , sqr1,sqr2
//     function calculatesqr(base, perp){
//         sqr1 = base* base;
//         sqr2 = perp * perp;
//     }
//     calculatesqr(base,perp)
//     hyp = sqr1 + sqr2
//     console.log("The hypotenous of right triangle is " + hyp)
// }
// calculateHyp(5,4)
// calculateHyp(5,10)

//9.
// function area(num1,num2){
//     return num1 * num2
// }
// console.log(area(5,4))
// var a = 5;
// var b = 4;
// console.log(area(a,b))

//10
// function palindrome(str){
//     let low =  str.toLowerCase()
//     let str1 = low.split('')
//     str1 = str1.reverse()
//     str1 = str1.join('')
//     if(low == str1){
//         console.log('Word is palindrome')
//     }else{
//         console.log("Word is not palindrome")
//     }
// }
// palindrome('maham')
// palindrome('Civic')
// palindrome('hamza')

//11.
// function capital(str){
//     let word = str.toLowerCase();
//     word = word.split(' ');
//     for(var i=0; i<word.length ;i++){
//         let a = word[i];
//         let b = word[i];
//         a = a.charAt(0).toUpperCase()
//         b = b.slice(1)
//         word[i] = a.concat(b)
//     }
//     word = word.join(' ')
//     document.write("Example String: " + str + "<br> Capitalised form: "+ word)
// }
// capital("the quick brown fox jumps over lazy dog")

//12.
// function longest(str){
//     let word = str.split(' ')
//     let long = 0;
//     let index = 0;
//     for(var i=0;i<word.length;i++){
//         let leng = word[i].length;
//         if(long < leng){
//             long = leng
//             index = i;
//         }
//     }
//     console.log("The largest word is: " + word[index])
// }
// longest("Web Development tutorial")
// longest("hello world hamza hameedbhatti")

//13.
// function letterCounter(str,letter){
//     let count = 0;
//     str = str.toLowerCase()
//     for(var i =0; i<str.length; i++){
//         if(letter == str[i]){
//             count++;
//         }
//     }
//     console.log("The number of occurences of letter "+ letter + " in a string is: " + count)
// }
// letterCounter('JSResourceS.com', 's')
// letterCounter('Hamza Bhatti', 'o')

//14.
// function calcCircumference(radius){
//     let result = 2*Math.PI*radius
//     console.log("The circumference is: " + result)
// }
// function calcArea(radius){
//     let result = Math.PI * (radius*radius)
//     console.log("The area is: "+ result)
// }
// calcCircumference(5)
// calcArea(5)