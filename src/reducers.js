import { combineReducers } from "redux";
import { ADD, DELETE, EDIT, UPDATE } from "./actions";

const AddandDelete = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { ...action.post, id: action.id }];

    case DELETE:
      return state.filter(eachPost => eachPost.id !== action.id);

    case UPDATE:
      return state.map(
        eachPost =>
          eachPost.id === action.id
            ? {
                ...eachPost,
                title: action.post.title,
                category: action.post.category,
                content: action.post.content,
                editing: !eachPost.editing
              }
            : eachPost
      );
    case EDIT:
      return state.map(
        eachPost =>
          eachPost.id === action.id
            ? { ...eachPost, editing: !eachPost.editing }
            : eachPost
      );

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  posts: AddandDelete
});
