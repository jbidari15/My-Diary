import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "../css/postDetail.css";
class Home extends Component {
  render() {
    const allPosts = this.props.allPosts.map((eachPost, i) => {
      return (
        <div key={`index +${i}`} className="alert alert-secondary">
          <Link to={`/posts/${eachPost.id}`}>
            <div className="list-group-item" className="eachPost">
              <div className="title">{eachPost.title}</div>
              <div className="category">{eachPost.category}</div>
              <div className="category">{eachPost.date}</div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div>
        <div className="nav">
          <Link to="/posts/newpost">
            <Button className="addButton" color="success">
              Add Post
            </Button>
          </Link>
          <h3>Welcome to the DIARY</h3>
        </div>

        <div>
          <div className="allPosts">{allPosts}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    allPosts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
