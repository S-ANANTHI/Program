function secondLarge(arr){
    first = arr[0];
    second = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (first < arr[i]){
            second = first;
            first = arr[i];
        }else if (second < arr[i]){
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLarge([12,62,33,6,100,45]));