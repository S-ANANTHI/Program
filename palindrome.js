function p(name){
    let rev = "";
    for(let i = name.length-1; i>=0; i--){
        rev+=name[i];
    }
    return name==rev?"Palindrome":"not a palindrome";
}
console.log(p("malayalam"));
console.log(p("MAlayalam"));