import {
  GET_LINKED_START,
  GET_LINKED_SUCCESS,
  GET_LINKED_FAILURE,
  ADD_WORKER_START,
  ADD_WORKER_SUCCESS,
  ADD_WORKER_FAILURE,
  UPDATE_WORKER_START,
  UPDATE_WORKER_SUCCESS,
  UPDATE_WORKER_FAILURE,
  DELETE_WORKER_START,
  DELETE_WORKER_SUCCESS,
  DELETE_WORKER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  PERSIST_LOGIN,
} from "../actions/";

const initialState = {
  linkedworkers: [],
  error: "",
  userobject: '',
  jwt: "",
  prisonId: "",
  loggedin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKED_START:
      return {
        ...state
      };
    case GET_LINKED_SUCCESS:
      return {
        ...state,
        linkedworkers: action.payload.map(prisoner => {
          if (prisoner.availability === 0) {
            return { ...prisoner, availability: false };
          } else if (prisoner.availability === 1) {
            return { ...prisoner, availability: true };
          } else {
            return prisoner;
          }
        })
      };
    case GET_LINKED_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_WORKER_START:
      return {
        ...state
      };
    case ADD_WORKER_SUCCESS:
      return {
        ...state,
        linkedworkers: action.payload
      };
    case ADD_WORKER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_WORKER_START:
      return {
        ...state
      };
    case UPDATE_WORKER_SUCCESS:
      return {
        ...state,
        linkedworkers: action.payload
      };
    case UPDATE_WORKER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_WORKER_START:
      return {
        ...state
      };
    case DELETE_WORKER_SUCCESS:
      return {
        ...state,
        linkedworkers: action.payload
      };
    case DELETE_WORKER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_USER_START:
      return {
        ...state
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userobject: action.payload,
        jwt: action.payload.token,
        prisonId: action.payload.id,
        loggedin: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        jwt: '',
        prisonId: "",
        loggedin: false
      }
    case PERSIST_LOGIN:
      return {
        ...state,
        loggedin: true,
        jwt: action.payload.token,
        prisonId: action.payload.id
      }
    default:
      return state;
  }
};

export default reducer;
