const crypto = require("crypto");

const initalState = {
  profiles: [{}],
  users: [
    {
      fullname: "user1",
      id: 1,
      email: "test@mail.com",
      password: "123",
      role: 0,
    },
    {
      id: 2,
      fullname: "user2",

      email: "admin@mail.com",
      password: "123",
      role: 1,
    },
  ],

  user: null,
  loggedIn: false,
  role: -1,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,

        user: action.payload,
        loggedIn: true,
        role: action.payload.role,
      };
    case "SIGN_UP":
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.payload,
            role: 0,
            id: crypto.randomBytes(2).toString("hex"),
          },
        ],
      };
    case "ADD_PROFILE":
      var { profiles } = state;

      if (profiles) {
        return {
          ...state,
          profiles: [...profiles, action.payload],
        };
      } else {
        return {
          ...state,
          profiles: [action.payload],
        };
      }

    case "LOGOUT":
      return {
        ...state,
        user: null,
        loggedIn: false,
        role: 0,
      };

    default:
      return { ...state };
  }
};

export default reducer;
