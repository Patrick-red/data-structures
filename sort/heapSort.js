//交换辅助函数
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//核心，递归排序堆
function heapSort(arr, i, len) {
  for (let j = i * 2 + 1; j < len; j = j * 2 + 1) {
    if (j + 1 < len && arr[j + 1] > arr[j]) {
      j++;
    }
    if (arr[i] < arr[j]) {
      swap(arr, i, j);
      i = j;
    }
  }
}
function sort(arr) {
  //初始化最大堆
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapSort(arr, i, arr.length);
  }
  //将每次排序好的最大数放到数组最后
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapSort(arr, 0, i);
  }
  return arr;
}
