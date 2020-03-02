function solution(N, A) {
// write your code in JavaScript (Node.js 8.9.4)
 
    let maxCounter = 0;
    let tempMaxCounter = 0;

    let counts = new Array(N);
 
    for(let i = 0; i < A.length; i++){
        
        let counterIndex = A[i] - 1;

        if(counterIndex >= N){
            maxCounter = tempMaxCounter;
            continue;
        }
        if(counts[counterIndex] == null){
            counts[counterIndex] = 0;
        }
        
        if(counts[counterIndex] < maxCounter)
        {
             counts[counterIndex] = maxCounter + 1;
        }else{
            counts[counterIndex] = counts[counterIndex] + 1;
        }
        
        tempMaxCounter = counts[counterIndex] > tempMaxCounter ? counts[counterIndex] : tempMaxCounter;

    }
    
    for(let i = 0; i < N; i++){
        if(counts[i] < maxCounter || counts[i] == null)
        counts[i] = maxCounter;
    }
    return counts;
}
