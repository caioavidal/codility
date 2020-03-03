// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 1;
    
    let numbers = {};
    
    for(let i = 0; i < A.length; i++){
        if(A[i] < 1){
            continue;   
        }
        max = A[i] > max ? A[i] : max;
        
        numbers[A[i]] = true;
    }

    for(let i = 1; i <= max + 1; i++){
        if(numbers[i] == null){
            return i;   
        }
    }
}
