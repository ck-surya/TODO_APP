
import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    const classNamesForItems = `${task.completed ? 'handle-text-decoration1' : ''}`;

    return (
        <div className="todo-item">
            <input
            className='custom-checkbox'
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            {task.completed ? (
                <p style={{ textDecoration: 'line-through' }}>{task.text}</p>
            ) : 
            <p>{task.text}</p>
            }
            <button
                className='animated-button cross-btn'
                onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}
export default TodoItem;