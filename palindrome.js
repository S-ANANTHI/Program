function p(name){
    let rev = "";
    for(let i = name.length-1; i>=0; i--){
        rev+=name[i];
    }
    return name==rev?"Palindrome":"not a palindrome";
}
console.log(p("malayalam"));
console.log(p("MAlayalam"));

//---------------------
let a=(word)=>{
    let c="";
    for (let i=word.length-1;i>=0;i--){
        c+=word[i];
    }
    if (word==c){
        return "P";
    }else return "not p";
}
console.log(a("malayalam"));
//-----------------

let z= (words)=>{
    let y = words.split("").reverse().join("");
    return (words==y) ?"p":"not p";
}
console.log(z("malayalam"));
