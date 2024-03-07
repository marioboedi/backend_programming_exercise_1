
//MARIO SAMUEL BUDIONO - 535230091

let awal = 1;
let akhir = 1000;

for (let i = awal; i <= akhir; i++) {
  let bilPrima = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      bilPrima = false;
      break; 
    }
  }

  if (bilPrima) {
    console.log(i);
  }
}
