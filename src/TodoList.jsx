import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        // todoItem으로 todo, todos, setTodos 보내줌
        <TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </ul>
  );
}
