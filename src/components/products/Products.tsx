import Tile from "../tile/Tile"
import "./products.css"
import productItems from "../../data/products.json"
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div className="products-grid pb-5 container">
      {productItems.map((product) => (
        <Link to={`/shop/${product.id}`} key={product.id}>
          <Tile
            id={product.id}
            grid={true}
            imgUrl={product.imgUrl}
            title={product.title}
            status={product.status}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  )
}

export default Products
