console.log('File Number Threee')
function typeScriptF(value : string){
    console.log(value+ 'is  accept only  String ')
}
typeScriptF("Ahmed Raza ")
const typeScriptF2 = (value?: string)=>{
    console.log(value+ 'is  accept only  String ')   
}

typeScriptF2()
const typeScriptF3 = (value : any , ...data : string[])=>{
console.log(`First Value is ${value}`)
console.log(`The Second Value is ${data}`)
}
typeScriptF3("Ahmed Raza " ,  "A", "B", "C" , "D" ,"E")
function getData (name = "Ahmed Raza Nadeem  "){
console.log("Impicit Return " + name );


    return name
}
getData()



// It define return type impicitly 

function getData2 (name = "Ahmed Raza Muhammad   "):string{
    console.log("Expicitly  Return " + name );
    
    
        return name
    }
    getData2()

    // let aboutAhmed  :(name : string) =>number
    // aboutAhmed = (name : string) =>{
    //     return"ASDASD" 
    // }
    // aboutAhmed("SADASD")


    let name2   :() =>   string | number

    name2 = ()=>{
        console.log("This Function is Working Properly ")
        return 3
    }
    name2()





let rtm: (name: string) => string; 

rtm = (name) => (`Hello ${name} By Typescript Function `

)


rtm("Raza")