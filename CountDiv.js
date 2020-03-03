function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
  
    let start = A%K == 0 ? A : A + (K - (A%K));
    let end = B - (B%K);
    
    return (end/K) - (start/K) + 1;
}

//https://app.codility.com/demo/results/trainingB5CQFD-UK4/
