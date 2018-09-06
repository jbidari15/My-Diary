import React, { Component } from "react";
import "../css/newPost.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateAction } from "../actions";

class EditPost extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      id: props.post.id || "",
      title: props.post.title || "",
      category: props.post.category || "",
      content: props.post.content || ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    let id = this.props.match.params.id;
    this.props.updatePost(this.state, id);
    this.props.history.push("/");
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="titleAndCategory">
          <div className="title">
            <label htmlFor="Title">Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.change}
            />
          </div>
          <div className="category">
            <label htmlFor="Category">Category:</label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.change}
            />
          </div>
          <div className="newPost">
            <label>Write New Post:</label>
            <textarea
              name="content"
              id="newPost"
              cols={30}
              rows={20}
              value={this.state.content}
              onChange={this.change}
            />
          </div>
          <div className="saveAndCancel">
            <button type="submit">Update</button>
            <Link to="/">
              <button>Cancel</button>
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
    updatePost: (post, id) => dispatch(updateAction(post, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
