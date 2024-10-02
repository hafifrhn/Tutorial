//THIS
//var a = 10;
//console.log(window.a);

// FUNCTION DECLARATION
//function halo(){
  //console.log('halo');
//}
//halo();

//function halo(){
  //console.log(this);
  //console.log('halo');
//}
//this.halo();
// this pada function declaration yaitu mengembalikan object global

// OBJECT LITERAL
//var obj = {};
//obj.halo = function(){
  //console.log('halo');
//}
//obj.halo();

//var obj = {a : 10, nama : 'Hafif'};
//obj.halo = function(){
  //console.log(this);
  //console.log('halo');
//}
//obj.halo();
// this mengembalikan object yang bersangkutan

// CONSTRUCTOR >> NEW >> Menggunakan Huruf Besar diawal Kata
//function Halo(){
  //console.log('halo');
//}
//new Halo();

function Halo(){
console.log(this);
  console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat