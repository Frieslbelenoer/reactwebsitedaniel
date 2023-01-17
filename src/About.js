import React from "react";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Site</h1>
      <p>Di halaman ini adalah biodata saya, silahkan Dipilih</p>
      <ul>
        <li>
          <Link to="/about/me" className="About">
            {" "}
            Me{" "}
          </Link>
        </li>
        <li>
          <Link to="/about/sosmed" className="About">
            {" "}
            Sosial Media{" "}
          </Link>
        </li>
        <li>
          <Link to="/about/pekerjaan" className="About">
            {" "}
            Pekerjaan{" "}
          </Link>
        </li>
        <li>
          <Link to="/about/sekolah" className="About">
            {" "}
            Sekolah{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
