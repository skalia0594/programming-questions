//given : create new object, copy from given object

const marks = [
    {test1:80, test2:70, test3:{a1:90,a2:2}},
    [1,2],
    "hello",
    50
]
console.log("original object-->",marks);

// shallow copy
const shallowCopyObj = [...marks];  
console.log("shallowCopyObj::", shallowCopyObj);

//deepCopy
const deepCopy = obj => {
    if(obj ===null || typeof obj !=="object") { return obj }
    let output = Array.isArray(obj)? [] : {};
    for(let key in obj) {
        output[key] = deepCopy(obj[key]);
    }
    return output;    
}
const  deepCopyObj = deepCopy(marks);
console.log("deepCopyObj::",deepCopyObj);

//perform some action on deep copied element
deepCopyObj[0].test1=100; 
deepCopyObj[0].test3["a2"]=100; 
deepCopyObj[1][0] = 10;
deepCopyObj[2] = "change";
deepCopyObj[3] = 121;
console.log("Afteroperation deep copied obj-->", deepCopyObj)
console.log("After operation on deep Copied obj the original object remain same--->",marks);

//perform some action on shallow copied element
shallowCopyObj[0].test1=100;
shallowCopyObj[0].test3["a2"]=100;  
shallowCopyObj[1][0] = 10;
shallowCopyObj[2] = "change"
shallowCopyObj[3] = 121;
console.log("After operation shallow copied obj-->", shallowCopyObj);
console.log("After operation on shallow Copied obj the original object becomes--->",marks);


