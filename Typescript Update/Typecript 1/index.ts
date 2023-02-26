let Name:string = "Ahmed Raza"
let FatherName:string = "Muhammad Nadeem"
let intelligent:boolean = true
let  percentage:number = 34  
console.log(Name);
console.log(percentage);


let getData = (a:number,b:number,c:number)=>{
    return a+ b+ c
}
let finalValue:number =     getData(20,30,50)
console.log(finalValue)

// Function with return in typescript 

const combineValue = (firstName: string , lastName:string):string =>{
    return firstName + lastName
}
let completeName:string = combineValue("Ahmed" , "Raza")
console.log(completeName)

// Function with no Return 
const functionWithNoReturn = (number:number):void=>{
for (let index = 1; index <= 10; index++) {
    console.log(index * number )
}
} 
// Pass here any number to see the table 
functionWithNoReturn(3)


const returnObj = (firstName : string , LastName : string , Class? : string):{}=>{
    return{
      Name : firstName + LastName, 
      Class : Class, 
    }
}
const obj:object=returnObj("Ahmed " , "Raza" , "1st Year")
console.log(obj)


// Aliasis 
type myString = string
const brotherName:myString = "Muhammad Saad"
console.log(brotherName)

type login = {
    Email : string, 
    password : string,
}
const loginFunction = (data : login):{}=>{
    return data
}
const loginVariable =    loginFunction({"Email" : "bhaia9036@gmail.com" , "password" : "nadeemjafri12"})
console.log(loginVariable)

type userInformation = {
    // Here we use readonly for this purpose you could not change readonly  value  
      readonly  _id : string , 
      userName : string, 
      Password : string,
}
const dataofUser:userInformation = {
       _id : "Ahmrf Raza",
    userName : "Ahmed Raza", 
    Password : "nadeemjafri12"
}


type nameInformation = {
    name :string
}
type fulladdress = {
    fulladdress :string
}
type partialInformation  =  nameInformation | fulladdress
type fullInformation =  nameInformation & fulladdress


const   checkInformatio:fullInformation = {
    name : "Ahmed ", 
    fulladdress : "DFdfsdf"  }


const   checkInformatios:partialInformation = {
    name : "Ahmed "
}


console.log(checkInformatio)
console.log(checkInformatios)

// Here we discuss about Array 
type useInformattion3 = {
    username : string, 
    password : string
}
const array:  useInformattion3[] = []

for (let index = 0; index < 10; index++) {
    array.push({username : "Ahmed ", password : "nadeemjafri12"})
}
console.log(array)


const data:number[] = [1,34,4,5,]
const data2:number[] |string[]  = ["Ahmed Raza", "Muhammad Saad"    , "Muhammad Nadeem"]
// Here is the Common diffrence in the data3
const data3:(number |string | boolean)[]  = ["Ahmed Raza",234 , true,  false ,    "Muhammad Saad"    , "Muhammad Nadeem"]
// here is onther method of tuples to assing more than one data types to array  
let  pCitiesP:[string, number , boolean]
pCitiesP = ["Ahmed Raza", 22,true]
console.log(pCitiesP);

interface client  {
    name : string, 
    budget : number,    
}
const clientData:client = {name : "John Smit ", budget : 34} 
console.log(clientData);

// Here i'm discuss about using of <Type> below 
// it will automitically decide return value according to the return value 
function name2<Type>(params:Type) {
 return params   
}

let data5 = name2("Muhammad Ahmed Raza Abbasi")
console.log(data5);
