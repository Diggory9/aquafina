import React from "react";
import "./Footer.css";

function Footer() {
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
      </div>
      <div className="navbar-bot">
        <div>
          <p>Copyright © 2022 Aquafina Vietnam</p>
          <p>
            AQUAFINA là thương hiệu nước uống đóng chai của Pepsico-Suntory.
            <br></br> Đây là kênh bán hàng của The Water MAN - nhà phân phối
            nước suối Aquafina.
          </p>
          <img src="./Frame 625334.png" alt="" />
          <img src="./Frame 625335.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
