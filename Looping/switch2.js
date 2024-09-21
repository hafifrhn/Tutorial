var item = prompt('masukkan nama makanan/minuman : \n (cth: nasi, daging, hamburger, softdrink)');

switch(item){
  case 'nasi':
  case 'daging':
    alert('makanan/minuman Sehat');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('makanan/minuman Tidak Sehat');
    break;
  default:
    alert('makanan/minuman salah');
    break;
}