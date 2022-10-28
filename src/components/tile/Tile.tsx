import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import "./tile.css"

type TileProps = {
  id: number
  grid: boolean
  imgUrl: string
  title: string
  status: string
  price: number
}

const Tile = ({ id, grid, imgUrl, title, price, status }: TileProps) => {
  const { increaseItemQty } = useShoppingCart()

  return (
    <div className={`tile ${grid ? "grid" : ""}`}>
      <div className="tile__img">
        <img src={imgUrl} alt="" />
        {status === "sold" && <div className="tile__status">{status}</div>}
      </div>
      {grid && (
        <div className="tile__content">
          <p className="tile__title">{title.substring(0, 50)}</p>
          <div className="tile__flex">
            <p className="tile__price">{formatCurrency(price)}</p>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                increaseItemQty(id)
              }}
              disabled={status === "sold"}
              className="btn btn-cart"
            >
              ADD +
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tile
