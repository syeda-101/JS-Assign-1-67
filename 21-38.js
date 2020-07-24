///Chapters # 21-25:
//Task 1:
var fstname = prompt('Enter your First name:');
var lstname = prompt('Enter your Last name:');
var fullname = fstname + ' ' + lstname;
alert('Welcome ' + fullname + '!');

//Task 2:
var mobile = prompt('Enter your favourite mobile phone model:');
document.write('My favourite phone is: ' + mobile + '<br>');
document.write('Length of string: ' + mobile.length);

document.write("<br>");
document.write("<br>");

//Task 3:
var pak = 'Pakistani';
document.write('String: ' + pak + "<br>");
document.write("Index of 'n': " + pak.indexOf('n'));

document.write("<br>");
document.write("<br>");

//Task 4:
var lastindex = 'Hello World';
document.write('String: ' + lastindex + "<br>");
document.write("Last index of 'l': " + lastindex.lastIndexOf('l'));

document.write("<br>");
document.write("<br>");

//Task 5:
var paki = 'Pakistani';
document.write('String: ' + paki + "<br>");
document.write('Character at index 3: ' + paki.charAt(3));

//Task 6:
var fstname = prompt('Enter your First name:' + ' ');
var lstname = prompt('Enter your Last name:');
var fullname = fstname.concat(' ' + lstname);
alert('Welcome ' + fullname);

document.write("<br>");
document.write("<br>");

//Task 7:
var city = 'Karachi';
document.write('City: ' + city + "<br>");
document.write('After replacement: ' + city.replace('Karachi', 'Islamabad'));

document.write("<br>");
document.write("<br>");

//task 8:
var msg = 'Ali and Sami are best friends. They play cricket and football together.';
msg = msg.replace(/and/g, '&');
document.write(msg);

document.write("<br>");
document.write("<br>");

//Task 9:
var str = '476';
document.write('Value: ' + str + "<br>");
document.write('Type: ' + typeof(str) + "<br>");
var int = parseInt(str);
document.write('Value: ' + int + "<br>");
document.write('Type: ' + typeof(int));

document.write("<br>");
document.write("<br>");

//Task 10:
var user_input = prompt("Your Input:");
document.write('User Input: ' + user_input + "<br>");
document.write('Upper case: ' + user_input.toUpperCase());

document.write("<br>");
document.write("<br>");

//Task 11:
var user_input = prompt("Your Input:");
document.write('User Input: ' + user_input + "<br>");
document.write('Title case: ' + user_input.charAt(0).toUpperCase() + user_input.slice(1));

document.write("<br>");
document.write("<br>");

//Task 12:
var num = 35.36;
document.write('Number: ' + num + "<br>");
var str = num.toString();
str = str.slice(0, 2) + str.slice(3);
document.write('Result: ' + str);

document.write("<br>");
document.write("<br>");

//Task 13:
var username = prompt("Enter your Username:");
if(username.includes(String.fromCharCode(33)) || username.includes(String.fromCharCode(44)) || username.includes(String.fromCharCode(46)) || username.includes(String.fromCharCode(64))){
    alert('Please enter a valid username');
}
else{
    alert('Username is valid');
}

//Task 14:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var matchFound = false;
for(var i = 0; i < A.length; i++){
    if(search === A[i].toUpperCase() || search === A[i].toLowerCase() || search === A[i].charAt(0).toUpperCase() + A[i].slice(1)){
        matchFound = true;
        alert(A[i] + " is available at index " + i + " in our bakery.");
        break;
    }
}
if(matchFound === false){
    alert("We are sorry. " + search + " is not available in our bakery.");
}



//Task 16:
var university = "University of Karachi";
var uniArray = university.split('');
for(var i = 0; i < uniArray.length; i++){
    document.write(uniArray[i] + "<br>");
}

document.write("<br>");
document.write("<br>");

//Task 17:
var ui = prompt("User Input:");
document.write("User input: " + ui + "<br>");
document.write("Last character of input: " + ui.charAt(ui.length - 1));

document.write("<br>");
document.write("<br>");

//Task 18:
var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: " + text + "<br>");
text = text.toLowerCase();
var occur = text.split('the').length - 1;
document.write("There are " + occur + " occurence(s) of word 'the'");

document.write("<br>");
document.write("<br>");

//Chapters # 26-30:
//Task 1:
var pos_int = +prompt("Please enter a positive integer:");
document.write("Number: " + pos_int + "<br>");
document.write("Round off value: " + Math.round(pos_int) + "<br>");
document.write("Floor value: " + Math.floor(pos_int) + "<br>");
document.write("Ceil value: " + Math.ceil(pos_int) + "<br>");

document.write("<br>");
document.write("<br>");

//Task 2:
var pos_int = +prompt("Please enter a negative floating point number:");
document.write("Number: " + pos_int + "<br>");
document.write("Round off value: " + Math.round(pos_int) + "<br>");
document.write("Floor value: " + Math.floor(pos_int) + "<br>");
document.write("Ceil value: " + Math.ceil(pos_int) + "<br>");

document.write("<br>");
document.write("<br>");

//Task 3:
var abs_value = +prompt("Enter a number to display it's absolute: ");
document.write("The absolute value of " + abs_value + " is " + Math.abs(abs_value));

document.write("<br>");
document.write("<br>");

//Task 4:
document.write("Random dice value: " + (Math.floor(Math.random() * 6) + 1) + "<br>");
document.write("Random dice value: " + (Math.floor(Math.random() * 6) + 1));

document.write("<br>");
document.write("<br>");

//Task 5:
var random = Math.floor(Math.random() * 2) + 1;
if(random === 2){
    document.write(random + "<br>");
    document.write("Random coin value: Heads");
}
else if(random === 1){
    document.write(random + "<br>");
    document.write("Random coin value: Tails");
}

document.write("<br>");
document.write("<br>");

//Task 6:
document.write("Random number between 1 and 100: " + (Math.floor(Math.random() * 100) + 1));

document.write("<br>");
document.write("<br>");

//Task 7:
var weight = prompt("Enter your weight in kilograms:");
document.write("The weight of user is " + weight);
 
document.write("<br>");
document.write("<br>");

//Task 8:
var rand = Math.round(Math.random() * 10) + 1;
var ask = +prompt("Enter a number between 1 and 10:");
if(ask === rand){
    alert("Congratulations!");
}
else{
    alert("Try again!");
}

document.write("<br>");
document.write("<br>");

//Chapters # 31-34:
//Task 1:
var current_date = new Date();
document.write(current_date);

document.write("<br>");
document.write("<br>");

//Task 2:
var month_names = ["January", "Feburary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = date.getMonth();
var current_month = month_names[month];
alert("Current Month: " + current_month);

document.write("<br>");
document.write("<br>");

//Task 3:
var day_names = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
var day = date.getDay();
var today = day_names[day];
alert("Today is " + today.slice(0, 3));

document.write("<br>");
document.write("<br>");

//Task 4:
var day_names = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
var day = date.getDay();
var today = day_names[day];
if(today === "Saturday" || today === "Sunday"){
    alert("It's Fun day!");
}
else{
    alert("It's normal day!");
}

document.write("<br>");
document.write("<br>");

//Task 5:
var date = new Date();
var dateOfMonth = date.getDate();
if(dateOfMonth < 16){
    alert("First fifteen days of the month.");
}
else{
    alert("Last days of the month.");
}

document.write("<br>");
document.write("<br>");

//Task 6:
var date = new Date();
document.write("Current Date: " + date + "<br>");
var miliseconds = date.getTime();
document.write("Elapsed milliseconds since January 1, 1970: " + miliseconds + "<br>");
var minutes = miliseconds / (1000 * 60);
document.write("Elapsed minutes since January 1, 1970: " + minutes);


//Task 7:
var date = new Date();
var hours = date.getHours();
if(hours < 12){
    alert("Its AM!");
}
else{
    alert("Its PM!");
}

document.write("<br>");
document.write("<br>");

//Task 8:
var later_date = new Date("December 31, 2020");
document.write("Later Date: " + later_date);

document.write("<br>");
document.write("<br>");

//Task 9:
var date = new Date();
var ramadan = new Date("June 18, 2015");
var passed_days = date - ramadan;
passed_days = passed_days / (1000 * 60 * 60 * 24);
document.write(Math.floor(passed_days) + " days have passed since 1st Ramadan, 2015");

document.write("<br>");
document.write("<br>");

//Task 10:
var date = new Date();
var reference = new Date("Dec 05, 2015");
var seconds = date - reference;
seconds = seconds / (1000);
document.write("On reference date " + reference + ", " + Math.floor(seconds) + " seconds had passed since beginning of 2015.");

document.write("<br>");
document.write("<br>");

//Task 11:
var date = new Date();
document.write("Current Date: " + date + "<br>");
var hours = date.getHours();
date.setHours(hours - 1);
document.write("1 hour ago, it was " + date);

document.write("<br>");
document.write("<br>");

//Task 12:
var date = new Date();
var years = date.getFullYear();
date.setFullYear(years - 100);
alert("100 years back, it was " + date);

//Task 14:
document.write("<h3>K-Electric Bill</h3>");
document.write("Customer name: ABC Customer <br>");

var month_names = ["January", "Feburary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = date.getMonth();
var current_month = month_names[month];
document.write("Current Month: " + current_month + "<br>");
var nou = 410;
document.write("Number of units: " + nou + "<br>");
var cpu = 16;
document.write("Charges per unit: " + cpu + "<br>");
document.write("<br>");
var net_amount = nou * cpu;
document.write("Net Amount Payable (within Due Date): " + net_amount + "<br>");
var late_payment = 350;
document.write("Late payment surcharge: " + late_payment + "<br>");
var gross_amount = net_amount + late_payment;
document.write("Gross Amount Payable (after Due Date): " + gross_amount);

document.write("<br>");
document.write("<br>");

//Chapters # 35-38:
//Task 1:
function date(){
    new Date();
}
document.write(date);

document.write("<br>");
document.write("<br>");

//Task 2:
function greet(fname, lname){
    return fullname = fname + lname;
}
alert('Welcome ' + greet('Harem', ' Masroor'));

document.write("<br>");
document.write("<br>");

//Task 3:
function sum(x, y){
    x = +prompt("Enter 1st number: ");
    y = +prompt("Enter 2nd number: ");
    return x + y;
}
alert("The sum of two number is " + sum());

//Task 4:
function calc(num1, oper, num2){
    if(oper === '+'){
        return num1 + num2;
    }
    else if(oper === '-'){
        return num1 - num2;
    }
    else if(oper === '*'){
        return num1 * num2;
    }
    else if(oper === '/'){
        return num1 / num2;
    }
    else{
        return 'Incorrect Operator!';
    }
}
document.write("Calculator: <br>" + calc(10, '/', 2));

document.write("<br>");
document.write("<br>");

//Task 5:
function square(x){
    return x * x;
}
document.write("The square of it's argument is " + square(5));

document.write("<br>");
document.write("<br>");

//Task 6:
function factorial(n){
    if(n === 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
document.write("The factorial of a number is " + factorial(5));

document.write("<br>");
document.write("<br>");

//Task 7:
function counting(a, b){
    a = +prompt("Enter start number:");
    b = +prompt("Enter end number:");
    document.write("Counting: <br>");
    for(var i = a; i <= b; i++){
        document.write(i + "<br>");
    }
}
counting();

document.write("<br>");
document.write("<br>");

//Task 8:
function hypotenuse(base, perp){
    base = +prompt("Enter base of a triangle:");
    perp = +prompt("Enter perpendicular of a triangle:");
    
    function calcsquare(basesq, perpsq){
        basesq = base * base;
        perpsq = perp * perp;
        return basesq + perpsq;
    }
    return calcsquare();
}
document.write("Hypotenuse of a triangle: " + hypotenuse());

document.write("<br>");
document.write("<br>");

//Task 9:
function area(width, height){
    return width * height;
}
document.write("Arguments as value: " + area(5, 6) + "<br>");
var x = 7, y = 6;
document.write("Arguments as variables: " + area(x, y));

document.write("<br>");
document.write("<br>");

//Task 10:
function palindrome(word){
//    var word = "madam";
    var check = "";
    for(var i = word.length - 1; i >= 0; i--){
        check += word[i];
    }
    
    if(word === check){
        document.write("Its a palindrome word!");
    }
    else{
        document.write("Its not a palindrome word!");
    }
}
palindrome('madam');

document.write("<br>");
document.write("<br>");

//Task 11:
function convert(str){
    var arr = str.split(' ');
    var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        arr1.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return arr1.join(' ');
}
document.write(convert("The quick brown fox"));

document.write("<br>");
document.write("<br>");

//Task 13:
function occurence(str, letter){
    count = (str.match(/o/g)).length;
    console.log(count);
}
occurence('JSResources.com', 'o');

