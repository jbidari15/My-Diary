import { combineReducers } from "redux";
import { ADD, DELETE, EDIT, UPDATE } from "../actions";
const initialState = [
  {
    id: "1",
    title: "Created Web Application",
    category: "work",
    content:
      "Bacon ipsum dolor amet kielbasa frankfurter prosciutto salami turducken brisket tail. Beef buffalo ground round, pork belly pork chop alcatra pork loin ribeye bresaola ham hock short ribs leberkas swine pastrami meatball. Shank porchetta ground round flank. Shankle pancetta t-bone, tongue flank filet mignon ham chuck buffalo pig short loin fatback. Picanha ham hamburger, drumstick spare ribs kielbasa tenderloin salami shank rump.",
    editing: false,
    date: "4/6/2018"
  },
  {
    id: "2",
    title: "Finished assignment",
    category: "study",
    content:
      "Bacon ipsum dolor amet kielbasa frankfurter prosciutto salami turducken brisket tail. Beef buffalo ground round, pork belly pork chop alcatra pork loin ribeye bresaola ham hock short ribs leberkas swine pastrami meatball. Shank porchetta ground round flank. Shankle pancetta t-bone, tongue flank filet mignon ham chuck buffalo pig short loin fatback. Picanha ham hamburger, drumstick spare ribs kielbasa tenderloin salami shank rump.",
    editing: false,
    date: "5/6/2018"
  }
];

const AddandDelete = (state = initialState, action) => {
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
