import React from 'react'
import Banner from './Swiper/Banner'
import './Home.scss'

import Cart from './Card/Card';
const date = new Date()
const month = date.getMonth()
let day = date.getDay()
const allMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня','Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const allDays = ['Воскресенье',  'Понедельник', 'Вторник', 'Среда',  'Четверг', 'Пятница', 'Суббота']
const Home = () => {
 
  return (
    <div>
      <Banner/>
        <div className="container">
            <div className="date__box">
              <div className="date__box__left">
                <div className="date__box__days" >Сегодня
                    <p>{date.getDate()} {allMonth[month]}</p>
                    </div>
                  <div className="date__box__days"> Завтра
                    <p>{date.getDate() +1}  {allMonth[month]}</p>
                  </div>
                  <div className="date__box__days"> {day ===5?allDays[0]:day === 6?allDays[1]:allDays[day +2]}
                    <p>{date.getDate() +2} {allMonth[month]}</p>
                  </div>
              </div>
             
            </div>
            <Cart/>
        </div>
      
    </div>
  )
}
export default Home
