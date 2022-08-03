import React, { Component } from "react";
import axios from "axios";
import "./test.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="container">
          <div className="left">
            <Link to="/">
              <Button variant="danger">Logout</Button>
            </Link>
          </div>
          <div className="row">
            <h1 className="whitecolor">Contacts</h1>
            <div className="col-xs-12 col-sm-offset-3 col-sm-6">
              <div className="panel panel-default">
                <ul className="list-group" id="contact-list">
                  {posts.length
                    ? posts.map((post, index) => (
                        <>
                          <li key={post.id} className="list-group-item">
                            <div className="col-xs-12 col-sm-3">
                              <img
                                src={
                                  "http://api.randomuser.me/portraits/men/" +
                                  index +
                                  ".jpg"
                                }
                                alt="Scott Stevens"
                                className="img-responsive img-circle"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-9">
                              <span className="name">{post.name}</span>
                              <br />
                            </div>
                            <div className="clearfix"></div>
                          </li>
                        </>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostList;
