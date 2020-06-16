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
//to do

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
var str = 'The quick brown fox jumps over the lazy dog'
var search = 'the'
str = str.toLowerCase()
var arr = str.split(' ')
var count = 0;
for (var i=0; i<arr.length ; i++){
    if ( search == arr[i] ){
            ++count
    }
}
if (count > 0){
    document.write("Text: " + str + "<br> There are " + count + " occurnces of the word " + search)
}else{
    document.write("Text: " + str + "<br> There are no occurence of " + search + " word")
}