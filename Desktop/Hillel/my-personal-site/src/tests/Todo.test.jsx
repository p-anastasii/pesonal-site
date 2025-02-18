import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from '../pages/Todo';

test('should have title "TODO List"', () => {
    render(<TodoPage />);
    const title = screen.getByText(/TODO List/i);
    expect(title).toBeInTheDocument();
});

test('should allow input of numbers and letters', () => {
    render(<TodoPage />);
    const inputField = screen.getByLabelText(/New task/i);
    fireEvent.change(inputField, { target: { value: 'Task 123' } });
    expect(inputField.value).toBe('Task 123');
});

test('should not add task when input is empty', () => {
    render(<TodoPage />);
    const addButton = screen.getByText(/Add/i);
    const inputField = screen.getByLabelText(/New task/i);
    fireEvent.change(inputField, { target: { value: '' } });
    fireEvent.click(addButton);
    const tasksList = screen.queryAllByRole('listitem');
    expect(tasksList).toHaveLength(0);
});

test('should add new task to list when clicking "Add" with text', () => {
    render(<TodoPage />);
    const addButton = screen.getByText(/Add/i);
    const inputField = screen.getByLabelText(/New task/i);

    fireEvent.change(inputField, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const newItem = screen.getByText('New Task');
    expect(newItem).toBeInTheDocument();
});

test('should remove task from list when clicking "Delete"', () => {
    render(<TodoPage />);
    const addButton = screen.getByText(/Add/i);
    const inputField = screen.getByLabelText(/New task/i);

    fireEvent.change(inputField, { target: { value: 'Task to Delete' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByLabelText(/Delete/i);
    fireEvent.click(deleteButton);

    const taskItem = screen.queryByText('Task to Delete');
    expect(taskItem).not.toBeInTheDocument();
});
