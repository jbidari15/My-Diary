import React, { Component } from "react";
import "./newPost.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAction, updateAction } from "./actions";

const uuidv1 = require("uuid/v1");

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.post.id || "",
      title: props.post.title || "",
      category: props.post.category || "",
      content: props.post.content || "",
      editing: props.post.editing || false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    let id = uuidv1();
    if (this.state.editing === false) {
      this.props.addPost(this.state, id);
    } else {
      this.props.updatePost(this.state, this.props.match.params.id);
    }

    this.props.history.push("/");
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form class="form-group" onSubmit={this.handleSubmit}>
        <div className="titleAndCategory">
          <div class="form-group" className="title">
            <label htmlFor="Title">Title:</label>
            <input
              class="form-control"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.change}
            />
          </div>
          <div className="category">
            <label htmlFor="Category">Category:</label>
            <input
              class="form-control"
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.change}
            />
          </div>
          <div class="form-group" className="newPost">
            <label>Write New Post:</label>
            <textarea
              class="form-control"
              name="content"
              id="newPost"
              cols={30}
              rows={20}
              value={this.state.content}
              onChange={this.change}
            />
          </div>
          <div className="saveAndCancel">
            <button class="btn btn-primary" type="submit">
              Save
            </button>
            <Link to="/">
              <button class="btn btn-secondary">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    post: state.posts.find(post => post.id === id) || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post, id) => dispatch(addAction(post, id)),
    updatePost: (post, id) => dispatch(updateAction(post, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
