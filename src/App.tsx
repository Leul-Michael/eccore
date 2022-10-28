import { Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Single from "./pages/Single"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Work from "./pages/Work"
import Cart from "./components/cart/Cart"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Single />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
