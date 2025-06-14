interface data<T>{
    name:string,
    age:number,
    aadhar:T
}

const p1:data<string>={
    name:"Vinay",
    age:22,
    aadhar:"12345"
}

console.log(p1);

const p2:data<number>={
    name:"Vinay",
    age:22,
    aadhar:12345
}

console.log(p2);
console.log(p2);

console.log(p1);


interface displayInfo<u,v>{
    name:string,
    age:number
    address:u,
    gender:v
}

const displayInfoObj:displayInfo<string,string>={
        name:"Vinay",
        age:22,
        address:"Hyderabad",
        gender:"male"
}

console.log(displayInfoObj);