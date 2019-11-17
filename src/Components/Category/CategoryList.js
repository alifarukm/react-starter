import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  //With old version you do not have to do constructor.
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(res => this.setState({ categories: res }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
            active={category.categoryName === this.props.currentCategory ? true : false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              className="justify-content-between"
            >
              {category.categoryName} <Badge pill>{}</Badge>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
