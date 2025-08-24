// src/__tests__/TodoList.test.js
import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  // Test 1: Initial render with demo todos
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if completed todo is marked as completed
    const completedTodo = screen.getByText('Write Tests');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
    
    // Check if counters are correct
    expect(screen.getByText('Total: 3 | Completed: 1 | Pending: 2')).toBeInTheDocument();
  });

  // Test 2: Adding a new todo
  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Find the input and button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: 'Add' });
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if counters are updated
    expect(screen.getByText('Total: 4 | Completed: 1 | Pending: 3')).toBeInTheDocument();
  });

  // Test 3: Toggling a todo completion status
  test('toggles todo completion status when checkbox is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Find a todo that is not completed
    const todoText = screen.getByText('Learn React');
    const todoItem = todoText.closest('li');
    const checkbox = within(todoItem).getByRole('checkbox');
    
    // Toggle the checkbox
    await user.click(checkbox);
    
    // Check if the todo is now completed
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(checkbox).toBeChecked();
    
    // Check if counters are updated
    expect(screen.getByText('Total: 3 | Completed: 2 | Pending: 1')).toBeInTheDocument();
    
    // Toggle again to mark as incomplete
    await user.click(checkbox);
    
    // Check if the todo is now incomplete
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    expect(checkbox).not.toBeChecked();
  });

  // Test 4: Deleting a todo
  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Find a todo and its delete button
    const todoText = screen.getByText('Learn React');
    const todoItem = todoText.closest('li');
    const deleteButton = within(todoItem).getByRole('button', { name: 'Delete' });
    
    // Delete the todo
    await user.click(deleteButton);
    
    // Check if the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check if counters are updated
    expect(screen.getByText('Total: 2 | Completed: 1 | Pending: 1')).toBeInTheDocument();
  });

  // Test 5: Empty input validation
  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Get initial count of todos
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Try to add an empty todo
    const addButton = screen.getByRole('button', { name: 'Add' });
    await user.click(addButton);
    
    // Check that no new todo was added
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos).toHaveLength(initialCount);
  });

  // Test 6: Adding a todo with only spaces
  test('does not add todo with only spaces', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Get initial count of todos
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Try to add a todo with only spaces
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: 'Add' });
    
    await user.type(input, '   ');
    await user.click(addButton);
    
    // Check that no new todo was added
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos).toHaveLength(initialCount);
  });

  // Test 7: Display message when no todos
  test('displays message when there are no todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Check that the no todos message is displayed
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    
    // Check that counters show zero
    expect(screen.getByText('Total: 0 | Completed: 0 | Pending: 0')).toBeInTheDocument();
  });
});