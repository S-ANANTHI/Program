function duplicate(arr){
    let newArr = [];
    for (let i=0;i<=arr.length;i++){
        let duplicateExist=false;
        for(let j=0;j<=newArr.length;j++){
            if(arr[i]==newArr[j]){
                duplicateExist=true;
                break;
            }
        }
        if(!duplicateExist){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(duplicate([1, 2, 2, 3, 4, 4, 5]));
console.log(duplicate(['a','q','r','a']));

//------------------
arr=[6,9,5,4,7,3,6,3];
let a=arr.reduce((acc,val) => {
    if(acc[val]) 
        acc[val]++;
    else 
        acc[val]=1;
    return acc;
    }
    ,{} ); 
console.log(a)

//---------------------
arr2=[6,9,5,4,7,3,6,3];
let b=arr2.reduce((acc,val) => {
    if(!acc.includes(val)) 
        acc.push(val);
    return acc;
    }
    ,[] ); 
console.log(b)
