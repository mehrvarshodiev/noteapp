import { React, useEffect } from 'react';
const AddModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  setTitle,
  description,
  setDescription,
  todos,
  setTodos,
}) => {
  const addNewTask = () => {
    if (title.trim() == '' && description.trim() == '') {
      alert("Title and Description can't be empty!");
      return;
    } else {
      setTodos([
        ...todos,
        {
          id: new Date().getMilliseconds(),
          title: title,
          desc: description,
          isComplete: false,
        },
      ]);
      setIsModalOpen(false);
    }
    setTitle('');
    setDescription('');
  };

  return (
    <div
      onClick={() => {
        setTitle('');
        setDescription('');
        setIsModalOpen(false);
      }}
      className={`overlay 
        ${isModalOpen === false ? 'hide' : ''}`}
    >
      <div
        onClick={(evt) => evt.stopPropagation()}
        className={`modal-box ${isModalOpen === false ? 'hide' : ''}`}
      >
        <div className='modal-header'>
          <h2>Add Task</h2>
          <button
            className='close-btn'
            onClick={() => {
              setTitle('');
              setDescription('');
              setIsModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className='modal-main'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='Enter title'
            id='title'
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            autoSave='false'
            autoComplete='false'
          />
          <label htmlFor='description'>Decription</label>
          <textarea
            id='description'
            placeholder='Enter description'
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          ></textarea>
        </div>

        <div className='modal-footer'>
          <button className='save-btn' onClick={() => addNewTask()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
