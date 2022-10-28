import { useState, useEffect } from "react"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import "./header.css"

const Header = () => {
  const [small, setSmall] = useState(false)
  const { openCart, cartQty } = useShoppingCart()

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.scrollY > 50)
      })
    }
  }, [])

  function toggleTheme() {
    document.body.classList.contains("light-theme") ? darkTheme() : lightTheme()
  }

  function darkTheme() {
    document.body.classList.replace("light-theme", "dark-theme")
  }

  function lightTheme() {
    document.body.classList.replace("dark-theme", "light-theme")
  }

  return (
    <header className={`header ${small ? "scrolled" : ""}`}>
      <nav className="header__container container-fluid">
        <ul className="header__list">
          <li tabIndex={0} className="header__theme-icon" onClick={toggleTheme}>
            <input tabIndex={-1} type="checkbox" />
            <span className="slider"></span>
            <BsMoonFill className="header__theme-dark" />
            <BsSunFill className="header__theme-light" />
          </li>
          <li tabIndex={0} className="header__link">
            <AiFillYoutube className="link-icon" />
          </li>
          <li tabIndex={0} className="header__link">
            <AiOutlineInstagram className="link-icon" />
          </li>
          <li tabIndex={0} className="header__link">
            <AiOutlineTwitter className="link-icon" />
          </li>
        </ul>
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <ul className="header__list">
          <li tabIndex={0} className="header__link">
            <Link tabIndex={-1} to="/shop">
              Shop
            </Link>
          </li>
          <li tabIndex={0} className="header__link">
            <Link tabIndex={-1} to="/work">
              Work
            </Link>
          </li>
          <li tabIndex={0} className="header__link">
            <Link tabIndex={-1} to="/about">
              About
            </Link>
          </li>
          <li
            onClick={() => {
              openCart()
            }}
            className="header__link cart__link"
          >
            Cart <span className="cart-quantity">({cartQty || 0})</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
