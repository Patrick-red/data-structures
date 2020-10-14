function insertSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }
}
