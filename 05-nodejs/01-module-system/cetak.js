function cetakNama(nama){
    return `Halo nama saya ${nama}`;
}

const nama = "Johannes";

const dataMahasiswa = {
    nama: "Irfan",
    kelas: "MI-4B",
    cetakMhs(){
        return `Halo Nama Saya ${this.nama}, ${this.kelas} Adalah Kelas Saya`;
    }
}

module.exports.cetakNama = cetakNama;
module.exports.nama = nama;
module.exports.dataMahasiswa = dataMahasiswa;