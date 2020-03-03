function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leaves = new Set();
    
    for(let i = 0; i < A.length; i++){
        leaves.add(A[i]);
        if(leaves.size == X){
            return i;
        }
    }
    
    return -1;
}
