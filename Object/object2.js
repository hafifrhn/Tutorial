// OBJECT LITERAL
var  mhs1 = {
  nama : "Hafif Raihan",
  nim : "5181011063",
  ipk : "3.55",
  prodi : "Teknik Komputer"
}

var  mhs2 = {
  nama : "Beno Subeno",
  nim : "5181111121",
  ipk : "3.78",
  prodi : "Psikologi"
}

// FUNCTION DECLARATION
function objectMahasiswa(nama, nim, ipk, prodi){
  var mhs = {};
  mhs.nama = nama;
  mhs. nim = nim;
  mhs.ipk = ipk;
  mhs.prodi = prodi;
  return mhs;
}

var mhs3 = objectMahasiswa('Hafif Raihan', '5181011063', '3.55', 'Teknik Komputer');

// CONSTRUCTOR >> Menggunakan New
function Mahasiswa(nama, nim, ipk, prodi){
  this.nama = nama;
  this.nim = nim;
  this.ipk = ipk;
  this.prodi = prodi;
}

var mhs4 = new Mahasiswa('Bino Subino', '5181023222', '3.69', 'Teknik Sipil');