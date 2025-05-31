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