const CAN_NOT_REACH = new Error("can not reach end");
function greepy(arr, max) {
  //arr为每两个加油站之间距离组成的数组，第一数为第一个加油站到起点距离，
  //最后一个数为最后一个加油站到终点距离;
  let flag = arr.every((val) => {
    return max >= val;
  });
  if (!flag) {
    return CAN_NOT_REACH;
  }
  let temp = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp += arr[i];
    if (temp > max) {
      count++;
      temp = arr[i];
    }
  }
  return count;
}
