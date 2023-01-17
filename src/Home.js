import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <h1>Home Site</h1>
      <p>
        Belajar react website dari awal, sampai jadi professional, Disini saya
        akan mencoba membuat UI/UX dan beberapa halaman website dengan React,
        React website mampu membuat project website single app application,
        Tidak perlu meRefresh halaman untuk ke halaman berikutnya
      </p>
      <p></p>

      <p>
        {" "}
        Saya membuat beberapa list program yang akan saya buat di website ini :{" "}
      </p>
      <ul>
        <li>Simple ToDo List</li>
        <li>Single-app-Application</li>
        <li>Biodata</li>
      </ul>
    </div>
  );
}
