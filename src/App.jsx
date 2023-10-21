import { Nav } from './components/Nav'
import { Route, Routes } from "react-router-dom";
import { Home } from './views/Home';
import { Cart } from './views/Cart';
import { Product } from './views/Product';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Nav />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pizza/:name" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
