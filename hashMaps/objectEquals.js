//in : are two objects equal

const a= {
    name:"Shubham",
    age: 26,
    address: {
        hno: 21,
        street: "Jack Rabbit"
    },
    interests: ["coding", "cooking", "music"],
    grades: [
        {Maths: 90, tests:{t1:50, t2: 60}},
        {Science: 80, tests:[50, 60]}
    ]
}  
const b= {
    name:"Shubham",
    age: 26,
    address: {
        hno: 21,
        street: "Jack Rabbit"
    },
    interests: ["coding", "cooking", "movie"],          //change 
    grades: [
        {Maths: 90, tests:{t1:50, t2: 60}},
        {Science: 80, tests:[50, 60]}
    ]
}

const checkObjectEquality = (obj1, obj2) => {
    if(obj1 === null && obj2 === null) return true;
    else if(obj1 === null || obj2 === null) return false;
    if(typeof obj1 === "undefined" || typeof obj2 === "undefined") return false;
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for(const key in obj2) {
        if(typeof obj1[key] === "undefined") { return false}
        else if(obj2[key] !== null && typeof obj2[key] === "object") {
            if (!checkObjectEquality(obj1[key], obj2[key])) return false;
        }else{
            if(obj1[key] !== obj2[key]) return false;
        }
    }
    return true;
}
console.log(checkObjectEquality(a,b));