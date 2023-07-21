import React from 'react'
import './Contact.scss'
import avatar from '../../../resources/img/billie.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
      {
        
        <div className='contact_box'>


          <div className='contact_box-avatar'>
            <img src={avatar} width="100%" height="100%" alt="avatar" />
            <h4>
              Billie eilish
            </h4>
            <h5>
              Owldw - singer
            </h5>
          </div>

          <div className='contact_box-description'>

            <div>
              <div className='contact_box-line'>
                <FontAwesomeIcon icon={faPhone} />
                <a href=''>
                  0704 112 2333 43
                </a>
              </div>
              <div className='contact_box-line'>
                <FontAwesomeIcon icon={faBuilding} />
                <p>
                  Company name
                </p>
              </div>

              <div className='contact_box-line'>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>
                  Job title
                </p>
              </div>
            </div>

          </div>

          <div className='contact_box-social'>
            <a href="https://www.instagram.com/itpark_uz/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://t.me/s/itpark_uz" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://www.linkedin.com/company/itparkuz/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.facebook.com/itparkuzb/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      }
    </div>
  )
}

export default Contact