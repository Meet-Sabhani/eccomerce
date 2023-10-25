import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsaap_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOOPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-containers">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-containers">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-containers">
            <img src={whatsaap_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>Copyright &copy;2023 - All right Reserverd</p>
      </div>
    </div>
  )
}

export default Footer