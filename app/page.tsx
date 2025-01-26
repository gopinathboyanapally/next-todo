"use client";

import React, { useEffect, useState } from 'react';

import { loadTasks } from './apis/getTasks';
import { deleteTask } from './apis/deleteTasks';
import { updateTask } from './apis/updateTasks';

import TaskSummary from '../components/tasks/TaskSummary';
import EmptyTasks from '../components/tasks/EmptyTasks';
import Tasks from '../components/tasks/Tasks';
import Button from '../components/button/Button';
import classes from './page.module.scss';

import type { TGenericObject } from '../components/tasks/tasks.types';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [tasksClicked, setTaskClicked] = useState({});
  const [taskToUpdate, setTaskToUpdate] = useState<{
    id: number,
    title: string,
    color: string,
    completed: boolean
  } | null>(null);

  const getInitTaskData = async () => {
    let data = [] as TGenericObject[];
    if (tasks.length === 0) {
      data = await loadTasks();
      setTasks(data);
    }
  };

  useEffect(() => {
    getInitTaskData();
  }, [tasks]);
  
  // Logic to update the task
  const updatedTask = async (taskToUpdate: { id: number; title: string; color: string; completed: boolean }) => {
    try {
      // Update the task using the provided `updateTask` function
      await updateTask(taskToUpdate);

      // Reload tasks after successful update
      await loadTasks();
    } catch (error) {
      console.log("Failed to update the task:", error);
    }
  }

  // Delete the task on confirm
  const removeTask = async (id: number) => {
    if (window.confirm('Are you sure you want to delete the task?')) {
      try {
          await deleteTask(id);
          const data = await loadTasks();
          setTasks(data);
      } catch (error) {
          console.error(error);
      }
    }
  };

  const onTaskClick = (itemId: number, title: string, color: string) => {
    setTaskClicked((prevState) => ({
        ...prevState,
        [itemId]: !prevState[itemId]
    }));

    setTaskToUpdate({
        id: itemId,
        title,
        color,
        completed: !tasksClicked[itemId],
    });
  };
  
  // Checks and updates the tasks Clicked state on page re-load which is required to update the Completed count.
  useEffect(() => {
    for (const i of tasks) {
      if (i?.completed === 1) {
        setTaskClicked((prevState) => ({
          ...prevState,
          [i.id]: true
        }));
      } else {
        setTaskClicked((prevState) => ({
          ...prevState,
          [i.id]: false
        }));
      }
    }
  }, [tasks]);

  // Effect to handle the updateTask call
  useEffect(() => {
    if (taskToUpdate) {
      updatedTask(taskToUpdate);
    }
  }, [taskToUpdate, updatedTask]);

  return (
    <main>
      <div className={classes.container}>
        <Button href="/add-task" btnTxt="Create Task"  />
        <TaskSummary tasks={tasks} tasksClicked={tasksClicked as TGenericObject} />
        <div className={classes.taskContainer}>
          {
            tasks.length === 0
            ? 
              <EmptyTasks />
            :
            <Tasks
              tasks={tasks}
              tasksClicked={tasksClicked}
              onTaskClick={onTaskClick}
              removeTask={removeTask}
            />
          }
        </div>
      </div>
    </main>
  );
}

