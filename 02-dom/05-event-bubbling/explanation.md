Event bubbling adalah efek yang mirip seperti gelombang air yang mana ketika kita memicu sebuah elemen elemen induk bahkan leluhurnya akan ikut terpicu

Sebenarnya event bubbling bisa menjadi sebuah efek negatif dan bisa juga menjadi efek positif

efek negatifnya ketika event bubbling terjadi bisa memunculkan sebuah bug karena ia menyebar sampai ke element parent bahkan element leluhur (document)

efek positifnya kita bisa menggunakan sebuah teknik bernama event delegation dimana biasanya ketika kita mau men trigger sebuah button untuk menambah data atau aksi lain itu kita langsung akses elemen buttonnya dengan getlemenbyid atau queryselector atau yang lainnya. Nah ini akan menjadi masalah besar ketika kita klik dan memunculkan data yang cukup banyak, misal ketika di klik ia memunculkan 1000 data, artinya listener harus mengulang dirinya sebanyak 1000 kali hanya untuk data saja belum elemen lain. Maka dari itu kita bisa menggunakan event delegation dimana kita tinggal memanggil element parent nya untuk mengakses element child yang ingin di akses.