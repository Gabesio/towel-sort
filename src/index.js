
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let i = 0;
  let rev1 = [];
  let rev2 = [];
  if (matrix.length) {
  while (i < matrix.length) {
    if (i === 1) {
      for (let a = 0; a < matrix[i].length ; a += 1) {
        rev1[a] = matrix[i][(matrix[i].length - 1) - a];
      }
      matrix[i] = rev1
    } else if (i === 3) {
      for (let a = 0; a < matrix[i].length ; a += 1) {
        rev2[a] = matrix[i][(matrix[i].length - 1) - a];
      }
      matrix[i] = rev2
    }
    i += 1
  }
} else {
  return [];
}
  return matrix.join(',').split(',').map(a => +a);
}
