import React, { Component } from "react";
import "./postDetail.css";
import { Link } from "react-router-dom";
import { deleteAction, editAction } from "./actions";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class PostDetail extends Component {
  render() {
    let id = this.props.match.params.id;
    let postDetail = this.props.allPosts.map(eachPost => {
      if (eachPost.id === id) {
        return (
          <div className="card">
            <div className="card-link" className="backAndDelete">
              <Link to="/">
                <Button className="customButton " color="info">
                  Back to Posts
                </Button>
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{eachPost.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {eachPost.category}
              </h6>
              <p className="card-text">{eachPost.content}</p>
              <Link to="/">
                <Button
                  color="danger"
                  onClick={() => this.props.deletePost(eachPost.id)}
                >
                  Delete Post
                </Button>
              </Link>

              <Button
                color="success"
                onClick={id => {
                  this.props.editPost(this.props.match.params.id);
                  this.props.history.push(`/posts/${eachPost.id}/edit`);
                }}
              >
                Edit Post
              </Button>
            </div>
          </div>
        );
      }
    });
    return <div>{postDetail}</div>;
  }
}
const mapStateToProps = state => {
  return {
    allPosts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deleteAction(id)),
    editPost: id => dispatch(editAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
