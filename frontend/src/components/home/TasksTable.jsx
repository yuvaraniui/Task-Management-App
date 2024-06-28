import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
//import { Nodatafound } from './../NodataFound'
import { useState } from 'react';
import Filtertask from './Filtertask';

const TasksTable = ({ tasks }) => {
  const [filter, setFilter] = useState('All');
  const [NodataFound, setNodatafound] = useState(true);
  
      const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);
      if(filteredTasks.length != null && filteredTasks.length != undefined && filteredTasks/length != 0 )
        {
         tasks = filteredTasks;
        }
    else{
      console.log("data is not thereeeee",{tasks});
    } 

  return (
    <>
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Description
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          {tasks.status} Status 
         { <Filtertask filter={filter} setFilter={setFilter} /> } 
          </th>
          <th className='border border-slate-600 rounded-md'>UserId</th>
          <th className='border border-slate-600 rounded-md'>CRUD operations</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {task.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {task.description}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {task.status}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {task.userId}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/tasks/details/${task._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/tasks/edit/${task._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/tasks/delete/${task._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
{/*     {   ( NodataFound )      ? : (  <NodataFound />  ) : " "   } */}
    </>
  );
};

export default TasksTable;
