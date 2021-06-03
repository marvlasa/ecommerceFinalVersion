import "./App.css";

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Logout from "./pages/logout/Logout";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Header from "./components/Header";
import OrderDetail from "./pages/orderDetail/OrderDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchField, setSearchField] = useState("");
  // const [cartItems, setCartItems] = useState([]);

  // const handleCartItems = (item) => {
  //   setCartItems((cartItems) => [...cartItems, item]);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchField={setSearchField} />

        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route path="/about" component={AboutUs} />
          <Route
            path="/products"
            render={() => <Products searchField={searchField} />}
          />
          <Route path="/product/:slug" render={() => <ProductDetail />} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/account" component={Account} />
          <Route path="/orderDetail" component={OrderDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
