import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register-container">
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

      <div className="register-form">
        <h2 className="form-title">NHẬP OTP</h2>
        <p className="">
          Một mã sẽ được gửi vào số <span className="highlight">xxxxx</span>
        </p>
        <input
          type="text"
          className="input-phone"
          placeholder="Nhập số điện thoại của bạn"
        />
        <button className="btn-register">Xác nhận</button>
        <p className="reward">
          Mã sẽ được gửi trong vòng <span className="highlight">30s</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
