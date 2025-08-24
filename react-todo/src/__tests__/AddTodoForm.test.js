// src/__tests__/AddTodoForm.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  test('calls onAdd with the input text when form is submitted', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: 'Add' });
    
    // Type text and submit
    await user.type(input, 'Test Todo');
    await user.click(addButton);
    
    // Check if onAdd was called with correct text
    expect(mockOnAdd).toHaveBeenCalledWith('Test Todo');
    
    // Check if input is cleared after submission
    expect(input).toHaveValue('');
  });

  test('does not call onAdd when input is empty', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const addButton = screen.getByRole('button', { name: 'Add' });
    
    // Try to submit without entering text
    await user.click(addButton);
    
    // Check that onAdd was not called
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});