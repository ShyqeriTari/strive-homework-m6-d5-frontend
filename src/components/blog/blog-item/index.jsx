import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  render() {
    const { title, cover, author, _id } = this.props;
    return (
      
     
        <Card className="blog-card">
          <Card.Img variant="top" src={cover} className="blog-cover" />
          <Link to={`/blog/${_id}`} className="blog-link">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          </Link>
          <Card.Footer>
            <BlogAuthor {...author}/>
          </Card.Footer>
        </Card>
      
    );
  }
}
