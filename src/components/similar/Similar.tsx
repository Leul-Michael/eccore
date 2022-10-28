import { useMemo } from "react"
import Tile from "../tile/Tile"
import productItems from "../../data/products.json"
import "./similar.css"
import { Link } from "react-router-dom"

type SimilarProps = {
  productId: number
}

const Similar = ({ productId }: SimilarProps) => {
  const similarProducts = useMemo(() => {
    return productItems
      .filter((item) => {
        return item.id !== productId
      })
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
  }, [productId, productItems])

  if (!similarProducts) {
    return null
  }

  return (
    <section className="similar-items">
      <div className="container similar-items__container">
        <h1 className="main-header">You may also like</h1>
        <div className="similar-item___grid">
          {similarProducts.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <Tile {...product} grid={true} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Similar
