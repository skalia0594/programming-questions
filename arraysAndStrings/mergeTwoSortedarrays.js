//in: [2,5,6,9], [1,2,3,29]
//out: [1, 2, 2, 3, 5, 6, 9, 29]

const mergeTwoSortedArrays = (arr1, arr2) => {
    if (arr1.length < 1) return arr2;
    else if (arr2.length < 1) return arr1;
    let i=1, j=1, elementfrom1 = arr1[0], elementfrom2 = arr2[0];
    const merge =[];
    while(elementfrom1 || elementfrom2) {
        if((elementfrom1< elementfrom2) || (elementfrom1 && !elementfrom2) ) {
            merge.push(elementfrom1);
            elementfrom1 = arr1[i++];
        }else {
            merge.push(elementfrom2);
            elementfrom2 = arr2[j++];
        }
    }
    return merge;
}

console.log(mergeTwoSortedArrays([2,5,6,9,10,15], [1,2,3,29]));