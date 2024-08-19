import React from 'react'
import './Sale.scss'
import ErrorIcon from '../assets/images/error_24dp_69B6FF_FILL0_wght400_GRAD0_opsz24.svg'

const Sale = () => {
  return (
    <div className='sale__container'>
      <h3>Сейчас акций нет.</h3>
      <div className="sale__box">
        <img src={ErrorIcon} alt="" />
        <ul>
            <li>Льготы предоставляются при покупке билетов в кассе кинотеатра, при предъявлении документов, подтверждающих право на льготу.</li>
            <li>За исключением блокбастеров первой прокатной недели или Меморандума.</li>
            <li>Льготы не суммируются с другими скидками и акциями.</li>
        </ul>
      </div>
    </div>
  )
}

export default Sale
