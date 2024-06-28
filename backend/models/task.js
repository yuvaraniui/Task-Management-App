// models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['All', 'To Do', 'In Progress', 'Done'],
    default: 'To Do',
    required: true
  }, 
 
  userId: {
    type: String,
    required: false
  }
});
//dueDate: Date,

export const Task = mongoose.model('task', taskSchema);


