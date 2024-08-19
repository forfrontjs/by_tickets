import React, { useState } from "react";
import "./Register.scss";
import { useRegisterUserMutation } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setUsernameError("");
    setPasswordError("");

    const person = {
      email,
      username,
      password,
    };

     if (!username) {
       setUsernameError("Обязательное поле");
       return;
     }
     if (!email) {
      setEmail("Обязательное поле");
      return;
     }
     if (!password) {
       setPasswordError("Обязательное поле");
       return;
     }

    try {
      const response = await registerUser(person).unwrap();
      localStorage.setItem("user", JSON.stringify(response));
      alert('Проверьте свою почту чтобы активировать учетную запись')
      navigate("/activate");
    } catch (err) {
      if (err.data) {
        const errorData = err.data;
        if (errorData.email) setEmailError(errorData.email[0]);
        if (errorData.username) setUsernameError(errorData.username[0]);
        if (errorData.password) setPasswordError(errorData.password[0]);
      }
    }
  };

  return (
    <div>
      <form className="register__container" onSubmit={handleSubmit}>
        <div className="register__box">
          <h2>Создать аккаунт</h2>
          <input
            className="register__box__inp"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <h5 className="register__box__error">{emailError}</h5>}
          <input
            className="register__box__inp"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && (
            <h5 className="register__box__error">{usernameError}</h5>
          )}
          <input
            className="register__box__inp"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {passwordError && (
            <h5 className="register__box__error">{passwordError}</h5>
          )}
          <button className="register__box__btn" type="submit">
            Зарегистрировать
          </button>
          <button
            className="register__box__btn"
            type="button"
            onClick={() => navigate("/login")}
          >
            Уже есть аккаунт, войти.
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
