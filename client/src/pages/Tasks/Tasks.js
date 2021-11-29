import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Text from "components/Text";
import * as S from "./style";
import { addTaskToDB, getAllTasks, deleteTask } from '../../utils/taskUtils'
import { useForm } from 'react-hook-form'
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getAllTasks().then(succ => {
      if (succ.status != 400) setTasks(succ.data);
    })
  }, [])



  let submit = (data, e) => {
    e.preventDefault();
    let task = { title: data.title || 'Task', content: data.content || "No content", date: data.date }
    addTaskToDB(task).then(succ => {
      if (succ.status != 400) {
        setTasks([...tasks, succ.data]);
        // e.target.reset({});
        reset()
      }
    })
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  return (
    <>
      <S.Header><Text size="36px" bold>My Tasks</Text></S.Header>
      <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(submit)}>
        <TextField className="txt" variant="standard" {...register('title', { required: false })} id="input-with-icon-grid" label="Title" />
        <TextField className="txt" variant="standard" multiline={true} {...register('content', { required: false })} id="input-with-icon-grid" label="Content" />
        <input type="date" className="date" variant="standard"{...register('date', { required: false })} id="input-with-icon-grid" label="Date" />
        <button type="submit">Add</button>
      </S.Form>

      <S.Tasks> {tasks && tasks.map(task => {
        return (<S.Task>
          <Card >
            <center><h1>{task.title}</h1></center>
            <Typography gutterBottom component="p">{task.content}</Typography>
            <p>{task.date && new Date(task.date).toISOString().substring(0, 10)}</p>

            <IconButton onClick={() => {
              deleteTask(task._id).then(succ => {
                if (succ.status != 400) setTasks(list => list.filter(t => t._id !== task._id));
              })
            }} color="primary" aria-label="delete from shopping cart">
              <DeleteIcon />
            </IconButton>
          </Card>
        </S.Task>)
      })
      }</S.Tasks>
    </>
  );
};

export default Tasks;
