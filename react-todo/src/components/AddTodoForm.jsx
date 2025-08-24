// src/components/AddTodoForm.jsx
import { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRight: 'none',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;