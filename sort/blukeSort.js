function blukeSort(arr) {
  let bluke = [];
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    //装好桶
    if (bluke[arr[i]] === undefined) {
      bluke[arr[i]] = 1;
    } else {
      bluke[arr[i]]++;
    }
  }
  for (let i = 0; i < bluke.length; i++) {
    while (bluke[i] >= 1) {
      res.push(i);
      bluke[i]--;
    }
  }
  return res;
}
