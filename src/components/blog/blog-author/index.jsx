import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
export default class BlogAuthor extends Component {

  render() {
    return (
      <Row>
        <Col xs={2} className="mx-3">
          <Image className="blog-author" src={this.props.avatar} roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6 className="mr-3">{this.props.name}</h6>
        </Col>
      </Row>
    );
  }
}
