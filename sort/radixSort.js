function radixSort(arr) {
  let d = Math.max.apply(null, arr).toString().length;
  let n = 1;
  let base = [];
  let baseNum = [];
  for (let i = 0; i < 9; i++) {
    base[i] = [];
    baseNum[i] = 0;
  }
  while (d--) {
    for (let i = 0; i < arr.length; i++) {
      let index = Math.floor(arr[i] / n) % 10;
      base[index][baseNum[index]] = arr[i];
      baseNum[index]++;
    }
    let k = 0;
    for (let i = 0; i < 9; i++) {
      if (baseNum[i] !== 0) {
        for (let j = 0; j < baseNum[i]; j++) {
          arr[k++] = base[i][j];
        }
        baseNum[i] = 0;
      }
    }
    n *= 10;
  }
}
