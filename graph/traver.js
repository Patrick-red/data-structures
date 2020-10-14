/*------------------------------深度优先-------------------------*/
function Traver(matrix) {
  let dotNum = matrix.length;
  let dots = new Array(dotNum);
  dots.fill(false); //初始化每个点，均为访问过
  for (let i = 0; i < dotNum; i++) {
    if (dots[i] === false) {
      dots[i] = true;
      console.log("--", i);
      DFS(i);
    }
  }
  function DFS(i) {
    console.log(i);
    for (let j = 0; j < dotNum; j++) {
      if (matrix[i][j] !== 0 && matrix[i][j] !== 65535 && dots[j] === false) {
        dots[j] = true;
        DFS(j);
      }
    }
  }
}
/*------------------------------广度优先-------------------------*/
function Traver(matrix) {
  let dotNum = matrix.length;
  let dots = new Array(dotNum);
  dots.fill(false);
  let currentDot;
  let quequ = [];
  for (let i = 0; i < dotNum; i++) {
    if (dots[i] === false) {
      dots[i] = true;
      quequ.push(i);
      while (quequ.length > 0) {
        currentDot = quequ.shift();
        console.log("V" + currentDot);
        for (let j = 0; j < dotNum; j++) {
          if (
            matrix[currentDot][j] !== 0 &&
            matrix[currentDot][j] !== 65535 &&
            dots[j] === false
          ) {
            quequ.push(j);
            dots[j] = true;
          }
        }
      }
    }
  }
}
