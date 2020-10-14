function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let right = [];
  let left = [];
  let middle = Math.floor(arr.length / 2);
  let middleValue = arr[middle];
  arr.splice(middle, 1);
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] > middleValue) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(middleValue, quickSort(right));
}

/*-------------------------------不需要辅助数组---------------------------*/
function quickSort(arr, start, end) {
  if (start < end) {
    let pivot = arr[start];
    let low = start;
    let high = end;
    while (low < high) {
      while (low < high && arr[high] >= pivot) {
        high--;
      }
      arr[low] = arr[high];
      while (low < high && arr[low] < pivot) {
        low++;
      }
      arr[high] = arr[low];
    }
    arr[low] = pivot;
    quickSort(arr, low + 1, end);
    quickSort(arr, start, low - 1);
  }
}
