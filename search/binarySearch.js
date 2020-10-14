function binarySearch(arr, star, end, target) {
  if (star > end) {
    return false;
  }
  let middle = Math.floor((star + end) / 2);
  if (target > arr[middle]) {
    return binarySearch(arr, middle + 1, end, target);
  } else if (target < arr[middle]) {
    return binarySearch(arr, 0, middle - 1, target);
  } else {
    return middle;
  }
}
