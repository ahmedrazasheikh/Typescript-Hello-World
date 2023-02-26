var Name = "Ahmed Raza";
var FatherName = "Muhammad Nadeem";
var intelligent = true;
var percentage = 34;
console.log(Name);
console.log(percentage);
var getData = function (a, b, c) {
    return a + b + c;
};
var finalValue = getData(20, 30, 50);
console.log(finalValue);
// Function with return in typescript 
var combineValue = function (firstName, lastName) {
    return firstName + lastName;
};
var completeName = combineValue("Ahmed", "Raza");
console.log(completeName);
// Function with no Return 
var functionWithNoReturn = function (number) {
    for (var index = 1; index <= 10; index++) {
        console.log(index * number);
    }
};
// Pass here any number to see the table 
functionWithNoReturn(3);
var returnObj = function (firstName, LastName, Class) {
    return {
        Name: firstName + LastName,
        Class: Class
    };
};
var obj = returnObj("Ahmed ", "Raza", "1st Year");
console.log(obj);
var brotherName = "Muhammad Saad";
console.log(brotherName);
var loginFunction = function (data) {
    return data;
};
var loginVariable = loginFunction({ "Email": "bhaia9036@gmail.com", "password": "nadeemjafri12" });
console.log(loginVariable);
var dataofUser = {
    _id: "Ahmrf Raza",
    userName: "Ahmed Raza",
    Password: "nadeemjafri12"
};
var checkInformatio = {
    name: "Ahmed ",
    fulladdress: "DFdfsdf"
};
var checkInformatios = {
    name: "Ahmed "
};
console.log(checkInformatio);
console.log(checkInformatios);
var array = [];
for (var index = 0; index < 10; index++) {
    array.push({ username: "Ahmed ", password: "nadeemjafri12" });
}
console.log(array);
var data = [1, 34, 4, 5,];
var data2 = ["Ahmed Raza", "Muhammad Saad", "Muhammad Nadeem"];
// Here is the Common diffrence in the data3
var data3 = ["Ahmed Raza", 234, true, false, "Muhammad Saad", "Muhammad Nadeem"];
// here is onther method of tuples to assing more than one data types to array  
var pCitiesP;
pCitiesP = ["Ahmed Raza", 22, true];
console.log(pCitiesP);
var clientData = { name: "John Smit ", budget: 34 };
console.log(clientData);
// Here i'm discuss about using of <Type> below 
// it will automitically decide return value according to the return value 
function name2(params) {
    return params;
}
var data5 = name2("Muhammad Ahmed Raza Abbasi");
console.log(data5);
