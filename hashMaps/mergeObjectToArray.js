//in: merge objects
const fs =require('fs');
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
}]  

const b= {
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
}
const data = { data : [...a,{...b}] }
const out = JSON.stringify(data, null, 4);

const writeData = (data) => {
    fs.writeFile("/Users/shubhamkalia/Desktop/commonProgrammingQuestions/programming-questions/hashMaps/output.json", data, (err) => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
}

writeData(out);