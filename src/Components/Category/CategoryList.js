import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  //With old version you do not have to do constructor.
  constructor(props) {
    super(props);
    this.state = {
        categories: [
            {categoryId:1,categoryName:"Car"},
            {categoryId:2,categoryName:"Plane"}
        ],
        counter:1
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            Cras justo odio <Badge pill>14</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Dapibus ac facilisis in <Badge pill>2</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
