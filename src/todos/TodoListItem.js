import React from 'react'

const TodoListItem = ({ todo }) => {
    <div className="todo-item-container">
        <hh3>{todo.text}</hh3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Complete</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
}