function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sum = 0;
    let max = 0;

    for(let i = 0; i < A.length; i++){
        sum += A[i];
        max = A[i] > max ? A[i] : max;
    }
    
    let missing = ((max / 2)*(1 + max)) - sum;
    return missing == 0 ? max + 1 : missing;
}
