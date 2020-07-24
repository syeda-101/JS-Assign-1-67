//Chapters # 38-42:
//Task 1:
function power(a, b){
    var pow = 1;
    if(b === undefined){
        b = 2;
    }
    for(var i = 1; i<=b; i++){
        pow = pow * a;
    }
    document.write("<br>Cube of a number is: " + pow);
}
power(5, 3);

//Task 2:
function leapYear(year){
    year = +prompt("Enter the year:");
    if(year % 4 === 0 || year % 400 === 0){
        alert("Year is a leap year!");
    }
    else{
        alert("Year is not a leap year!");
    }
}
leapYear();

//Task 3:
var a = 3, b = 4, c = 5;
function S(){
    return (a + b + c) / 2;
}

function area(){
    return S()*(S() - a)*(S() - b)*(S() - c);
}
document.write("<br>Area of triangle is: " + area());

//Task 4:
var sub1 = 58, sub2 = 34, sub3 = 96;
function marksRec(){
    document.write("<br>" + average());
    document.write("<br>" + percentage() + "%");
    return sub1 + sub2 + sub3;
}

function average(){
    return (sub1 + sub2 + sub3) / 3;
}

function percentage(){
    return (((sub1 + sub2 + sub3) / 300) * 100);
}
document.write("<br>Marks Record: " + marksRec());

//Task 5:
function indOf(str, index){
    var arr = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === index){
            arr.push(i);
        }
    }
    document.write("<br>" + arr.toString());
}
indOf('Shahzaib', 'z');

//Task 6:
function remove_vowels(sentence){
    if(sentence.length > 25){
        alert("Sentence must be 25 characters or less!");
    }
    else{
        return sentence.replace(/[aeiou]/gi, '');
    }
}
document.write("<br> Remove Vowels: " + remove_vowels("Syeda Harem Masroor"));

//Task 7:
var line = 'Pleases read this application and give me gratuity';
var arr = [];
var count = 0;
for(var i = 0; i < line.length; i++){
    arr.push(i);
    switch(line[i]){
        case 'a':
            count++;
            break;
        case 'e':
            count++;
            break;
        case 'i':
            count++;
            break;
        case 'o':
            count++;
            break;
        case 'u':
            count++;
            break;
        default:
            count;
    }
}
document.write("<br>" + count);

//Task 8:
var distance = +prompt("Distance between two cities (in km):");
function kmtom(){
    var meter = distance * 1000;
    document.write("<br>" + "Distance in meters: " + meter);
}
function kmtofeet(){
    var feet = distance * 3281;
    document.write("<br>" + "Distance in feet: " + feet);
}
function kmtoinch(){
    var inch = distance * 39370;
   document.write("<br>" + "Distance in inches: " + inch);
}
function kmtocenti(){
    var centi = distance * 100000;
   document.write("<br>" + "Distance in centimeters:" + centi);
}
kmtom();
kmtofeet();
kmtoinch();
kmtocenti();

//Task 9:
function overtimepay(workingHours){
    if(workingHours > 40){
        var overTime = workingHours - 40;
        var payment = overTime * 12.00;
        document.write("<br>" + "Your overtime pay is Rs. " + payment);
    }
    else{
        document.getElementById("<br>" + "You are not eligible for overtime pay.");
    }
}
overtimepay(48);

//Task 10:
function withdraw(){
var amount = +prompt("Enter amount to withdraw:");
var hund = Math.floor(amount / 100);
var fifty = Math.floor((amount % 100) / 50);
var ten = Math.floor(((amount % 100) % 50) /10);
document.write("<br>" + "You will have " + hund + " hundred note(s) " + fifty + " fifity note(s) " + ten + " ten note(s)");
}
withdraw();


//Chapters # 43-48:
//Task 1:
var link = document.write("<br><a id='link' href='#'>Click me</a>");
document.getElementById("link").setAttribute('onclick', "alert('Hello World')");

//Task 2:
var images = document.getElementsByClassName("images");
for(var i = 0; i < images.length; i++){
    images[i].style.cursor = 'pointer';
    images[i].setAttribute('onclick', "alert('Tis is beautiful sight!h')");
}

//Task 3:
var table_row = document.getElementsByClassName("tr");
for(var i = 0; i < table_row.length; i++){
    table_row[i].innerHTML = i;
}
function deleteRow(row){
    var del = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(del);
    var newIndex = document.getElementsByClassName("tr");
    for(var j = 0; j < newIndex.length; j++){
        newIndex[j].innerHTML = j;
    }
}

//Task 4:
document.getElementById("nature").onmouseover = function(){
    this.src = 'nature2.jpg';
};
document.getElementById("nature").onmouseout = function(){
    this.src = 'nature1.jpg';
}

//Task 5:
var count = 0;
document.getElementById("counter").innerHTML = count;
document.getElementById("inc").onclick = function(){
    count++;
    document.getElementById("counter").innerHTML = count;
};
document.getElementById("dec").onclick = function(){
    count--;
    document.getElementById("counter").innerHTML = count;
};


//Chapters # 49-52:
//Task 1:
document.getElementById("submit").onclick = function(){
    var name = document.getElementById("name").value;
    document.getElementById("formDiv").innerHTML += 'Name: ' + name + "<br>";
    var email = document.getElementById("email").value;
    document.getElementById("formDiv").innerHTML += 'Email: ' + email + "<br>";
    var age = document.getElementById("age").value;
    document.getElementById("formDiv").innerHTML += 'Age: ' + age + "<br>";
    var password = document.getElementById("password").value;
    document.getElementById("formDiv").innerHTML += 'Password: ' + password + "<br>";
};

//Task 2:
document.getElementById("seeMore").onclick = function(){
    document.getElementById("para").innerHTML = 'Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Readmore” button, full detail of that particular item will be displayed.';
};

//Task 3:
document.getElementById("save").onclick = function(){
    var stdName = document.getElementById("stdName");
    var stdClass = document.getElementById("stdClass");
    var stdMobile = document.getElementById("stdMobile");
    var stdEmail = document.getElementById("stdEmail");
    var body = document.getElementById("body");
    var tableData = document.getElementById("stdTable");
    
    tableData.innerHTML += "<td id='names'>" + stdName.value + "</td><td id='classes'>" + stdClass.value + "</td><td id='mobiles'>" + stdMobile.value + "</td><td id='emails'>" + stdEmail.value + "</td><td><button class='delete' onclick='deleterow(this)'>Delete</button></td><td><button class='edit' onclick='editRow(this)'>Edit</button></td>";
    
    document.getElementById("stdName").value = null;
    document.getElementById("stdClass").value = null;
    document.getElementById("stdMobile").value = null;
    document.getElementById("stdEmail").value = null;
};

function deleterow(rows){
    var dlt = rows.parentNode.parentNode.rowIndex;
    document.getElementById("stdTable").deleteRow(dlt);
}

function editRow(row){
    var edit = row.parentNode.parentNode.rowIndex;
    var stName = document.getElementById("stdTable").rows[edit].cells[0].innerHTML;
    var stClass = document.getElementById("stdTable").rows[edit].cells[1].innerHTML;
    var stMobile = document.getElementById("stdTable").rows[edit].cells[2].innerHTML;
    var stEmail = document.getElementById("stdTable").rows[edit].cells[3].innerHTML;

    document.getElementById("hiddenForm").innerHTML = 
        "<form>" +
        "<fieldset>" +
        "<legend>Edit Student Details</legend>" +
        "<label for='name'>Student Name:</label>" +
        "<input id='name' type='text' value=' " + stName + " '>" +
        "<label for='name'>Student Class:</label>" +
        "<input id='class' type='text' value=' " + stClass + " '>" +
        "<label for='name'>Student Mobile No.</label>" +
        "<input id='mobile' type='text' value=' " + stMobile + " '>" +
        "<label for='name'>Student Email:</label>" +
        "<input id='email' type='text' value=' " + stEmail + " '>" +
        "</fieldset>" +
        "</form>";
}


//Chapters # 53-57:
//Task 1:
function modal(x, y){
    var images = document.getElementsByClassName("images1");
    for(var i = 0; i < images.length; i++){
        images[i].setAttribute(x, y);
    }
    document.getElementById("body").style.backgroundColor = 'rgba( 0, 0, 0, 0.359 )';
    document.getElementById("picModal").style.display = 'block';
}
function btnClose(){
    document.getElementById("body").style.background = 'none';
    document.getElementById("picModal").style.display = 'none';
}

//Task 2:
var fontSize = 14;
document.getElementById("zoomIn").onclick = function(){
    fontSize += 10;
    document.getElementById("fontPara").style.fontSize = fontSize + 'px';
};
document.getElementById("zoomOut").onclick = function(){
    fontSize -= 10;
    document.getElementById("fontPara").style.fontSize = fontSize + 'px';
};


//Chapters # 58-67:
//Task 1:
// i.
var main_content = document.getElementById("main-content");
// ii.
var displayChild = main_content.childNodes;
document.write("<br><br>All Child Elements of 'main-content' element:" + "<br>")
for(var i = 0; i < displayChild.length; i++){
    document.write(i + ":" + displayChild[i].innerHTML + "<br>");
}
// iii.
document.write("<br>");
document.write("Show innerHTML of all elements of class render: <br>");
var render = document.getElementsByClassName("render");
for(var i = 0; i < render.length; i++){
    document.write(render[i].innerHTML + "<br>");
}
// iv.
var fname = document.getElementById("first-name").value = "Harem";
document.write("<br> Fill input value of element whose id='first-name': " + fname + "<br>");
// v.
var lname = document.getElementById("last-name").value = "Masroor";
document.write("Fill input value of element whose id='last-name': " + lname + "<br>");
var email = document.getElementById("email").value = "harem.cd@gmail.com";
document.write("Fill input value of element whose id='email': " + email + "<br>");

//Task 2:
// i.
var nodeType = document.getElementById("form-content").nodeType;
document.write("<br>" + "Node type of element having id 'form-conetnt': " + nodeType);
// ii.
var nodeTypeLast = document.getElementById("lastName").nodeType;
document.write("<br>" + "Node type of element having id 'lastName' is " + nodeTypeLast);
var childNodesLast = document.getElementById("lastName").childNodes;
for(var i = 0; i < childNodesLast.length; i++){
    document.write(" And its child node is " + childNodesLast[i].nodeType);
}
// iv.
var firstChild = document.getElementById("main-content").firstChild;
var lastChild = document.getElementById("main-content").lastChild.innerHTML;
document.write("<br>First and Last Child of element having id 'main-content' are: " + firstChild.innerHTML + " and " +lastChild);
// v.
var nextSib = document.getElementById("lastName").nextSibling;
var preSib = document.getElementById("lastName").previousSibling;
document.write("<br>Next and Previous Siblings of id 'lastName' are: " + nextSib.innerHTML + " and " + preSib.innerHTML);
// vi.
var parentnode = document.getElementById("email1").parentNode;
var emailNode = document.getElementById("email1").nodeType;
document.write("<br>Parent node of element having id 'email' is: " + parentnode.nodeName + " and it's node type is: " + emailNode);
