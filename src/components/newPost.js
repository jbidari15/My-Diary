import React, { Component } from "react";
import "../css/newPost.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAction, updateAction } from "../actions";

const uuidv1 = require("uuid/v1");

class NewPost extends Component {
  constructor(props) {
    super(props);

    const today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    this.state = {
      id: props.post.id || "",
      title: props.post.title || "",
      category: props.post.category || "",
      content: props.post.content || "",
      editing: props.post.editing || false,
      date: date
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
      <form className="form-group" onSubmit={this.handleSubmit}>
        <div className="titleAndCategory">
          <div className="form-group" className="title">
            <label htmlFor="Title">Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.change}
            />
          </div>
          <div className="category">
            <label htmlFor="Category">Category:</label>
            <input
              className="form-control"
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.change}
            />
          </div>
          <div className="form-group" className="newPost">
            <label>Write New Post:</label>
            <textarea
              className="form-control"
              name="content"
              id="newPost"
              cols={30}
              rows={20}
              value={this.state.content}
              onChange={this.change}
            />
          </div>
          <div className="saveAndCancel">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
            <Link to="/">
              <button className="btn btn-secondary">Cancel</button>
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
