function anagram(name1, name2){
     if (name1.length !== name2.length) {
        return false;
     }
    return name1.toLowerCase().split("").sort().join("") === name2.toLowerCase().split("").sort().join("");
}
console.log(anagram("Listen", "Silent"));
console.log(anagram("Fight", "fought"));