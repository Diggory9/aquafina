import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src="./Frame.png" alt="Aquafina Logo" className="logo" />
        <ul className="menu">
          <li>Cộng đồng sống xanh</li>
          <li>Bản đồ xanh</li>
          <li>Tài khoản của tôi</li>
          <li>Bảng xếp hạng</li>
          <li>Điều khoản và thể lệ</li>
        </ul>
        <img src="./back.png" alt="Aquafina Logo" className="icon-back" />
      </div>
      <div className="navbar-bottom">
        <button className="btn-ai">Phân tích A.I</button>
        <span className="description">Khám phá phong cách thuần khiết</span>
      </div>
    </div>
  );
}

export default Navbar;
