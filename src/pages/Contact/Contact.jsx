import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Contact.scss'


const Contact = () => {
    
  return (
    <div className="contact">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.686474679603!2d74.61134877016701!3d42.87615279959249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2sZUM%20Aichurok!5e0!3m2!1sen!2skg!4v1687722914760!5m2!1sen!2skg"
            style={{
            width: "100%",
            height: "600px",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
            }}
        ></iframe>
        <div className="contact__box container">
            <div className="contact__box__top">
                <div className="contact__box__top__inps">
                    <input className='inps' type="text" placeholder='Имя' />
                    <input className='inps' type="text" placeholder='Почта' />
                    <input className='inps' type="tel" placeholder='Телефон'/>
                </div>
                <div className="contact__box__message">
                    <textarea name="" id="" placeholder='Сообщение'>
                    </textarea>
                </div>
            </div>
                <div className="contact__accept">
                    <div className="contact__accept__box">
                        <input type="checkbox"  className='contact__accept__box__inp'/>
                        <span>Я принимаю условия <a target="_blank" href="/policy">пользовательского соглашения</a></span>
                    </div>
                   <button className='contact__accept__btn'>Отправить</button>
                </div>
            
        </div>
    </div>
  )
}

export default Contact
