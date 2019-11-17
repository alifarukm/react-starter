import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <th>{product.productName}</th>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="success" onClick={()=>this.props.addToCart(product)}>Buy</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
