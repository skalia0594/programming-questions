// You are a robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed. 
// However, you cannot rob any two adjacent houses
// in : [10, 1, 899, 1000], 
//out: the max you can rob is 1010.

const houseRobber = houses => {
    if(houses.length === 0) return 0;
    if(houses.length === 1) return houses[i];
    const maximumRobbery = [houses[0], Math.max(houses[0], houses[1])];
    for(let i=2 ; i< houses.length; i++) {
        const nextMaximum = Math.max(maximumRobbery[i-1], houses[i]+ maximumRobbery[i-2]);
        maximumRobbery.push(nextMaximum);
    }
    return maximumRobbery[maximumRobbery.length - 1];
}

console.log(houseRobber([10, 1, 899, 1000]));