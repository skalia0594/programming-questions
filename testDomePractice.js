// function ensure(value) {
//     // Your code goes here
//     if(typeof value === "undefined") throw new Error();
//     else return value;
//   }
  
//   try {
//     console.log(ensure());
//   } catch(err) {
//     console.log(err);
//   }



// function removeProperty(obj, prop) {
//     if(typeof(obj[prop]) !== "undefined") {
//       delete obj[prop]; 
//       return true;
//     }  
//     return false;
// }
  


// function formatDate(userDate) {
//     // format from M/D/YYYY to YYYYMMDD
//     const arr = (userDate.trim()).split('/');
//     if(arr[0].length=== 1) arr[0]= "0".concat(arr[0]); 
//     if(arr[1].length=== 1) arr[1]= "0".concat(arr[1]); 
//     const date = ''.concat(arr[2],arr[0],arr[1]);
//     return date;
//   }
  
//   console.log(formatDate("12/31/2014"));





// function setup() {
//     // Write your code here.
    const elements = document.getElementsByClassName("remove");
    const values = Object.values(elements);
    values.map(each => each.addEventListener('click', () => each.parentElement.remove()));
// }







// function createCheckDigit(membershipId) {
//     // Write the code that goes here.
//     return addDigits(membershipId);
//   }
  
// const addDigits = str => {
//     if(str.length===1) {
//         return str;
//     }
//     let result = 0;
//     let i=0;
//     while(i< str.length) {
//         result += Number(str[i]);
//         i++;
//     }
//     return addDigits(result.toString());
// }
// console.log(createCheckDigit("9999"));








// function registerHandlers() {
//     var as = document.getElementsByTagName('a');
//     const values = Object.values(as);
//     values.map((each,index) => {
//         each.addEventListener('click', () => alert(index));
//       each.href = "#"
//     });
//   }
  
//   registerHandlers();








// function appendChildren(decorateDivFunction) {
//     var allDivs = Object.values(document.getElementsByTagName("div"));
//     allDivs.map(sdiv => {
//       var newDiv = document.createElement("div");  
//       decorateDivFunction(newDiv);
//       sdiv.appendChild(newDiv);
//     });
// }








// function showCustomers(customers, targetList) {
//     // Your code goes here
//     customers.forEach(cus => {
//       const li = document.createElement('li');
//       const p1 = document.createElement('p');
//       li.appendChild(p1).innerHTML=cus.name;
//       const p2 = document.createElement('p');
//       p1.addEventListener('click', () =>{ 
//         if (li.children.length === 1)  
//           li.appendChild(p2).innerHTML=cus.email;
//         else
//           p2.remove();                                 
//       });
//       targetList.appendChild(li);
//     });
// }
  




// .avatar{
//     border-style: solid;
//     border-color: gray;
//     border-width: 2px;
//     height: 150px;
//     width: 150px;
//     border-radius: 50%;
//   }