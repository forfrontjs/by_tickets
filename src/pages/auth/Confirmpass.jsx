import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useResetPasswordConfirmMutation } from '../../store/userSlice'
import './Confirmpass.scss'

const Confirmpass = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [resetPasswordConfirm] = useResetPasswordConfirmMutation()

  const query = new URLSearchParams(location.search);
  const uid = query.get("uid");
  const token = query.get("token");
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (newPassword !== confirmPassword){
      alert("Пароли не совпадают");
      return;
    }

    try {
      await resetPasswordConfirm({ uid, token, new_password: newPassword }).unwrap();
      alert("Пароль успешно сброшен");
      navigate("/login");
    } catch (err) {
      console.error("Ошибка сброса пароля:", err);
    }
  };
  

  return (
    <div className="confirm" onSubmit={handleSubmit}>
      <form className="confirm__box">
        <h2>Введите новый пароль</h2>
        <input
          type="password"
          placeholder="Новый пароль"
          className="confirm__box__inp"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input type="password" className='confirm__box__inp' placeholder="Подтвердите новый пароль" onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button className="confirm__box__btn" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default Confirmpass
