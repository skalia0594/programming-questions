//in: a=2, b=3
//out: a=3, b=2

const swap = (a,b) => {
    if(typeof a !== "number" || typeof b !== "number") return console.log("Error");
    console.log(`Before:: a=${a} and b=${b}`);
    a = a + b;  //a=2+3 =5
    b = a - b; //b=5-3 = 2
    a = a - b; // a=5-2 = 3
    console.log(`After:: a=${a} and b=${b}`);
}

swap(2,3);