import React, {useState} from 'react'
import { useResetPasswordMutation } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import './ResetPassword.scss'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [resetPassword] = useResetPasswordMutation()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const person = {
      email
    }
    await resetPassword(person)
  }
  return (
    <div className='reset '>
        <form className="reset__box" onSubmit={handleSubmit}>
            <h2>Сброс пароля</h2>
            <span className="reset__box__text">
            Введите email и нажмите отправить для сброса пароля, далее проверьте
            почту.
            </span>
            <input type="email"  placeholder='введите email' className='reset__box__inp' onChange={(e) => setEmail(e.target.value)} required/>
            <button className='reset__box__btn'>Oтправить</button>
        </form>
    </div>
  )
}

export default ResetPassword
