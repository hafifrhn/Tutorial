function Angkot(supir, trayek, penumpang, kas){
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function(namaPenumpang){
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  this.penumpangTurun = function(namaPenumpang, bayar){
    if(this.penumpang.length === 0){
      alert('angkot masih kosong');
      return false;
    }
    for(var o = 0; i < this.penumpang.length; i++){
      if(this.penumpang[i] == namaPenumpang){
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this;
      }
    }
  }
}

var angkot1 = new Angkot('Beno Subeno', ['banjarharjo', 'kersana'], [], 0);

var angkot2 = new Angkot('Simon', ['ketanggungan', 'pejagan'], [], 0);