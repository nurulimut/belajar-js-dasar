// Input dan Output data
// console.log() <= output ke console

// Dialog box
// Alert
// alert("ayang cantik banget aku cinta mati padamu muah...muah....")
// alert("aku sayangggg banget")
// Prompt <= input data
// let nama = prompt("Masukan Nama orang yang kamu sayang")
// alert("Risa cinta "+nama)
// console.log("Risa cinta "+nama)
// Confirm
// let cek = confirm("Lanjut gak bro?")
// console.log(cek)

//alert('penjumlahan')
//let n = parseInt(prompt('masukan angka3'))
// let u = parseInt(prompt('masuka angka4'))
// let hasil = n * u
// alert(n + ' * ' + u + ' = ' + hasil)

let op = prompt('masukan Operator')
let a = parseInt(prompt('masukan angka 1'))
let b = parseInt(prompt('masukan angka 2'))

if (op === '*') {
  alert(a + ' * ' + b + ' = ' + a * b)
} else if (op === '/') {
  alert(a + ' : ' + b + ' = ' + a / b)
} else if (op === '+') {
  alert(a + ' + ' + b + ' = ' + (a + b))
} else if (op === '-') {
  alert(a + ' - ' + b + ' = ' + (a + b))
}
