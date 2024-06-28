import express from 'express';
import { Task } from '../models/task.js'


const router = express.Router();

//Route for Save Book from database by id
router.post('/', async(request,response)=> 
    {
      try{
        if(
            !request.body.title ||
            !request.body.description ||
            !request.body.status ||
           /// !request.body.dueDate ||
            !request.body.userId
        ){
           return request.status(400).send({
            message : 'Send all required fields: title,description,status,dueDate,userId'
          });
        }
        
        const newTask = {
          title: request.body.title,
          description: request.body.description,
           status: request.body.status,       
         //  dueDate :request.body.dueDate,
           userId:request.body.userId
        }
        const task = await Task.create(newTask)
        return response.status(201).send(task)
    
     }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
      }
    })
    
//Route for GEt All Books from database
router.get('/', async (request,response) =>{
    try {
      const tasks =await Task.find({})
      return response.status(200).json(tasks)
    
    }catch(error){
      console.log(error.message);
      response.status(500).send({message: error.message })
    }
    }
    ) 
    
//Route for GEt All Books from database by id
router.get('/:id', async (request,response) =>{
      try {
      
        const { id } = request.params;
    
        const task = await Task.findById(id)
    
        return response.status(200).json(task)
      
      }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message })
      }
      }
      ) 
    
//Route for PUT Book from database by id
router.put('/:id', async (request,response) =>{
      try {  
            if(
              !request.body.title ||
              !request.body.description ||
              !request.body.status ||
            /// !request.body.dueDate ||
              !request.body.userId
            )
            { return response.status(400).send({
              message: "Send all required fields: title,description,status"
            })
      }
            const { id } = request.params;
            const result = await Task.findByIdAndUpdate(id, request.body)
    
            if(!result){
              return response.status(404).json({message: 'Task not found'})
            }
            return response.status(200).json({message: 'Task updated Successfully'})
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message })
      }
    })
    
//Route for delete Book from database by id    
router.delete('/:id', async (request,response) =>{
      try {  
            const { id } = request.params;
            const result = await Task.findByIdAndDelete(id)
    
            if(!result){
              return response.status(404).json({message: 'Task not found'})
            }
            return response.status(200).json({message: 'Task deleted Successfully'})
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message })
      }
    })

    export default router;