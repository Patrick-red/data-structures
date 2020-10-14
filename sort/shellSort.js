function shellSort(arr) {
  let len = arr.length;
  let gap = Math.floor(len / 2);
  let temp;
  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      let j = i - gap;
      for (; j >= 0, arr[j] > temp; j = j - gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
