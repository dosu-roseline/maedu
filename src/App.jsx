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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/:id" element={<ItemDetails />} />
        <Route path="/store/cart" element={<Cart />}></Route>
        <Route path="/store/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
