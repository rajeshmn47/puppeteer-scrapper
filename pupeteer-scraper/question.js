console.log(["a"] + ["b"]); // "ab"
console.log([2,3,4,] + [4,2,2,2]); // ""
console.log(![] + []); // "false", because ![] returns false.
k={}
a='rajesh went to delhi'
for(i=0;i<a.length;i++){
    if(k[a[i]]){
        k[a[i]]=k[a[i]]+1 
    }
    else{
        k[a[i]]=1
    }
}
function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return a.value - b.value; });
    l={}
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    for(i=0;i<arr.length;i++){
l[arr[i].key]=arr[i].value
    }
    
    
    return l; // returns array
}
s=sortObject(k)
console.log(s,k)
const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)
);

console.log(sortable);