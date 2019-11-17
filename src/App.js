import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import CartList from './Components/Cart/CartList';
import CategoryList from './Components/Category/CategoryList';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/Product/ProductList';

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };
  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ products: res }));
  };
  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 2);
  };

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed!");
  };
  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div className="App">
        <Container>
          <Navigation
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          />
          <br />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      info={productInfo}
                      products={this.state.products}
                      addToCart={this.addToCart}
                    />
                  )}
                />
                <Route exact path="/cart" render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )} />
                <Route component={CartList} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
