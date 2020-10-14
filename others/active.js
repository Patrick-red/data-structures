function activity(arr) {
  arr.sort((n1, n2) => n1.end - n2.end);
  let res = [];
  let temp = 0; //记录当前结束时间
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i].begin >= temp) {
      res.push(arr[i].name);
      temp = arr[i].end;
    }
  }
  return res;
}
