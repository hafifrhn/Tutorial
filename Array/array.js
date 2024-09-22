// MANIPULASI ARRAY

// 1. Menambah isi Array
//var arr = [];
//arr[0] = "Hafif";
//arr[1] = "Raihan";

//console.log(arr);

//2. Menghapus isi array
//var arr = ["Hafif", "Raihan", "Ino"];
//arr[1] = undefined;
//console.log(arr);

//3. Menampilka isi Array
//var arr = ["Hafif", "Raihan", "Bino", "Simon"];

//for(var i = 0; i < arr.length; i++){
  //console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
//}

// Method pada Array
// 1. Join
//var arr = ['Hafif', 'Raihan', 'Bino'];
//console.log(arr.join(' - '));

// 2. Push & Pop
//arr.push('Simon'); // Menambah Elemen diakhir pada Array
//arr.pop(); // Menghapus Elemen diakhir pada Array
//console.log(arr.join(' - '));

// 3. Unshift & Shift
//arr.unshift('Simon'); // Menambah Elemen diawal pada Array
//arr.shift(); // Menghapus Elemen diawal pada Array
//console.log(arr.join(' - '));

// 4. Splice & Slice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
//arr.splice(1, 2, 'Simon');

// slice(indexAwal, indexAkhir);
//var arr = ['Hafif', 'Raihan', 'Bino', 'Simon', 'Boni'];
//var arr2 = arr.slice(1,4);
//console.log(arr.join(' - '));
//console.log(arr2.join(' - '));

// 5. Foreach & Map
//var angka = [1,2,3,4,5,6,7,8];
//var nama = ['Hafif', 'Raihan', 'Bino'];
//for(var i = 0; i < angka.length; i++){
  //console.log(angka[i]);
//}

//angka.forEach(function(e){ //<< forEach
  //console.log(e);
//});

//nama.forEach(function(e, i){ //<< forEach
  //console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
//})

//var angka = [1,2,5,3,6,8,4,7]; //<< map
//var angka2 = angka.map(function(e){
  //return e * 2;
//});
//console.log(angka2.join(' - '));

// 6. Sort
//var angka = [1,2,5,3,6,8,4,7,10,20];
//console.log(angka.join(' - '));
//angka.sort(function(a,b){
  //return a-b;
//});
//console.log(angka.join(' - '));

// 7. Filter & Find
var angka = [1,2,5,3,6,8,4,7,10,20];
//var angka2 = angka.filter(function(e){ //<< filter
  //return e > 5;
//});
//console.log(angka2.join(' - '));
var angka2 = angka.find(function(e){ //<< find
  return e > 5;
});
console.log(angka2);