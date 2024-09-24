// REKURSIF harus berakhir dan menghasilkan NILAI
// BASE CASE >> Kondisi akhir dari Rekursif yang menghasilkan nilai
//IMPLEMENTASI REKURSIF >> Menggatikan Looping, Deret Fibonacci


function tampilAngka(n){
  if(n === 0) return;
  console.log(n);
  return tampilAngka(n-1)
}

tampilAngka(10);