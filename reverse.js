function reverseName(name){
    let rev="";
    for(let i=name.length-1;i>=0;i--){
        rev+=name[i];
    }
    return rev;
}
console.log(reverseName("Chennai"));
//---------------------
function reverseNameReduce(name){
    return name.split('').reduce((rev, char) => char + rev, '');
}
