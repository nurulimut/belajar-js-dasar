// function atau fungsi
// function itu adalah tempat untuk menyimpan sebuah program

// DRY
// ngulangin apa yang sudah kita buat

// Program ngitung nilai uas

// let nama = "nurul semu"
// let nilai_ipa = 100
// let nilai_mtk = 100
// let nilai_pai = 100
// let kesemuan = 100

// let nilai_uas = ((nilai_ipa + nilai_mtk + nilai_pai)/30) - kesemuan

// if(nilai_uas <= 0){
//     console.log(nama + " tidak lulus")
// }else if(nilai_uas > 0 && nilai_uas < 6){
//     console.log(nama + " Remedial")
// }else if(nilai_uas > 6){
//     console.log(nama + " lulus")
// }else {
//     console.log("data tidak ditemukan");
// }

// rumit
// function hitungNilai(nm, nipa, nmtk, npai, nsemu){
//     let nama = nm
//     let nilai_ipa = nipa
//     let nilai_mtk = nmtk
//     let nilai_pai = npai
//     let kesemuan = nsemu

//     let nilai_uas = (((nilai_ipa + nilai_mtk + nilai_pai) - kesemuan)/30)

//     if(nilai_uas <= 0){
//         console.log(nama + " tidak lulus, dengan nilai uas = "+nilai_uas)
//     }else if(nilai_uas > 0 && nilai_uas < 6){
//         console.log(nama + " Remedial, dengan nilai uas = "+nilai_uas)
//     }else if(nilai_uas > 6){
//         console.log(nama + " lulus, dengan nilai uas = "+nilai_uas)
//     }else {
//         console.log("data tidak ditemukan");
//     }
// }

// hitungNilai("nurul semu", 100, 100, 100, 100)
// hitungNilai("risa keren", 100, 100, 100, 0)

// sederhana
// function tes(){
//     console.log("hallo dunia");
// }

// tes()

// // return
// function ayy(){
//     return "nurul cantik seperti bidadari <3" // untuk mengembalikan suatu nilai
// }

// console.log(ayy());

// fuction Expression

let aku = function () {
  console.log('hallo dunia')
}

aku()
