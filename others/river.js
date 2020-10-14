function river(arr) {
  let time = 0;
  arr.sort((n1, n2) => n1 - n2);
  while (arr.length > 3) {
    if (
      arr[arr.length - 1] + arr[arr.length - 2] + 2 * arr[0] >
      arr[arr.length - 1] + arr[0] + 2 * arr[1]
    ) {
      time += arr[arr.length - 1] + arr[0] + 2 * arr[1];
    } else {
      time += arr[arr.length - 1] + arr[arr.length - 2] + 2 * arr[0];
    }
    arr.pop();
    arr.pop();
  }
  if (arr.length === 3) {
    time += arr[0] + arr[1] + arr[2];
  } else {
    time += arr[1];
  }
  return time;
}
