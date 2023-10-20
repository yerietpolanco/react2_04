import { Nav } from './components/Nav'
import { Route, Routes } from "react-router-dom";
import { Home } from './views/Home';
import { Cart } from './views/Cart';
import { Product } from './views/Product';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pizza/:product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
