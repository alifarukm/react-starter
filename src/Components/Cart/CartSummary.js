import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Carts - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
              <Badge color="success"> {cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
              <Link to="cart">
                  Go to cart
              </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart(){
      return(
          <NavItem>
              <NavLink>Empty Cart</NavLink>
          </NavItem>
      );
  }
  render() {
    return <div>
        {this.props.cart.length>0 ? this.renderSummary(): this.renderEmptyCart()}
    </div>;
  }
}
