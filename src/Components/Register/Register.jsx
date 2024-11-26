import "./Register.css";
import React, { useState, useEffect } from "react";
function Register() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResendAllowed, setIsResendAllowed] = useState(false);
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsResendAllowed(true);
    }
  }, [timeLeft]);
  const handleResendCode = () => {
    if (isResendAllowed) {
      setTimeLeft(30);
      setIsResendAllowed(false);
    } else {
      alert("Vui lòng đợi 30 giây trước khi gửi lại mã.");
    }
  };
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
        <p className="reward">
          Một mã sẽ OTP sẽ được gửi vào số <span className="highlight"></span>
        </p>
        <input type="text" className="input-phone1" />
        <input type="text" className="input-phone1" />
        <input type="text" className="input-phone1" />
        <input type="text" className="input-phone1" />
        <button className="btn-register">Xác nhận</button>
        <p className="reward">
          Mã sẽ được gửi trong vòng <span className="highlight">30s</span>
        </p>

        <a href="#" onClick={handleResendCode}>
          {isResendAllowed ? "Gửi lại mã" : `Chờ ${timeLeft}s để gửi lại`}
        </a>
      </div>
    </div>
  );
}

export default Register;
