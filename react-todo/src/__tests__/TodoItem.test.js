// src/__tests__/TodoItem.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../components/TodoItem';

describe('TodoItem', () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders todo text and buttons', () => {
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  test('calls onToggle when checkbox is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    await user.click(deleteButton);
    
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('shows completed style when todo is completed', () => {
    const completedTodo = { ...todo, completed: true };
    render(<TodoItem todo={completedTodo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});