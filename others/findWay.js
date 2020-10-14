let arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
function find(arr) {
  let len = arr.length;
  function max(i, j) {
    if (i === len - 1) {
      return arr[i][j];
    }
    return Math.max(max(i + 1, j), max(i + 1, j + 1)) + arr[i][j];
  }
  return max(0, 0);
}
console.log(find(arr));
/*------------------------添加辅助数组，减少重复运算-------------------------------*/
let arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
function find(arr) {
  let len = arr.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    temp[i] = [];
    for (let j = 0, l = arr[i].length; j < l; j++) {
      temp[i][j] = -1;
    }
  }
  function max(i, j) {
    if (temp[i][j] !== -1) {
      return temp[i][j];
    }
    if (i === len - 1) {
      return arr[i][j];
    }
    temp[i][j] = Math.max(max(i + 1, j), max(i + 1, j + 1)) + arr[i][j];
    return temp[i][j];
  }
  return max(0, 0);
}
console.log(find(arr));
/*------------------------递归改成递推（可以再优化temp数组为一维或直接用arr）-------------------------------*/
let arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
function find(arr) {
  let len = arr.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    temp[i] = [];
  }
  for (let i = 0, j = arr[len - 1].length; i < j; i++) {
    temp[len - 1][i] = arr[len - 1][i];
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0, l = arr[i].length; j < l; j++) {
      temp[i][j] = Math.max(temp[i + 1][j], temp[i + 1][j + 1]) + arr[i][j];
    }
  }
  console.log(temp);
  return temp[0][0];
}
console.log(find(arr));
