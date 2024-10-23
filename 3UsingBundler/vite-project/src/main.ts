type Person={name:string;
     age:number;
      isProgrammer?:boolean;
       friends:string[];
       address:{
        street:string
       }
    }


const person:Person={
    name:"kyle",
    age:32,
   friends:[],
     address:{
        street:"Main st."
     }
}

type Person1=number
const on:Person1=4

// const person2:Person={name:"Sally",age:23,friends:[]}


interface Person2 {
    name:string;
    age:number;
     isProgrammer?:boolean;
      friends:string[];
      address:{
       street:string
      }
   }


const person2:Person2={
   name:"kyle",
   age:32,
  friends:[],
    address:{
       street:"Main st."
    }
}

function printName(name:string,name2:string) {
    console.log(name)
}

function sum(a:number,b:number):number {
    return a+b
}

const c=sum(1,2)

function printPerson(person:{name:string,age:number}) {
    console.log(person.name)
}

printPerson({name:"Kyle",age:28})

