import React from 'react';

const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  editingTitle,
  setEditingTitle,
  editingDescription,
  setEditingDescription,
  updateTodo,
}) => {
  return (
    <div
      onClick={() => {
        setIsEditModalOpen(false);
      }}
      className={`overlay 
        ${isEditModalOpen === false ? 'hide' : ''}`}
    >
      <div
        onClick={(evt) => evt.stopPropagation()}
        className={`edit-modal ${isEditModalOpen === false ? 'hide' : ''}`}
      >
        <div className='modal-header'>
          <h2>Edit Task</h2>
          <button
            className='close-btn'
            onClick={() => {
              setIsEditModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className='modal-main'>
          <label htmlFor='edit-title'>Edit Title</label>
          <input
            type='text'
            placeholder='Edit title'
            id='edit-title'
            value={editingTitle}
            autoSave='false'
            autoComplete='false'
            onChange={(evt) => setEditingTitle(evt.target.value)}
          />
          <label htmlFor='edit-description'>Edit Decription</label>
          <textarea
            id='edit-description'
            placeholder='Edit description'
            value={editingDescription}
            onChange={(evt) => setEditingDescription(evt.target.value)}
          ></textarea>
        </div>

        <div className='modal-footer'>
          <button
            className='save-btn'
            onClick={() => (updateTodo(), setIsEditModalOpen(false))}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
