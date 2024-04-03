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

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const markCompleted = (id: number) => ({
  type: MARK_COMPLETED,
  payload: {
    id,
  },
});

export const markInComplete = (id: number) => ({
  type: MARK_INCOMPLETE,
  payload: {
    id,
  },
});

export const filterTodo = (filter: string) => ({
  type: FILTER_TODO,
  payload: {
    filter,
  },
});

export const markAllComplete = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm: string) => ({
  type: UPDATE_SEARCH_TERM,
  payload: {
    searchTerm,
  },
});
