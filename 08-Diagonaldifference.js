function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
 
    for (let index = 0; index < arr.length; index += 1) {
        leftDiagonal += arr[index][index];
        rightDiagonal += arr[index][arr.length - 1 - index];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}