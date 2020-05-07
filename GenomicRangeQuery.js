function solution(S, P, Q) {
    
    var dnaMap = {
        'A': {value:1, last:0, sums:[] },
        'C': {value:2, last:0, sums:[] },
        'G': {value:3, last:0, sums:[] },
        'T': {value:4, last:0, sums:[] },
    }
    
    var letters = [..."ACGT"];
    
    var result = [];

    for(let i = 0; i < S.length; i++){
       let dna = S[i];
      
       
       letters.forEach((letter)=>{
            var lastValue = dnaMap[letter].last;
            
            if(S[i] == letter){
                lastValue++;
                dnaMap[letter].last += 1;
            }
            dnaMap[letter].sums.push(lastValue);
       })
    }
    

    for(let i = 0; i < P.length; i++){
        
        let start = P[i];
        let end = Q[i];
        
        if(start == end){
            result.push(dnaMap[S[start]].value);
            continue;
        }
        
        for(let l = 0; l < letters.length; l++){
             let letter = letters[l];
             
             
             let startSumValue = start > 0 ? dnaMap[letter].sums[start - 1] : 0;
             if(startSumValue != dnaMap[letter].sums[end]){
                result.push(dnaMap[letter].value);
                break;
            }
        }
      
      
    }

    return result;
}

//https://app.codility.com/demo/results/training529M63-YQM/
