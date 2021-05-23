import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Register from "./pages/register/Register";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ProductDetail />
    </div>
  );
}

export default App;
