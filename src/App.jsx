import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Store from './pages/Store';
import ItemDetails from './components/ItemDetails';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrollToTop';
import StoreList from './pages/StoreList';
import { CartProvider } from './context/CartContext';
import Success from './pages/Success';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/:source/:id" element={<ItemDetails />} />
          <Route path="/store/list" element={<StoreList />} />
          <Route path="/store/cart" element={<Cart />}></Route>
          <Route path="/store/checkout" element={<Checkout />}></Route>
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
