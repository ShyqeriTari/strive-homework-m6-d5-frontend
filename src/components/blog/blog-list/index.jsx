import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import BlogItem from "../blog-item";
import { Link } from "react-router-dom";


export default class BlogList extends Component {

state = {blogs: [], cart: []}

apiUrl = process.env.REACT_APP_BLOGS

fetchData = async () => {
  try {

    const response = await fetch(`${this.apiUrl}/product?limit=5,11`)
    const data = await response.json()

if (response.ok){
    this.setState({...this.state.cart, blogs:data})
    console.log(data)
    console.log(this.state.blogs)
}
  } catch (error) {
    console.log(error)
  }
}

fetchCart = async () => {
  try {

    const response = await fetch(`${this.apiUrl}/cart`)
    const data = await response.json()

if (response.ok){
    this.setState({...this.state.blogs, cart:data})
    console.log(data)
    console.log(this.state.cart)
}
  } catch (error) {
    console.log(error)
  }
}

handleDelete = async (canc) => {
      try {
        await fetch(
          `${this.apiUrl}/cart/${canc}`,
          {
            method: "DELETE",
           
          }
        )
      } catch (error) {
        console.log(error)
      }
    }

addCart = async (name, price, quantity, productId) => {

  try {
    await fetch(
      `${this.apiUrl}/cart`,
      {
        method: "POST",
        body: JSON.stringify({"name": name,
        "price": price, 
        "quantity": quantity, 
        "productId":productId}),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    
  } catch (error) {
    console.log(error)
  }
}

// DownloadData = async (blogId) => {
//   try {

//     const response = await fetch(`${this.apiUrl}/files/downloadPDF/${blogId}`)

// if (response.ok){
//     console.log("pdf downloaded")
// }
//   } catch (error) {
//     console.log(error)
//   }
// }

downloadData= (blogId) =>  {
    window.open(`${this.apiUrl}/files/downloadPDF/${blogId}`);
  };

componentDidMount = () => {
  this.fetchData()
  this.fetchCart()
}

componentDidUpdate = (prevProps, prevState) => {
  if(prevState === this.state.blogs){
  this.fetchData()
  }
}

  render() {
    return (
      <>
      {/* <Row>
        {posts.map((post) => (
          <Col md={4} key={post._id} style={{ marginBottom: 50 }}>
            <BlogItem {...post} />
          </Col>
        ))}
      </Row> */}
      <Row>
        {this.state.blogs.map(blog =>(
         
        <Col key={blog.id}>
            <BlogItem {...blog} />
            <Link to={`/new/${blog.id}`}>
          <Button>Edit</Button>
          </Link>

          <Button style={{marginLeft: "15px"}} variant="success" onClick={()=> {this.downloadData(blog.id)}}>Download</Button>
          <Button style={{marginLeft: "15px"}} onClick={()=> {this.addCart(blog.name, blog.price, 3, blog.id)}} onKeyUp={()=> this.fetchCart()}>add</Button>
     
            </Col>
           ))
  }

  <h1 className="mt-5 mb-3">CART</h1>
<Row>

{this.state.cart.map(cart =>(
<Col key={cart.id}>
<p>Name: {cart.name}</p>
<p>Price: {cart.price}</p>
<p>Quantity: {cart.quantity}</p>
<Button variant="danger" type="submit" className="mx-2" onClick={()=>{this.handleDelete(cart.id)}}>
        Delete
      </Button>
</Col>
))}
</Row>

      </Row>
      </>
    );
  }
}
