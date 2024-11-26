import React from "react";
import "./Login.css";
function Login() {
  const handleSubmit = () => {
    const phone = document.querySelector(".input-phone").value;
    if (!phone || phone.length < 8) {
      alert("Vui lòng nhập số điện thoại hợp lệ!");
      return;
    }
    window.location.href = `/register?phone=${phone}`;
  };
  return (
    <div className="login-container">
      <h1 className="title">
        KHÁM PHÁ PHONG CÁCH <span className="highlight">thuần khiết</span>
      </h1>
      <p className="subtitle">CÙNG AQUAFINA A.I</p>
      <p className="description">
        Nhận <span className="bold">thông điệp tỏa sáng</span> mỗi ngày
      </p>
      <img src="./Frame 625612.png" alt="Gifts" className="gift-image" />
      <p className="reward">
        Tổng quà tặng giá trị hơn{" "}
        <span className="highlight">200 triệu đồng</span>
      </p>

      <div className="login-form">
        <h2 className="form-title">ĐĂNG NHẬP</h2>
        <input
          type="text"
          className="input-phone"
          placeholder="Nhập số điện thoại của bạn"
        />
        <button className="btn-login" onClick={handleSubmit}>
          Đăng nhập
        </button>
        <p className="separator">Hoặc</p>
        <button className="btn-register">Đăng ký</button>
      </div>

      <a href="#" className="terms">
        Xem thêm thể lệ chi tiết
      </a>
    </div>
  );
}

export default Login;
