

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span
            className="aling-self-center"
            onClick={ () => onToggleTodo( todo.id ) }
        >
            { todo.description }
        </span>
        <button
            className="btn btn-danger"
            onClick={ () => onDeleteTodo( todo.id ) }
        >Borrar</button>
    </li>
  )
}
