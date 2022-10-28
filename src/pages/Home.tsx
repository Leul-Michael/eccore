import Tile from "../components/tile/Tile"
import Products from "../components/products/Products"

const Home = () => {
  return (
    <main className="home__hero">
      <div className="container-fluid pt-5">
        <div className="home__container container">
          <Tile
            id={12000}
            grid={false}
            imgUrl="/imgs/img-left.jpg"
            title="decor"
            status="available"
            price={250}
          />
          <div className="home__text-content">
            <h1 className="main-header">Best things for Everything</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
              odio.
            </p>
            <button className="btn">Shop now</button>
          </div>
          <Tile
            id={12000}
            grid={false}
            imgUrl="/imgs/img-right.jpg"
            title=""
            status="available"
            price={250}
          />
        </div>
      </div>
      <Products />
    </main>
  )
}

export default Home
