import { formatCurrency } from "../../utils/formatCurrency"
import products from "../../data/products.json"
import "./cart.css"
import { useShoppingCart } from "../../context/ShoppingCartContext"

type CartItemProps = {
  id: number
}

const CartItem = ({ id }: CartItemProps) => {
  const { getItemQty, increaseItemQty, decreaseItemQty, removeItem } =
    useShoppingCart()

  const qty = getItemQty(id)

  const item = products.find((product) => {
    return product.id === Number(id)
  })

  if (item === null) {
    return null
  }

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={item?.imgUrl} alt="" />
      </div>
      <div className="cart-item__body">
        <h3>{item?.title}</h3>
        <p className="single-item__price">
          {formatCurrency(Number(item?.price))}
        </p>
        <div className="single-item__qty-btns">
          <button onClick={() => decreaseItemQty(id)} className="btn btn-qty">
            -
          </button>
          <p>{qty}</p>
          <button onClick={() => increaseItemQty(id)} className="btn btn-qty">
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="btn btn-qty btn-cart-remove"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
