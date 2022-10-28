import { useCallback, useEffect, useRef } from "react"
import { MdClose } from "react-icons/md"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import "./cart.css"
import CartItem from "./CartItem"
import products from "../../data/products.json"

const Cart = () => {
  const { isOpen, closeCart, cartQty } = useShoppingCart()
  const cartRef = useRef<HTMLElement | null>(null)

  const { cartItems } = useShoppingCart()

  const closeCartOnWindowClick = useCallback(
    (e: MouseEvent) => {
      if (!cartRef.current?.contains(e.target as HTMLElement)) {
        closeCart()
      }
    },
    [closeCart]
  )

  useEffect(() => {
    document.addEventListener("mousedown", closeCartOnWindowClick)

    return () => {
      document.removeEventListener("mousedown", closeCartOnWindowClick)
    }
  }, [closeCartOnWindowClick])

  return (
    <section ref={cartRef} className={`cart ${isOpen ? "open" : ""}`}>
      <header>
        <h2>Cart</h2>
        <button onClick={closeCart} className="btn btn-cart-close">
          <MdClose />
        </button>
      </header>
      <div className="cart-body">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} id={item.id} />)
        ) : (
          <p>No Items in your cart</p>
        )}
      </div>
      <div className="cart-footer">
        <div>
          <h3>total</h3>
          <p className="single-item__price">
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const product = products.find(
                  (product) => product.id === cartItem.id
                )
                return total + (product?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </p>
        </div>
        <button className="btn btn-checkout">Checkout</button>
      </div>
    </section>
  )
}

export default Cart
