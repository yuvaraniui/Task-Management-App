import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import Nodatafound from '../components/NodataFound'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTasks = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const[userId,setUserId] = useState('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTask = () => {
    const data = {
      title,
      description,
      status,
      userId
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/tasks', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Task Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Task</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Task Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Task Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Status</label>
          <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full ' >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>UserId</label>
          <input
            type='text'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
       
        <button className='p-2 m-8 bg-violet-300' onClick={handleSaveTask}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateTasks;