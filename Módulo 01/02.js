function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(32, 321);


// alternativa

function pares(x, y) {
    z = (x%2 == 0) ? x : ++x;
  
    while (z < y) {
        console.log(z);
        z += 2;
    } 
}
