import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const initialState = {
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

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;