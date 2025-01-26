"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { add } from '../apis/add';

import classes from './page.module.scss';
import Button from '../../components/button/Button';

type Task = {
    title?: string;
    color?: string;
};

const AddTaskPage = () => {
    const colors = ['red', 'orange', 'yellow', 'lightgreen', '#106ebe', '#5a4ebc', '#c254c2', '#f3444c', '#8a6f24'];
    const [ tasks, setTasks ] = useState<Task>({});
    const [colorClicked, setColorClicked] = useState({});
    const [success, setSuccess] = useState(false);

    const setColor = (color: string) => {
        setColorClicked({
            [color]: true
        });
        setTasks((prevTasks: Task) => ({
            ...prevTasks,
            color
        }));
    };

    const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setTasks((prevTasks: Task) => ({
            ...prevTasks,
            title
        }));
    };

    const colorPicker = () => {
        return (
            <div className={classes.colorPickerContainer}>
                {colors.map((color, index) => (
                    <p
                        key={index}
                        style={{ backgroundColor: color, border: colorClicked[color] ? '2px white solid' : '' }}
                        onClick = {() => setColor(color)}
                    />
                ))}
            </div>
        );
    };

    const addTask = async () => {
        if (tasks.color && tasks.title) {
            try {
                const { ok, text } = await add(tasks);
                if (ok) {
                    setSuccess(true);
                    alert(text);
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 500);
                }
            } catch (error) {
                console.error(error.message);
            }
        } else {
            alert('Please enter both color and title');
        }
    };

    return (
        <>
            <header className={classes.addTaskHeader} />
            <main className={classes.addTaskContainer}>
                <Link href={'/'}>
                    <p>&#8678;</p>
                </Link>
                <div>
                    <p style={{ color: 'rgb(43, 143, 190)' }}><b>Title</b></p>
                    <input type="text" placeholder='Ex: Brush your teeth' value={tasks?.title} onChange={(e) => setTitle(e)} />
                </div>
                <div>
                    <p style={{ color: 'rgb(43, 143, 190)' }}><b>Color</b></p>
                    {colorPicker()}
                </div>
                <div style={{ marginTop: '30px' }} onClick={addTask}>
                    {
                        success
                        ? <Button btnTxt="Saved" href={''}  />
                        : <Button btnTxt="Add Task" href={''}  />
                    }
                </div>
            </main>
        </> 
    );
};

export default AddTaskPage;