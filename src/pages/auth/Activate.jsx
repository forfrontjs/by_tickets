import React, {useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useActivateUserMutation } from '../../store/userSlice'
import './Activate.scss'


const Activate = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [activateUser, { isLoading, error, isSuccess }] = useActivateUserMutation()

   const query = new URLSearchParams(location.search);
   const uid = query.get("uid");
   const token = query.get("token");

   useEffect(() => {
     if (uid && token) {
       activateUser({ uid, token });
     }
   }, [uid, token, activateUser]);

   useEffect(() => {
     if (isSuccess) {
       navigate("/activate");
     }
   }, [isSuccess, navigate]);
  return (
    <div className="activate">
      <div className="activate__box">
        <h2 className="activate__box__title">Добро пожаловать!!!</h2>
        <h4 className="activate__box__title">Вы активированы</h4>
        <h4 className="activate__box__title">Нажмите на кнопку Войти</h4>
        <button
          className="activate__box__btn"
          onClick={() => navigate("/login")}
        >
          Войти
        </button>
        {isLoading && <p>Активация учетной записи...</p>}
        {error && (
          <p className="error">
            Ошибка активации: {error?.data ? error.data.detail : error.error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Activate
