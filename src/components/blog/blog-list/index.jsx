import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import BlogItem from "../blog-item";
import { Link } from "react-router-dom";


export default class BlogList extends Component {

state = {blogs: []}

apiUrl = process.env.REACT_APP_BLOGS

fetchData = async () => {
  try {

    const response = await fetch(`${this.apiUrl}/blogs`)
    const data = await response.json()

if (response.ok){
    this.setState({blogs:data})
    console.log(data)
    console.log(this.state.blogs)
}
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

          <Button style={{marginLeft: "20px"}} variant="success" onClick={()=> {this.downloadData(blog.id)}}>Download</Button>
     
            </Col>
           ))
  }
      </Row>
      </>
    );
  }
}
