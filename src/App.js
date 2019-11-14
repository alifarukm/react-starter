import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import CategoryList from './Components/Category/CategoryList';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/Product/ProductList';

function App() {
  let categoryInfo = { title:"Category List" };
  let productInfo = {title: "Product List"};
  return (
    <div className="App">
      <Container>
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
