import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
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

  const filteredTodos = useSelector((state: State) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
