import React from 'react'
import "./Fotter.css"
import logo from "../images/Bitnet.live.png"


const Fotter = () => {
    const links1 = [
        { href: '#', title: 'User Interface Design' },
        { href: '#', title: 'DigitalImaging' },
        { href: '#', title: 'Motion Ads' },
        { href: '#', title: 'Visual documentation' }
      ];
      const links2 = [
        { href: '#Aboutus', title: 'About Us' },
        { href: '#Carrer', title: 'Carrer' },
        { href: '#Contact', title: 'Contact' },
      ];

  return (
<>
<footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <img className="footer__logo" src= {logo} alt="Logo" />
          <p className="footer__description">Dive into the world of Metaverse, Artificial Intelligence, Blockchain, Robotics, and Web3.0.</p>
          <div className="footer__social">
            <a href="#" className="footer__social-link"> 
              <img src="./src/images/icon1.svg" alt="" />
            </a>
            <a href="#" className="footer__social-link"> 
            <img src="./src/images/icon2.svg" alt="" />
            </a>
            <a href="#" className="footer__social-link"> 
            <img src="./src/images/icon3.svg" alt="" />
            </a>
            <a href="#" className="footer__social-link"> 
            <img src="./src/images/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Important Links</h3>
          <ul className="footer__list">
            {links1.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">More Links</h3>
          <ul className="footer__list">
            {links2.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Informative Links</h3>
          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">© 2024 Your Company Name</p>
    </footer>

</>
  )
}

export default Fotter