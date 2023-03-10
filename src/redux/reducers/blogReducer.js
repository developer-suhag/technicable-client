import {
  ADD_CONTENT,
  ADD_TO_READING_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  readingHistory: [],
};
const blogReducer = (state = initialState, action) => {
  const readBlog = state.readingHistory.find(
    (blog) => blog._id === action.payload._id
  );
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs.filter((blog) => blog._id !== action.payload)],
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blog) => blog._id !== action.payload._id),
          action.payload,
        ],
        readingHistory: [
          ...state.readingHistory.filter(
            (blog) => blog._id !== action.payload._id
          ),
          action.payload,
        ],
      };
    case ADD_TO_READING_HISTORY:
      if (readBlog) {
        return state;
      }
      return {
        ...state,
        readingHistory: [...state.readingHistory, action.payload],
      };
    default:
      return state;
  }
};
export default blogReducer;
