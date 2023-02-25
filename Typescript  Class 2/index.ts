let  firstName:string = "John"; 
let  totalMarks:number = 550; 
let  obtainMarks:number = 500; 
let  lastName:string = "Ahmed Raza"; 
console.log(firstName);
console.log(lastName);
firstName = "Muhammad"
lastName = "Saad"
console.log(firstName);
console.log(lastName);
console.log(totalMarks)
console.log(obtainMarks)


var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str))
console.log(typeof(str2) + "Ahmed Raza")

console.log('Ahmed Raza Jafri');
console.log(firstName);



type ahmedPakistan = {
    name : string, 
    age : number, 
    intelligent  : boolean, 
    skills : string[], 
    propeties : {
        Color : string, 
    }

}
type ahmedOverseace = {
    name : string, 
    age : number, 
    intelligent  : boolean, 
    skills : string[], 
    propeties : {
        Color : string, 
        shirt : ()=>{}, 
    }, 
    isPink? : boolean, 
}

type ahmed = ahmedPakistan |ahmedOverseace
function raza (){
    console.log('Ahmed Raza')
}


const AhmedData:ahmed = {
    name : "Ahmed Raza", 
    age : 34 , 
    intelligent : false,
    skills : ["S", "D" , "D" , ], 
    propeties:{
        Color : "black", 
    }, 
    isPink : true
}



console.log(AhmedData)