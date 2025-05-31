function vowelCount(name){
    let count = 0;
    let vowelChar = [];
    let vowel = "aeiou";
    for(let i=0; i<=name.length-1; i++){
        for(let j =0;j<=vowel.length; j++){
            if(name[i]==vowel[j]){
                count+=1;
                vowelChar.push(name[i]);
            }
        }
    }
    return count + " "+ vowelChar;
}
console.log(vowelCount("Chennai"));