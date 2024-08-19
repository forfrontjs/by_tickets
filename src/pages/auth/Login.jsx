import React, {useState} from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../store/userSlice';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const [loginUser, { isLoading}] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError(null);
    setPasswordError(null);

    const person = {
      username,
      password,
    };

    if (!username) {
      setUsernameError("Обязательное поле");
      return;
    }
    if (!password) {
      setPasswordError('Обязательное поле');
      return;
    }

    try {
      await loginUser(person).unwrap();
      localStorage.setItem('user', JSON.stringify(person))
      alert('Вы вошли в аккаунт')
      navigate('/'); 
    } catch (err) {

      if (err?.data) {
        if (err.data.username) {
          setUsernameError(err.data.username);
        }
        if (err.data.password) {
          setPasswordError(err.data.password);
        }
        if (!err.data.username && !err.data.password && err.data.detail) {
          setUsernameError(err.data.detail);
        }
      } else {
        setUsernameError('Ошибка');
      }
    }
  };

  

  return (
    <div>
    <form className='login__container' onSubmit={handleSubmit}>
        <div className="login__box">
            <h2>Авторизация</h2>
            <input type="text"  value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            {usernameError && <h5 className='login__box__error'>{usernameError}</h5>}
            <input type="password"  value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            {passwordError && <h5 className='login__box__error'>{passwordError}</h5>}
            <button className='login__box__btn' type='submit'disabled={isLoading}>
            {isLoading ? 'Вход...' : 'Войти'}</button>
            <div className="login__box__btns">
                <button className='login__box__btns__register' onClick={() => navigate("/register")} type='button'>Регистрация</button>
                <button className='login__box__btns__register' onClick={() => navigate("/reset_password")} type='button'>Забыли пароль?</button>
            </div>
        </div>
      
    </form>
   
    </div>
  )
}

export default Login
