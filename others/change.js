function change(arr, want) {
  arr.sort((n1, n2) => {
    return n2.value - n1.value;
  });
  let temp = 0;
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    while (arr[i].count > 0) {
      if (temp + arr[i].value <= want) {
        res.push(arr[i].value);
        temp += arr[i].value;
        arr[i].count--;
      } else {
        break;
      }
    }
  }
  if (temp !== want) {
    return new Error("can figure it out");
  }
  return res;
}
