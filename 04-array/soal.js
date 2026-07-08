const produk = [
  { nama: "Laptop", harga: 8000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 350000 },
];


function hargaSetelahDiskon(data, minHarga, diskonPersen){
    const dataFiltered = data.filter((item)=>item.harga >= minHarga)
    const dataMapped = dataFiltered.map((item)=>({
        ...item,
        harga: item.harga - (item.harga*diskonPersen/100),
        jenis: "Elektronik",
    }));
    return dataMapped;
}

console.log(hargaSetelahDiskon(produk, 300000, 10));