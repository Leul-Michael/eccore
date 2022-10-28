import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer__logo">
          <h1>LOGO</h1>
          <p className="footer__copyright">
            ©2022 All rights legally reserved!
          </p>
        </div>
        <div className="footer__links">
          <ul>
            <p className="footer__muted">Pages</p>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>FAQs</li>
          </ul>
          <ul>
            <p className="footer__muted">Support</p>
            <li>Wholesale</li>
            <li>Contact</li>
          </ul>
          <ul>
            <p className="footer__muted">Social</p>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Tiktok</li>
          </ul>
          <ul>
            <p className="footer__muted">Legal</p>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <p className="footer__muted">Sign up for more</p>
          <div className="input-box">
            <input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
