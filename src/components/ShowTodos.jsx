import React from 'react';
import {
  FaBriefcase,
  FaCheck,
  FaEdit,
  FaTrash,
  FaRunning,
  FaPlane,
} from 'react-icons/fa';
import { RiBook2Line } from 'react-icons/ri';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import EditModal from './EditModal';

const ShowTodos = ({
  todos,
  setTodos,
  setIsEditModalOpen,
  setEditingId,
  setEditingTitle,
  setEditingDescription,
  searchQuery,
  setSearchQuery,
}) => {
  const checkStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  const editTodo = ({ id, title, desc }) => {
    setEditingId(id);
    setEditingTitle(title);
    setEditingDescription(desc);
  };

  const deleteTodo = (id) => {
    let confirmDeletion = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDeletion) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className='dispaly-flex'>
      <div className='left-side'>
        <p>
          <FaRunning className='icon sport' /> Sport
        </p>
        <p>
          <FaPlane className='icon travel' /> Travel
        </p>
        <p>
          <FaBriefcase className='icon work' /> Work
        </p>
        <p>
          <RiBook2Line className='icon study' /> Study
        </p>
        <p>
          <AiOutlinePlayCircle className='icon entertainment' /> Entertainment
        </p>
        <div className='delete-all-btn'>
          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                'Are you sure you want to delete ALL todo?'
              );
              if (confirmDelete) {
                setTodos([]);
              }
            }}
          >
            Delete All Task
          </button>
        </div>
      </div>
      <div className='todos-content'>
        {todos.length > 0 ? (
          todos
            .filter((todo) =>
              todo.title
                .toLowerCase()
                .trim()
                .includes(searchQuery.toLowerCase().trim())
            )
            .map((todo) => (
              <div key={todo.id} className='todo-cart'>
                <h3 className={todo.isComplete == true ? 'completed' : ''}>
                  {todo.title}
                </h3>
                <p>{todo.desc}</p>

                <button
                  type='button'
                  className={`check-status btn ${
                    todo.isComplete == true ? 'complete' : ''
                  }`}
                  data-checked={todo.isComplete}
                  onClick={(evt) => (
                    evt.currentTarget.classList.toggle('complete'),
                    checkStatus(todo.id)
                  )}
                >
                  <FaCheck />
                </button>
                <button
                  className='edit-btn btn'
                  onClick={() => (editTodo(todo), setIsEditModalOpen(true))}
                >
                  <FaEdit />
                </button>
                <button
                  className='delete-btn btn'
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))
        ) : (
          <p className='no-todo-text'>There is NO todo!</p>
        )}
      </div>
    </div>
  );
};

export default ShowTodos;
