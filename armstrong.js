function armstrong(num) {
    let dig = num.toString().length;
    let sum = 0;
    let a = num;
    while (a > 0) {
        let remainder = a % 10;               
        sum += remainder ** dig;      
        a = Math.floor(a / 10);            
    }
    if (sum === num) {
        return num + " is Armstrong";
    } else {
        return num + " is not Armstrong";
    }
}
console.log(armstrong(153));
console.log(armstrong(123));