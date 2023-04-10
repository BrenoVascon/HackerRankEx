function catAndMouse (x, y, z){
    let gatoA = x;
    let gatoB = y;
    let rato = z;

  if((Math.abs(rato - gatoA)) < (Math.abs(rato - gatoB))){
    return 'Cat A';
  } else if ((Math.abs(rato - gatoA)) === (Math.abs(rato - gatoB))){
    return 'Mouse C';
  } else { 
    return 'Cat b'; 
 }
}

