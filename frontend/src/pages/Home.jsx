import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
//import { AiOutlineEdit } from 'react-icons/ai';
//import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit  } from "../../../frontend/node_modules/react-icons/ai"
import { BsInfoCircle   } from "../../../frontend/node_modules/react-icons/bs"
//import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { MdOutlineAddBox, MdOutlineDelete  } from "../../../frontend/node_modules/react-icons/md"
import TasksTable from '../components/home/TasksTable';
import TasksCard from '../components/home/TasksCard';


const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/tasks')
      .then((response) => {
        if(response.data){
        
        setTasks(response.data);}
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Tasks List</h1>   
        </div>
    {    <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Task Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Task Details
        </button>
        <div className='flex justify-between items-center'>
                        Create  New Task.....
          <Link to='/tasks/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
      </div> }
    
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <TasksTable tasks={tasks} />
      ) : (
        <TasksCard tasks={tasks} />
      )}
    </div>
  ); 
};

export default Home;
