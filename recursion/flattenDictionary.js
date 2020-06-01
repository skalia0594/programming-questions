//in : { a: "b", c: { d: "e"} }
//out: { a: "b", "c.d": "e"}


const flattenDictionary = (obj, key, out) => {
    if (!out) out = {}; 
    for(let k in obj) {
        const combinedKey = key ? `${key}.${k}` : k;
        if(obj[k] !== null && typeof obj[k] === "object"){
            flattenDictionary(obj[k], combinedKey, out);
        }else{
            out[combinedKey] = obj[k];
        }
        
    }
    return out;
}

console.log(flattenDictionary({ a: "b", c: { d: "e"} }));