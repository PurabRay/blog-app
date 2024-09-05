const initialState = {
    blogs: [], 
  };
  
  const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOG':
        return { ...state, blogs: [...state.blogs, action.payload] }; // Add blog with category
      case 'EDIT_BLOG':
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog.id === action.payload.id ? action.payload : blog
          ),
        };
      case 'DELETE_BLOG':
        return {
          ...state,
          blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default blogsReducer;
  