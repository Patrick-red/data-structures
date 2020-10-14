//并集
function union(s) {
  let res = new Set();
  let n1 = this.values();
  let n2 = s.values();
  res.add(...n1, ...n2);
  return res;
}

//交集
function intersection(s) {
  let res = new Set();
  let n1 = this.values();
  let n2 = s.values();
  let n3 = n1.filter((val) => {
    return n2.indexOf(val) > -1;
  });
  res.add(...n3);
  return res;
}

//差集
function difference(s) {
  let res = new Set();
  let n1 = this.values();
  let n2 = s.values();
  let n3 = n1.filter((val) => {
    return n2.indexOf(val) === -1;
  });
  res.add(...n3);
  return res;
}

//当前集合是否为另一个集合的子集
function subset(s) {
  let res = new Set();
  let n1 = this.values();
  let n2 = s.values();
  return n1.every((val) => {
    return n2.indexOf(val) > -1;
  });
}
