import express, { response } from "express";
import { PORT ,mongoDBURL } from "./config.js"
import mongoose from 'mongoose';
import { Task } from "./models/task.js";
import taskRoute from './routes/taskroute.js';
import cors from 'cors';


const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//option 1: Allow All Origins with Default of cors(*) 
app.use(cors())
/*app.use(cors({
    origin:'http://localhost:3000',
    methods:[],
    allowHeaders: ['content-Type']
})) */
app.get('/', (request,response) => {
    console.log("request");
    return response.status(234).send('Welcome To Task Management APP');
});

app.use('/tasks',taskRoute)
mongoose
.connect(mongoDBURL)
.then(() => {
  console.log("App is connected to database")
  app.listen(PORT, () =>  {
    console.log('App is listening to port:', PORT)
})
})
.catch((error) => {
    console.log(error)

})