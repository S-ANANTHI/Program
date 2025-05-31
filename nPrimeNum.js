function nPrime(n) {
    let count = 0;
    let num = 2;
    let res = [];  
    while (count < n) {
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if(prime) {
            res.push(num);  
            count++;
        }
        num++; 
    }
    return res;  
}
console.log(nPrime(5)); 