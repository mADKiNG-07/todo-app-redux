// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllComplete } from "../redux/actions";

const FilterButtons = () => {
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

  const dispatch = useDispatch();
  const currentFilter = useSelector((state: State) => state.filter);

  const handleFilter = (filter: string) => {
    dispatch(filterTodo(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded  bg-gray-700 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm px-2 py-1 bg-purple-800 text-white rounded ml-2"
        onClick={() => dispatch(markAllComplete())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
