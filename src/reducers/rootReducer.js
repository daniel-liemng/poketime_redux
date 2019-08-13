const initState = {
  posts: [
    {
      id: '1',
      title: 'Content 1',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque numquam, debitis aliquam aliquid quo voluptate harum obcaecati voluptatibus fuga.'
    },
    {
      id: '2',
      title: 'Content 2',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque numquam, debitis aliquam aliquid quo voluptate harum obcaecati voluptatibus fuga.'
    },
    {
      id: '3',
      title: 'Content 3',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque numquam, debitis aliquam aliquid quo voluptate harum obcaecati voluptatibus fuga.'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  // console.log(action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
