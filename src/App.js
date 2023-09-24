import { React, useState } from 'react';
import './App.css';
import AddModal from './components/AddModal';
import TodoHeader from './components/TodoHeader';
import ShowTodos from './components/ShowTodos';
import EditModal from './components/EditModal';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Buy a car',
      desc: 'Earn money and buy a Range Rover',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go to USA',
      desc: 'Become a student, study and travel in USA',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Learn more about programming',
      desc: 'Learn coding and become a frontend develeoper!',
      isComplete: false,
    },
    {
      id: 4,
      title: 'Learning how to drive a truck',
      desc: 'Learn driving and buy a DAF-truck!',
      isComplete: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // console.log(searchQuery);

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == editingId) {
        // return { ...todo, title: editingText };
        todo.title = editingTitle;
        todo.desc = editingDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingId(null);
    setEditingTitle('');
    setEditingDescription('');
  };

  {
    document.addEventListener('click', (evt) => {
      const searchInput = document.querySelector('.search-input');
      if (
        !evt.target.matches('.search-input') &&
        !evt.target.matches('.search-box') &&
        searchInput.value === ''
      ) {
        searchInput.classList.remove('show');
      }
    });
  }

  const toggleSearchBtn = (evt) => {
    evt.stopPropagation();
    evt.currentTarget.classList.add('hide');
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.add('show');
    searchInput.focus();
  };

  return (
    <div className='container'>
      <TodoHeader
        setIsModalOpen={setIsModalOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSearchBtn={toggleSearchBtn}
      />
      <AddModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        todos={todos}
        setTodos={setTodos}
      />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        editingTitle={editingTitle}
        setEditingTitle={setEditingTitle}
        editingDescription={editingDescription}
        setEditingDescription={setEditingDescription}
        updateTodo={updateTodo}
      />
      <ShowTodos
        todos={todos}
        setTodos={setTodos}
        setIsEditModalOpen={setIsEditModalOpen}
        setEditingId={setEditingId}
        setEditingTitle={setEditingTitle}
        setEditingDescription={setEditingDescription}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;