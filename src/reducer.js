const initalState = {
    users: [{
      id: 1,
      email: 'test@mail.com',
      password: '123',
      role: 0
    },
    {
      id: 2,
      email: 'admin@mail.com',
      password: '123',
      role: 1
    }
    ],
    loggedIn: false,
    role: -1
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    
    case 'LOGGED_IN':
      return{
        ...state,
        users:[action.payload],
        loggedIn: true,
        role: action.payload.role
      }

    default:
      return state;
  }
};

export default reducer;