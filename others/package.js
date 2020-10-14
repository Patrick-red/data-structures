function bag(arr, total) {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    res[i] = [];
    for (let j = 0; j < total; j++) {
      if (i === 0) {
        if (arr[i].weight <= j + 1) {
          res[i][j] = arr[i].value;
        } else {
          res[i][j] = 0;
        }
      } else {
        if (arr[i].weight > j + 1) {
          res[i][j] = res[i - 1][j];
        } else if (arr[i].weight === j + 1) {
          res[i][j] = Math.max(res[i - 1][j], arr[i].value);
        } else {
          res[i][j] = Math.max(
            res[i - 1][j],
            arr[i].value + res[i - 1][j - arr[i].weight]
          );
        }
      }
    }
  }
  return res[len - 1][total - 1];
}
