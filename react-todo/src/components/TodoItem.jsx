// src/components/TodoItem.jsx
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '10px', 
      border: '1px solid #ddd', 
      marginBottom: '10px',
      borderRadius: '4px',
      backgroundColor: todo.completed ? '#f8f9fa' : '#fff'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#6c757d' : '#000'
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;