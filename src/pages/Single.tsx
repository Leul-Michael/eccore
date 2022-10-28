import { useParams } from "react-router-dom"
import { formatCurrency } from "../utils/formatCurrency"
import productItems from "../data/products.json"
import { useEffect, useMemo } from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import Similar from "../components/similar/Similar"

const Single = () => {
  const { productId } = useParams()
  const { increaseItemQty, getItemQty, decreaseItemQty } = useShoppingCart()

  const product = useMemo(() => {
    return productItems.filter((item) => {
      return item.id === Number(productId)
    })[0]
  }, [productId, productItems])

  const qty = getItemQty(product?.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  if (!product) {
    return (
      <section className="pb-5 single-item">
        <div className="container single-item__container">
          <p className="single-item__desc">Product not found!</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pb-5 single-item">
        <div className="container single-item__container">
          <div className="img-container">
            <img src={product.imgUrl} alt="" />
          </div>
          <div className="single-item__content">
            <h1>{product.title}</h1>
            <p className="single-item__price">
              {formatCurrency(product.price)}
            </p>
            <p className="single-item__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              enim neque tempore, fuga beatae quos deleniti eos nostrum cum
              optio.
            </p>
            {qty === 0 ? (
              <button
                onClick={() => increaseItemQty(product.id)}
                disabled={product.status === "sold"}
                className="btn"
              >
                Add to Cart
              </button>
            ) : (
              <div className="single-item__qty-btns">
                <button
                  onClick={() => decreaseItemQty(product.id)}
                  className="btn btn-qty"
                >
                  -
                </button>
                <p>{qty}</p>
                <button
                  onClick={() => increaseItemQty(product.id)}
                  className="btn btn-qty"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Similar productId={product.id} />
    </>
  )
}

export default Single
