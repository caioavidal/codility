// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sum = 0;
    let max = 0;
    let duplicated = {};
    
    for(let i = 0; i < A.length; i++){
        if(duplicated[A[i]] === true){
            return 0;
        }
        sum += A[i];
        max = A[i] > max ? A[i] : max;
        duplicated[A[i]] = true;
    }
    
    return (max / 2)*(1 + max) == sum ? 1 : 0;
}
