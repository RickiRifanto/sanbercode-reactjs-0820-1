// soal 1
function halo() {
  return "Halo sanbers!"
}

console.log(halo()) // "Halo Sanbers!" 

// soal 2
function kalikan( num1,num2 ) {
  return num1 * num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// soal 3 
function introduce(){
  return "Nama saya " + name + ", umur saya " + age + " tahun" + ", alamat saya di " + address + ", saya punya hobby yaitu " + hobby + "!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// soal 4 
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftaPeserta= {nama:arrayDaftarPeserta[0],jenis_kelamin:arrayDaftarPeserta[1],hobi:arrayDaftarPeserta[2],tahun_lahir:arrayDaftarPeserta[3]}
console.log(objectDaftaPeserta.nama)
console.log(objectDaftaPeserta.jenis_kelamin)
console.log(objectDaftaPeserta.hobi)
console.log(objectDaftaPeserta.tahun_lahir)

// soal 5
var buahbuah=
[
  {
    nama: "strawberry",
    warna: "merah",
    ada_bijinya : false,
    harga : 9000
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ada_bijinya : true,
    harga : 8000
  },
  {
    nama: "semangka",
    warna: "hijau & merah",
    ada_bijinya : true,
    harga : 10000
  },
  {
    nama: "pisang",
    warna: "kuning",
    ada_bijinya : false,
    harga : 5000
  }
]
console.log("Data pertama :")
console.log(buahbuah[0])

// soal 6
var arrfilm1 = []

function tambahfilm (film1){
  arrfilm1.push(film1)
}

tambahfilm("MyHeroacademia")

console.log(arrfilm1)