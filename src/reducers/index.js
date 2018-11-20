const initialState = {
  users : [],
  nextId : 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':
      const newUser = {
        name: action.name,
        image: action.image,
        id: state.nextId
      };
      return {
        nextId: state.nextId + 1,
        users: state.users.concat([newUser])
      };

    case 'USER_REMOVE': 
      const usersModif = state.users.filter(user => user.id !== action.id)  
      return {...state, users: usersModif};

    default:
      return state;
  }
}

export default reducer;