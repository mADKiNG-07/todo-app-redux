import { FILE } from "dns";
import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  filter: string;
  searchTerm: string;
}

const initialState: State = {
  todos: [],
  filter: "ALL",
  searchTerm: "",
};

let latestId = 0;

const uuid = () => {
  latestId++;
  return latestId;
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: uuid(), text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: Todo) => todo.id !== action.payload.id
        ),
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODO:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo: Todo) => ({
          ...todo,
          completed: true,
        })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
