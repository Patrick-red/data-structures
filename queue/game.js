function game(arr, n) {
  let quene = new Quene();
  for (let i = 0, len = arr.length; i < len; i++) {
    quene.enquene(arr[i]);
  }
  while (quene.size > 1) {
    for (let i = 0; i < n; i++) {
      quene.enquene(quene.dequene());
    }
  }
  return quene.dequene();
}
