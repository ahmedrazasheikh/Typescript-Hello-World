const numberofStudent : number[] = [100,333,44,5,6,77,888,123]
console.log(numberofStudent);
 

let name2 : ()=>   string[]
name2 = ()=> ["Ahmed " , "Raza" , "Saad", "Nadeem" , "Muhammad"]




let functionofArray : (()=>string )[]
functionofArray = [()=>"Ahmed Raza",  ()=>"Ahmed Raza" , ()=>"Ahmed Raza" , ()=>"Ahmed Raza" ]  

for (let index = 0; index < name2.length; index++) {
    console.log(name2);
    
}




let mixplate : (string | number) [];
mixplate = ["Ahmed Raza " , 23, "Ali Abbas" , 56, "Muhammad Nadeem"]
for (let index = 0; index < mixplate.length; index++) {
    console.log(mixplate[index]);
}

