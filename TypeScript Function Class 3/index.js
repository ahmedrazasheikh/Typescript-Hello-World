console.log('File Number Threee');
function typeScriptF(value) {
    console.log(value + 'is  accept only  String ');
}
typeScriptF("Ahmed Raza ");
var typeScriptF2 = function (value) {
    console.log(value + 'is  accept only  String ');
};
typeScriptF2();
var typeScriptF3 = function (value) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    console.log("First Value is ".concat(value));
    console.log("The Second Value is ".concat(data));
};
typeScriptF3("Ahmed Raza ", "A", "B", "C", "D", "E");
function getData(name) {
    if (name === void 0) { name = "Ahmed Raza Nadeem  "; }
    console.log("Impicit Return " + name);
    return name;
}
getData();
// It define return type impicitly 
function getData2(name) {
    if (name === void 0) { name = "Ahmed Raza Muhammad   "; }
    console.log("Expicitly  Return " + name);
    return name;
}
getData2();
// let aboutAhmed  :(name : string) =>number
// aboutAhmed = (name : string) =>{
//     return"ASDASD" 
// }
// aboutAhmed("SADASD")
var name2;
name2 = function () {
    console.log("This Function is Working Properly ");
    return 3;
};
name2();
var rtm;
rtm = function (name) { return "Hello ".concat(name, " By Typescript Function "); };
rtm("Raza");
