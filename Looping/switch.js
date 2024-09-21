var angka = prompt('masukkan angka :');

switch(angka){
  case '1' : //tipe data integer harus diubah ke string karena menggunakan prompt, beri tanda petik pada angka ''
    alert('anda memasukkan angka 1');
    break;
  case '2' :
    alert('anda memasukkan angka 2');
    break;
  case '3' :
    alert('anda memasukkan angka 3');
    break;
  default :
    alert('angka yang anda masukkan salah');
}