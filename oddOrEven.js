function oddEven(num){
    return (num%2 == 0)? "even" : "odd";
}
console.log("Function " +oddEven(3));


//--------------
function odd(n){
    let a=n.filter(acc=>acc%2==0);
    return a;
}
console.log(odd([2,3,4,5]));
