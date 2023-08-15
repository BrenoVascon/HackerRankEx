function bonAppetit(bill, k ,b){
    let sum = 0 
    let final = 0   

    bill.forEach(price => sum += price )
    sum = sum - bill[k];
    final = sum / 2; 
    if(final != b){
        console.log(b - final);
    } else {
        console.log(`Bon Appetit`)
    }
    
}