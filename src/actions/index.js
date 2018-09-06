export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const UPDATE = "UPDATE";

export const addAction = (post, id) => {
  return {
    type: ADD,
    post,
    id
  };
};

export const deleteAction = id => {
  return {
    type: DELETE,
    id
  };
};

export const editAction = id => {
  return {
    type: EDIT,
    id
  };
};

export const updateAction = (post, id) => {
  return {
    type: UPDATE,
    post,
    id
  };
};
