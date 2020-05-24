//in:- merge objects of array.
const a= [{
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
},
{
    name:"Anshu",
    age: 28,
    address: {
        hno: 23,
        street: "Rockleigh"
    },
    interests: ["dentistry", "cooking", "music"],
    grades: [
        {Maths: 70, tests:{t1:40, t2: 50}},
        {Science: 90, tests:[70, 80]}
    ]
}]  

const b= [{
    name:"Anshu",
    age: 28,
    address: {
        hno: 23,
        street: "Rockleigh"
    },
    interests: ["dentistry", "cooking", "music"],
    grades: [
        {Maths: 70, tests:{t1:40, t2: 50}},
        {Science: 90, tests:[70, 90]}                   //some change
    ]
}]
// console.log([...a, ...b]);
const mergeArrayOfObjects = (arr1, arr2) => {
    if(arr1 === null && arr2 === null) return;
    else if(arr2 === null && Array.isArray(arr1)) return arr1;
    else if(arr1 === null && Array.isArray(arr2)) return arr2;
    let temp = {}, result =[];
    for(const key in arr1) {
        const newKey = JSON.stringify(arr1[key]);
        if(!temp[newKey]) {
            temp[newKey] = true;
            result.push(arr1[key]);
        }
    }
    for(const key in arr2) {
        const newKey = JSON.stringify(arr2[key]);
        if(!temp[newKey]) {
            temp[newKey] = true;
            result.push(arr2[key]);
        }
    }
    return result;
}

console.log(mergeArrayOfObjects(a,b));