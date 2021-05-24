import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Logout from "./pages/logout/Logout";
import Cart from "./pages/cart/Cart";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchField, setSearchField] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const handleCartItems = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} setSearchField={setSearchField} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleCartItems={handleCartItems}
                searchField={searchField}
              />
            )}
          />
          <Route path="/about" component={AboutUs} />
          <Route
            path="/products"
            render={() => (
              <Products
                handleCartItems={handleCartItems}
                searchField={searchField}
              />
            )}
          />

          <Route path="/product-detail/:slug" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
