// variabel

// var usia = 17 // bisa diubah nilainya jarang dipakai kalau sekarang
// const x = 1 // nilainya tidak bisa diubah
// let y = 2 // bisa diubah nilai nya seperti var tapi sering dipakai

// let usia = 16
// usia = 17
// console.log('heyhoo usia kamu adalah ' + usia)
// alert('heyhoo usia kamu adalah ' + usia)

// let usia = prompt('berapa usia kamu?')
// alert('usia anda adalah ' + usia)

// let usia = prompt('berapa usia kamu?')
// alert('usia kamu adalah ' + usia)


// tipe data
// let nama = 'Theo Ginting' // tipe data string
// let usia = 17 // tipe integer number
// let tinggiBadan = 130.2 // tipe double float
// let beratBadan
// let pacar = 180 // null

// beratBadan = 70

// let nama = prompt("masukkan nama kamu")
// let usia = prompt("masukkan usia kamu")
// let idKartu = prompt("masukkan ID Kartu kamu")
// let statusKartu = 1
// let golonganJurusan = confirm("silahkan masukkan kode golongan jurusan kamu")
// let kelas = confirm("silahkan masukkan kode golongan kelas kamu")

// conditional

// if else
// if (pacar == null)  {
//     pacar = 'belum punya'
// } else {
//     pacar = 'udah punya'
// }


// operator
// let saldoAwal = 50000
// let saldoTambahan = 30000
// const hutang = 20000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 9
// const y = 2
// const z = x / y

// alert(`nilai x = ${x} / nilai y = ${y} maka hasilnya adalah ${z} `)



// switch
// switch (pacar) {
//     case 1:
//         pacar = "punya 1 aja"
//         break;

//     case 2:
//         pacar = "punya pacar 2, aku cukup playboy"
//         break;

//     default:
//         pacar = "belum punya pacar"
//         break;
// }


// switch (golonganJurusan) {
//     case 1:
//         golonganJurusan = "MIPA"
//         break;

//     case 2:
//         golonganJurusan = "IPS"
//         break;

//     default:
//         golonganJurusan = "Kamu belum bergabung ke jurusan apapun"
//         break;
// }


// switch (kelas) {
//     case 1:
//         kelas = "X"
//         break;

//     case 2:
//         kelas = "XI"
//         break;

//     case 3:
//         kelas = "XII"
//         break;

//     default:
//         kelas = "kamu belum bergabung ke kelas apapun"
//         break;
// }

// alert(`nama kamu ${nama} usia kamu ${usia} dengan id kartu ${idKartu} jurusan kamu ${golonganJurusan} kelas ${kelas}`)

// alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} kg dan pacar saya ${pacar}`)

// alert(`saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`)

// let output = (`nama kamu ${nama} umur kamu ${usia} id kartu kamu ${idKartu} status kartu kamu ${statusKartu}`)

// document.getElementById("test").innerHTML = output


// ARRAY
// let petugasRegu = ['Vincent XII MM 3', 'Daniel XII RPL 1', 'Gheraldy XI RPL 2']
// petugasRegu.push('Adly XI RPL 2', 'Ghazali XII RPL 2') // push berfungsi untuk menambahkan data array
// alert(petugasRegu[0]) // gunanya untuk memanggil salah satu data
// petugasRegu.shift() // gunanya untuk menghapus urutan data array terakhir
// petugasRegu.pop() // gunanya untuk menghapus urutan data array pertama
// alert(petugasRegu)

// let petugasSidang = []

// petugasSidang[0] = 'Vincent XII MM 3'
// petugasSidang[1] = 'Daniel XII RPL 1'
// petugasSidang[2] = 'Gheraldy XI RPL 2'

// petugasSidang.shift()
// petugasSidang.pop()

// alert(petugasSidang)


// Looping

// for loop

// 3 statement

// variabel pertama (i) bernilai 0 sebelum di looping, jika (i) nya kurang dari 10, maka nilai (i) nya akan ditambahkan nilai (i) nya dengan 1

// const namaPetugasSidang = ['Vincent', 'Daniel', 'Gilang', 'Akbar']
// console.log(namaPetugasSidang.length)

// for(let i = 0; i < namaPetugasSidang.length; i++) {
//     console.log(namaPetugasSidang[i])
// }


// const namaServerBackupMawaci = ['TRISTAR SMK PENUS-NET Server', 'TRISTAR BGR-1 NET Server', 'TRISTAR BGR-2 NET Server', 'TRISTAR DPK-1 NET Server', 'TRISTAR DPK-2 NET Server']

// for (let i = 0; i < namaServerBackupMawaci.length; i++) {
//     console.log(namaServerBackupMawaci[i])
// }


// let namaMurid = prompt("Masukkan nama kamu")
// let kodeJurusan = prompt("Masukkan kode jurusan kamu")
// let jurusan
// let kodeKelas = prompt("Masukkan kode kelas kamu")
// let kelas
// let kodeAbjadKelas = prompt("Masukkan kode abjad kelas kamu")
// let abjadKelas
// let idKartu = prompt("Masukkan ID kartu ujian kamu")

// switch (kodeJurusan) {
//     case "1":
//         jurusan = "MIPA"
//         break;
//     case "2":
//         jurusan = "IPS"
//         break;

//     default:
//         jurusan = "Jurusan tidak dapat di identifikasikan"
//         break;
// }

// switch (kodeKelas) {
//     case "1":
//         kelas = "X"
//         break;

//     case "2":
//         kelas = "XI"
//         break;

//     case "3":
//         kelas = "XII"
//         break;

//     default:
//         kelas = "Kelas tidak dapat di identifikasikan";
//         break;
// }

// switch (kodeAbjadKelas) {
//     case "1":
//         abjadKelas = "1"
//         break;
//     case "2":
//         abjadKelas = "2"
//         break;
//     case "3":
//         abjadKelas = "3"
//         break;
//     case "4":
//         abjadKelas = "4"
//         break;

//     default:
//         abjadKelas = "Abjad kelas tidak dapat diidentfikasikan"
//         break;
// }

// console.log(`nama kamu : ${namaMurid} \n jurusan kamu : ${jurusan} \n kelas kamu : ${kelas}${abjadKelas} \n id kartu : ${idKartu} \n kamu akan mengerjakan Penilaian Sumatif Tengah Semester (PSTS) 2024/2025 di ruang 01`)
// alert(`nama kamu : ${namaMurid} \n jurusan kamu : ${jurusan} \n kelas kamu : ${kelas}${abjadKelas} \n id kartu : ${idKartu} \n kamu akan mengerjakan Penilaian Sumatif Tengah Semester (PSTS) 2024/2025 di ruang 01 \n (C) 2024 Tristar-IT and Devaccto-IT RPL SMK Penus`)

// let text = (`nama kamu : ${namaMurid} \n jurusan kamu : ${jurusan} \n kelas kamu : ${kelas}${abjadKelas} \n id kartu : ${idKartu} \n kamu akan mengerjakan Penilaian Sumatif Tengah Semester (PSTS) 2024/2025 di ruang 01`)

// document.getElementById("test").print

// const namaServerSmaMawaci = ["TRISTAR DIGISCH PENUS-NET", "TRISTAR DIGISCH BGR-1 NET", "TRISTAR DIGISCH SMKN1-CIB-NET", "TRISTAR DIGISCH", "TRISTAR DIGISCH NUSANTARA INFOKOM MEDIA"]

// for (let i = 0; i < namaServerSmaMawaci.length; i++) {
//     console.log(namaServerSmaMawaci[i]);
    
// }


// let serverCadanganSmaMawaci = []

// serverCadanganSmaMawaci[0] = "TRISTAR DIGISCH PENUS-NET"
// serverCadanganSmaMawaci[1] = "TRISTAR DIGISCH SMK PGRI 2 - NET"
// serverCadanganSmaMawaci[2] = "TRISTAR DIGISCH DEPOK-NET"
// serverCadanganSmaMawaci[3] = "TRISTAR DIGISCH BGR-1"
// serverCadanganSmaMawaci[4] = "TRISTAR DIGISCH BGR-2"

// serverCadanganSmaMawaci.push("TRISTAR DIGISCH HAMBALANG-NET")
// serverCadanganSmaMawaci.push("TRISTAR DIGITAL NUSASAKTI JAKARTA-NET")

// for (let i = 0; i < serverCadanganSmaMawaci.length; i++) {
//     console.log(serverCadanganSmaMawaci[i])
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log([i])
// }

// let i = 10
// while(i < 20){
//     i++
//     console.log('Theo Ginting')
// }

// do{
//     i++
//     console.log('TRISTAR IT')
// }while(i < 10)

// tugas kecil

//1. prompt untk mengetahui saldo akhir dari apa yang di inputkan oleh user
//2. menentukan hari dari tanggal yang ada saat ini di pc (yang ditampilin nama hari)

// let hari = new Date().getDay()
// let namaHari 

// switch (hari) {
//     case 0 :
//         namaHari = "Minggu"
//         break;
//     case 1 :
//         namaHari = "Senin"
//         break;
//     case 2 :
//         namaHari = "Selasa"
//         break;
//     case 3 :
//         namaHari = "Rabu"
//         break;
//     case 4 :
//         namaHari = "Kamis"
//         break;
//     case 5 :
//         namaHari = "Jumat"
//         break;
//     case 6 :
//         namaHari = "Sabtu"
//         break;

//     default:
//         break;
// }

// console.log(`hari ini adalah hari ${namaHari}`)

// console.log(result);

// let saldoAwal = prompt("Silahkan masukkan saldo awal anda")
// let saldoTerpakai = prompt("Silahkan masukkan saldo anda yang terpakai")

// let saldoAkhir = saldoAwal - saldoTerpakai 
// console.log(`\n Saldo awal anda adalah sebesar ${saldoAwal} \n dan saldo anda yang terpakai sebesar ${saldoTerpakai} ,\n maka saldo terakhir anda sebesar ${saldoAkhir}`)

// document.getElementById("test").innerHTML = saldoAkhir

// const namaSiswa = prompt("Silahkan masukkan nama siswa")
// let kodeKelas = prompt("Silahkan masukkan kode kelas")
// let kelas
// let kodeJurusan = prompt("Silahkan masukkan kode jurusan")
// let jurusan
// let idKartu = prompt("Silahkan masukkan id kartu ujian")
// let statusUjian
// let pinUjian = prompt("Silahkan masukkan 4 digit kode pin ujian")
// let validasiPin 

// switch (kodeKelas) {
//     case "1":
//         kelas = "X-1"
//         break;
//     case "2":
//         kelas = "X-2"
//         break;
//     case "3":
//         kelas = "X-3"
//         break;
//     case "4":
//         kelas = "X-4"
//         break;
//     case "5":
//         kelas = "XI-1"
//         break;
//     case "6":
//         kelas = "XI-2"
//         break;
//     case "7":
//         kelas = "XI-3"
//         break;
//     case "8":
//         kelas = "XI-4"
//         break;
//     case "9":
//         kelas = "XII-1"
//         break;
//     case "10":
//         kelas = "XII-2"
//         break;
//     case "11":
//         kelas = "XII-3"
//         break;
//     case "12":
//         kelas = "XII-4"
//         break;

//     default:
//         kelas = "Kelas tidak dapat di identifikasikan"
//         break;
// }

// switch (kodeJurusan) {
//     case "1":
//         jurusan = "MIPA"
//         break;
//     case "2":
//         jurusan = "IPS"
//         break;

//     default:
//         jurusan = "jurusan tidak dapat di identifikasikan"
//         break;
// }

// if (idKartu = "TRISTAR3340") {
//     statusUjian = "Disetujui oleh sekolah (aktif)"
// } else {
//     statusUjian = "Tidak disetujui oleh sekolah (tidak atau belum aktif)"
// }


// if (pinUjian = "0000") {
//     validasiPin = "Kunci pin benar"
// } else {
//     validasiPin = "Kunci pin salah"
// }

// console.log(`\n nama siswa : ${namaSiswa} \n kelas siswa : ${kelas} \n jurusan siswa : ${jurusan} \n status ujian siswa : ${statusUjian} \n status pin : ${validasiPin}`)

// let namaServerAktif = []

// namaServerAktif[0] = "TRISTAR SMK-PENUS NET"
// namaServerAktif[1] = "TRISTAR SMK-1-CIB NET"
// namaServerAktif[2] = "TRISTAR BGR-NET 1"
// namaServerAktif[3] = "TRISTAR JKT-NET 1"

// for(let i = 0; i < namaServerAktif.length; i++){
//     console.log(namaServerAktif[i])
// }

// while (condition) {
    
// }

// let i = 10 // nilai i nya 0
// while(i < 10){ // nilai i nya akan berhenti jika menyentuh angka 10
//     i++
//     console.log("TRISTAR")
// }

// do{
//     i++
//     console.log("TRISTAR")
// }while(i < 10)

// looping while tidak bisa mengeksekusi hasil output nya jika antara nilai i dan i < (angka yang sama dengan variable i nya), sedangkan do while tetap bisa

// let i = 0
// while(i < 10){
//     i++
//     console.log("Theo Ginting")
// }

// let i = 0;
// do {
//     i++
//     console.log("Theo Ginting")
// } while (i < 100);


// DOM

// Element Manipulation

// console.log(document.title)

// document.title = 'Sumanto Gunawan (Theo Ginting)'

// console.log(document.title)



// body.append("HELLO WORLD") // append digunakan untuk mengisikan sesuatu seperti teks ke dalam web html tanpa mengubah skrip html langsung

// body.append("HELLOWORLD")

// const h1 = document.createElement("h1") // <h1></h1>
// h1.textContent = "ANJAY INI H1 BRO" // <h1>ANJAY INI H1 BRO</h1>



// const namaSaya = document.createElement("p")
// namaSaya.innerHTML = "SUMANTO GUNAWAN (THEO GINTING)"
// body.append(h1) // untuk memasukkan teks output
// body.append(namaSaya) // untuk memasukkan teks output

// const namaKamu = document.createElement('b')
// namaKamu.innerText = "TRISTAR MBX"
// body.append(namaKamu)

// let namaSiswa = prompt("Silahkan masukkan nama kamu")
// let kelas
// let kodeKelas = prompt("silahkan mengisi kode kelas")
// let jurusan
// let kodeJurusan = prompt("silahkan mengisi kode jurusan")
// let statusKehadiran
// let kodeKehadiran = prompt("Silahkan mengisi kode kehadiran")
// let hari = new Date().getDay();
// let namaHari 
// let birthday = new Date();
// let tanggal = birthday.getDate()
// let bulan = new Date();
// let getBulan = bulan.getMonth()
// let namaBulan
// let tahun = new Date()
// let getTahun = tahun.getFullYear()


// switch (kodeKelas) {
//     case "1":
//         kelas = "X-1"
//         break;
//     case "2":
//         kelas = "X-2"
//         break;
//     case "3":
//         kelas = "X-3"
//         break;
//     case "4":
//         kelas = "X-4"
//         break;
//     case "5":
//         kelas = "XI-1"
//         break;
//     case "6":
//         kelas = "XI-2"
//         break;
//     case "7":
//         kelas = "XI-3"
//         break;
//     case "8":
//         kelas = "XI-4"
//         break;
//     case "9":
//         kelas = "XII-1"
//         break;
//     case "10":
//         kelas = "XII-2"
//         break;
//     case "11":
//         kelas = "XII-3"
//         break;
//     case "12":
//         kelas = "XII-4"
//         break;

//     default:
//         kelas = "Tidak dapat di identifikasikan"
//         break;
// }


// switch (kodeJurusan) {
//     case "1":
//         jurusan = "MIPA"
//         break;
//     case "2":
//         jurusan = "IPS"
//         break;

//     default:
//         jurusan = "Tidak dapat di identifikasikan"
//         break;
// }


// switch (kodeKehadiran) {
//     case "1":
//         statusKehadiran = "Hadir"
//         break;
//     case "2":
//         statusKehadiran = "Sakit"
//         break;
//     case "3":
//         statusKehadiran = "Ijin"
//         break;
//     case "4":
//         statusKehadiran = "Alpha"
//         break;

//     default:
//         statusKehadiran = "Tidak dapat di identifikasikan"
//         break;
// }


// switch (hari) {
//     case 0:
//         namaHari = "Minggu"
//         break;
//     case 1:
//         namaHari = "Senin"
//         break;
//     case 2:
//         namaHari = "Selasa"
//         break;
//     case 3:
//         namaHari = "Rabu"
//         break;
//     case 4:
//         namaHari = "Kamis"
//         break;
//     case 5:
//         namaHari = "Jumat"
//         break;
//     case 6:
//         namaHari = "Sabtu"
//         break;

//     default:
//         break;
// }


// switch (getBulan) {
//     case 0:
//         namaBulan = "Januari"
//         break;
//     case 1:
//         namaBulan = "Februari"
//         break;
//     case 2:
//         namaBulan = "Maret"
//         break;
//     case 3:
//         namaBulan = "April"
//         break;
//     case 4:
//         namaBulan = "Mei"
//         break;
//     case 5:
//         namaBulan = "Juni"
//         break;
//     case 6:
//         namaBulan = "Juli"
//         break;
//     case 7:
//         namaBulan = "Agustus"
//         break;
//     case 8:
//         namaBulan = "September"
//         break;
//     case 9:
//         namaBulan = "Oktober"
//         break;
//     case 10:
//         namaBulan = "November"
//         break;
//     case 11:
//         namaBulan = "Desember"
//         break;

//     default:
//         break;
// }


// switch (idSiswa) {
//     case idSiswa:
//         statusUjian = "status ujian valid dan siswa/i dapat mengikuti ujian"
//         break;

//     default:
//         statusUjian = "status ujian tidak dapat ditemukan"
//         break;
// }

// switch (idUjian) {
//     case idUjian:
//         validasiUjian = "id ujian benar"
//         break;

//     default:
//         validasiUjian = "id ujian tidak tepat atau tidak valid"
//         break;
// }

// let nama = prompt("Masukkan nama kamu")

// document.title = 'TRISTAR DIGISCH'

// const h1 = document.createElement("h1")
// h1.textContent = "<marquee>TRISTAR DIGISCH</marquee>"

// let output = document.createElement("p")
// output.innerHTML =  `<marquee>Welcome To TRISTAR DIGISCH. Please login using your id and password</marquee> <br> ${nama}`
// body.append(h1)
// body.append(output)

// const body = document.body
// console.log(body)

// document.title = "TRISTAR DIGISCH DATA VALIDATION SIMULATOR"

// const btn1 = document.getElementById('btn1')
// const btn2 = document.querySelector('.btn2')

// const footer = document.getElementById('footer')

// const defaultText = "Klik disini 1"
// btn1.textContent = defaultText

// console.log(btn1)
// console.log(btn2)


// btn1.style.background = "#04AA6D"
// btn1.style.border = "none"
// btn1.style.color = "white"
// btn1.style.padding = "15px 32px"
// btn1.style.textAlign = "center"
// btn1.style.textDecoration = "none"
// btn1.style.display = "inline-block"
// btn1.style.fontSize = "16px"
// btn1.style.marginLeft = "2rem"

// btn2.style.background = "#04AA6D"
// btn2.style.border = "none"
// btn2.style.color = "white"
// btn2.style.padding = "15px 32px"
// btn2.style.textAlign = "center"
// btn2.style.textDecoration = "none"
// btn2.style.display = "inline-block"
// btn2.style.fontSize = "16px"
// btn2.style.marginLeft = "2rem"

// body.style.fontFamily = "Poppins";

// console.log(btn)

// function clickButton() {
//     // console.log('aman')
//     // alert('aman')
//     btn1.style.background = "yellow"
//     const newText = document.createElement('p')
//     newText.textContent = "Yo, What's up fellas"
//     body.append(newText)
// }

// function ubahText() {
//     btn1.textContent = "---KLIK UNTUK VALIDASI ABSENSI SISWA/I---"
// }

// function ubahText2() {
//     btn2.textContent = "---KLIK UNTUK RESET---"
// }

// function oriText() {
//     btn1.textContent = defaultText
// }

// function oriText2() {
//     btn2.textContent = defaultText
// }

// function reset() {
//     window.location.href = "index.html"
// }

function actionButton() {
    let namaSiswa = prompt("Silahkan masukkan nama kamu")
    let kelas
    let kodeKelas = prompt("silahkan mengisi kode kelas")
    let jurusan
    let kodeJurusan = prompt("silahkan mengisi kode jurusan")
    let statusKehadiran
    let kodeKehadiran = prompt("Silahkan mengisi kode kehadiran")
    let hari = new Date().getDay();
    let namaHari 
    let birthday = new Date();
    let tanggal = birthday.getDate()
    let bulan = new Date();
    let getBulan = bulan.getMonth()
    let namaBulan
    let tahun = new Date()
    let getTahun = tahun.getFullYear()

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }


    const getTime = new Date();
    let h = addZero(getTime.getHours());
    let m = addZero(getTime.getMinutes());
    let s = addZero(getTime.getSeconds());
    let timeStamp = h + ":" + m + ":" + s;


    switch (kodeKelas) {
        case "1":
            kelas = "X-1"
            break;
        case "2":
            kelas = "X-2"
            break;
        case "3":
            kelas = "X-3"
            break;
        case "4":
            kelas = "X-4"
            break;
        case "5":
            kelas = "XI-1"
            break;
        case "6":
            kelas = "XI-2"
            break;
        case "7":
            kelas = "XI-3"
            break;
        case "8":
            kelas = "XI-4"
            break;
        case "9":
            kelas = "XII-1"
            break;
        case "10":
            kelas = "XII-2"
            break;
        case "11":
            kelas = "XII-3"
            break;
        case "12":
            kelas = "XII-4"
            break;

        default:
            kelas = "Tidak dapat di identifikasikan"
            break;
    }


    switch (kodeJurusan) {
        case "1":
            jurusan = "MIPA"
            break;
        case "2":
            jurusan = "IPS"
            break;

        default:
            jurusan = "Tidak dapat di identifikasikan"
            break;
    }


    switch (kodeKehadiran) {
        case "1":
            statusKehadiran = "Hadir"
            break;
        case "2":
            statusKehadiran = "Sakit"
            break;
        case "3":
            statusKehadiran = "Ijin"
            break;
        case "4":
            statusKehadiran = "Alpha"
            break;

        default:
            statusKehadiran = "Tidak dapat di identifikasikan"
            break;
    }


    switch (hari) {
        case 0:
            namaHari = "Minggu"
            break;
        case 1:
            namaHari = "Senin"
            break;
        case 2:
            namaHari = "Selasa"
            break;
        case 3:
            namaHari = "Rabu"
            break;
        case 4:
            namaHari = "Kamis"
            break;
        case 5:
            namaHari = "Jumat"
            break;
        case 6:
            namaHari = "Sabtu"
            break;

        default:
            break;
    }


    switch (getBulan) {
        case 0:
            namaBulan = "Januari"
            break;
        case 1:
            namaBulan = "Februari"
            break;
        case 2:
            namaBulan = "Maret"
            break;
        case 3:
            namaBulan = "April"
            break;
        case 4:
            namaBulan = "Mei"
            break;
        case 5:
            namaBulan = "Juni"
            break;
        case 6:
            namaBulan = "Juli"
            break;
        case 7:
            namaBulan = "Agustus"
            break;
        case 8:
            namaBulan = "September"
            break;
        case 9:
            namaBulan = "Oktober"
            break;
        case 10:
            namaBulan = "November"
            break;
        case 11:
            namaBulan = "Desember"
            break;

        default:
            break;
    }


    // switch (idSiswa) {
    //     case idSiswa:
    //         statusUjian = "status ujian valid dan siswa/i dapat mengikuti ujian"
    //         break;

    //     default:
    //         statusUjian = "status ujian tidak dapat ditemukan"
    //         break;
    // }

    // switch (idUjian) {
    //     case idUjian:
    //         validasiUjian = "id ujian benar"
    //         break;

    //     default:
    //         validasiUjian = "id ujian tidak tepat atau tidak valid"
    //         break;
    // }

    const output = document.createElement("p")
    output.innerHTML = `Nama Siswa : ${namaSiswa} <br> Kelas Siswa : ${kelas} <br> Jurusan : ${jurusan} <br> Status Kehadiran : ${statusKehadiran} <br> Pada Hari : ${namaHari}, ${tanggal} ${namaBulan} ${getTahun} <br> Jam : ${timeStamp} <br><br> &copy; 2024 TRISTAR Corp, All Right Reserved to SMA Mardi Waluya Cibinong`
    body.append(output)
}

const body = document.body;

console.log(body)

const btn = document.getElementById('btn1')
const btn1 = document.getElementById('resetBtn')

const titleBtn = "Klik disini untuk validasi"
const prevTxt = "Klik disini 1"

const titleBtn2 = "Klik disini untuk reset"
const prevTxt2 = "Klik disini 2"

function changeTxt() {
    btn.textContent = titleBtn
}

function rebackTxt() {
    btn.textContent = prevTxt
}

function changeTxt2() {
    btn1.textContent = titleBtn2
}

function rebackTxt2() {
    btn1.textContent = prevTxt2
}

function reset() {
    window.location.href = "index.html"
}



// contoh se