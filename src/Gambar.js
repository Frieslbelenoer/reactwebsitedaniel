import React, { Component } from "react";

export default class Gambar extends Component {
  state = {
    Img: [
      "file:///C:/Users/epicg/OneDrive/Gambar/background-katalog-aggregate-300x200.jpg",
    ],
  };

  render() {
    let num = Math.floor(Math.random() * Math.floor(0));

    return (
      <div>
        <img src={this.state.img[num]} alt="gambar-img" />
      </div>
    );
  }
}
