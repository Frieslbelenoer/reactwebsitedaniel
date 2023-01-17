import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*nav*/}
        <nav className="navi">
          <link rel="stylesheet" href="App.css" />
          <div className="wrapper">
            <div className="logo">
              <a href=""> Halo Semuanya!</a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#school">University</a>
                </li>
                <li>
                  <a href="#company">Company</a>
                </li>
                <li>
                  <a href="#journey">Journey</a>
                </li>
                <li>
                  <a href="" className="tbl-masuk">
                    Masuk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*home*/}
        <div className="wrapper">
          <section id="home">
            <img
              src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?w=996&t=st=1673957596~exp=1673958196~hmac=60281366e4df40d049f7e45d8c004e23c7e1d5c8ad119491241ff83c37638ed1"
              className="gambar"
            />
            <div className="coloum">
              <p className="desc">Selamat datang di website ku!</p>
              <h2> Website ini di buat di #ReactJs </h2>
              <p>
                {" "}
                Ayo! Cari tahu apa saja yang ada di Halaman Ini! Mulai dari
                Sini!, hehe~
              </p>
              <p>
                <a href="" className="tbl-more">
                  More Info Here!
                </a>
              </p>
            </div>
          </section>

          {/*about*/}
          <section id="about">
            <div className="coloum">
              <p className="desc">Cari tahu tentang Saya!</p>
              <h2>Tentang Saya</h2>
              <p>
                Saya adalah Mahasiswa Jurusan Teknik Informatika di STMIK PGRI
                Tangerang, Masuk kedalam Universitas ini sangat menarik untuk
                memperdalam Pengalaman dan Kemampuan dalam dunia IT dan
                teknologi informasi zaman Sekarang
              </p>
              <p>
                Maka dari itu, Di Jurusan ini saya mengembangkan beberapa Hard
                skill, dan Soft Skill guna untuk memperluas wawasan dalam dunia
                Teknologi :
              </p>
              <p>
                {" "}
                Hard Skill :<li> Programming </li>
                <li> Multitasking </li>
                <li> Public Speaking </li>
              </p>
              <p>
                {" "}
                Soft Skill :<li> Time Management </li>
                <li> Coordinator </li>
                <li> Teamwork </li>
                <p>
                  <a href="" className="tbl-more">
                    More Info Here!
                  </a>
                </p>
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/opinion-concept-illustration_114360-4723.jpg?w=740&t=st=1673959855~exp=1673960455~hmac=205b48eb278b4d32542567ca2736af17ad3fbf8828efc49935f09efaf3f5b4d4"
              className="gambar"
            />
          </section>

          {/*Bagian Universitas*/}
          <section id="school">
            <div className="mid">
              <div className="coloum">
                <p className="desc">Tentang Universitas</p>
                <h2>STMIK PGRI TANGERANG</h2>
                <p>
                  STMIK PGRI Tangerang, adalah salah satu universitas yang
                  berlokasi di Tangerang. Salah satu Universitas yang memiliki
                  akreditasi "A" dan memiliki segala fasilitas yang mendukung
                  Kegiatan Perkuliahan sebagai berikut :{" "}
                </p>
                <a className="paraf">
                  <p>Memiliki Ruangan ber-ac</p>
                  <p>Memiliki Wifi yang di butuhkan untuk mengakses Internet</p>

                  <p>
                    Memiliki Moodle atau website belajar khusus STMIK PGRI
                    Tangerang
                  </p>

                  <p>Memiliki Dosen yang terbaik di bidangnya</p>

                  <p>Memiliki Program beasiswa bagi siswa berprestasi</p>
                </a>
                <img
                  src="https://scontent.fcgk27-1.fna.fbcdn.net/v/t39.30808-6/299792641_464103635727979_2297222832507662848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEmTWwFcbf5HiK1utKvtNoF8Ly032UIpdbwvLTfZQil1tT44ZibsTypE0i_5vLe183jHc_1rZ8mE9ClEQpuoO0f&_nc_ohc=bZAN7eR1E9gAX9JdcKF&_nc_ht=scontent.fcgk27-1.fna&oh=00_AfBIl9vdIGuHjIuTlq-1wH4Nalnxk4UxOQ0zkWzJh3ReTw&oe=63CC0453"
                  className="gambar1"
                />
              </div>
              <div className="dosen">
                <div className="kartu-dosen">
                  <div className="coloum">
                    <p className="desc">Tentang Dosen</p>
                    <h1>DOSEN STMIK PGRI TANGERANG</h1>
                  </div>
                  <img src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7gYQZHYAAAAJ&citpid=1" />
                  <p> Didi Kurnaedi </p>
                </div>
              </div>
            </div>
          </section>

          {/*Bagian Company*/}
          <section id="company">
            <div className="coloum">
              <p className="desc">Tentang Perusahaan</p>
              <h2>PT. Jaya Guna Jati</h2>
              <p>
                PT. Jaya Guna Jati bergerak di bidang industri percetakan karton
                boks, di Perusahaan ini memiliki beberapa divisi yang
                menjalankan tugas-nya masing masing sesuai kemampuan dan
                keahlian yang telah di seleksi dari beberapa orang yang
                berkompeten
              </p>
              <p>
                Disini saya sebagai divisi Desainer untuk PT. Jaya Guna Jati,
                banyak mempelajari Keahlian baru di dunia desain, dan yang pasti
                mendapatkan wawasan yang baru untuk meningkatkan kualitas hidup
              </p>
            </div>
            <img
              src="https://gstatic.yellowsite.net/gpictures/900x600/2650/MXxhSDNncml4bHdoWnJRRzdvbW1uTUZBJnlhdz0yNy43MDkwN3x5ZWxsb3dwYWdlc2lkLmNvbV8w.jpg"
              className="gambr"
            />
          </section>

          <section id="journey">
            <div className="jur">
              <p className="ney">Pengalaman</p>
              <h2>Pengalaman Ku!</h2>
              <img src="https://img.freepik.com/free-vector/active-tourist-hiking-mountain-man-wearing-backpack-enjoying-trekking-looking-snowcapped-peaks-vector-illustration-nature-wilderness-adventure-travel-concept_74855-9800.jpg?w=826&t=st=1673972836~exp=1673973436~hmac=90fb15807c9c3fadb94e2ef3dc555627e0ea3b4b1a71750a30a75b21fe6ec5a5" />
              <p>
                Dimulai pada saat Sekolah dasar, Saya mulai belajar dan ingin
                mendalami ilmu komputer, Membeli dan Meminjam buku yang ada di
                perpustakaan tentang ilmu komputer, membuat Saya semakin ingin
                mendalami Ilmu Komputer.
              </p>
              <p>
                Dan Pada saat Sekolah Dasar saya menjadi Ketua Komputer di kelas
                3SD, mencoba mengalirkan ilmu yang sudah saya pelajari
                belakangan ini ke teman teman di kelas.
              </p>
              <p>
                Dan Di SMP tidak ada hal spesial tentang komputer, namun pada
                saat SMP saya mulai memperlajari Ilmu KOmputer dengan cara
                otodidak melalui Internet.
              </p>
              <p>
                Dan di Tingkat SMK saya mendapatkan jurusan Multimedia yang
                membuat Minat dan Bakar saya semakin terarah untuk ke dunia
                Desainer dan Programming, Dari sini saya mencoba untuk mengulik
                lebih Dalam tentang Dunia Desain dan Programming.
              </p>
              <p>
                Dan di tingkat Kuliah saya mengambil Jurusan Teknik Informatika
                dan lebih mendalami dunia Programming di Zaman yang sudah sangat
                maju dan berkembang ini.
              </p>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
