function divisibleSumPairs(n, k, ar){
    let sum = 0;
    for(let index = 0; index < n.length; index += 1){
        for(let pair = 0; pair < n; pair += 1){
    if(index != pair){
        if((ar[index]+ ar[pair]) % k === 0){
          sum += 1; 
        }
      }
    }
  } 
  return sum / 2;
} 

/* */

