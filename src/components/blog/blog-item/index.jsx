import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  render() {
    const { name, image, id } = this.props;
    return (
      
     
        <Card className="blog-card">
          <Card.Img variant="top" src={image} className="blog-cover" />
          <Link to={`/blog/${id}`} className="blog-link">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          </Link>
          <Card.Footer>
            {/* <BlogAuthor {...author}/> */}
          </Card.Footer>
        </Card>
      
    );
  }
}
