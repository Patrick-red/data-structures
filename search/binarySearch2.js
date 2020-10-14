function binarySearch(arr, star, end, target) {
  if (star > end || arr[star] > target || arr[end] < target) {
    //防止循环爆栈
    return false;
  }
  let middle = Math.floor(
    star + ((target - arr[star]) / (arr[end] - arr[star])) * (end - star)
  );
  if (target > arr[middle]) {
    return binarySearch(arr, middle + 1, end, target);
  } else if (target < arr[middle]) {
    return binarySearch(arr, 0, middle - 1, target);
  } else {
    return middle;
  }
}
