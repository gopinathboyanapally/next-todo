import React, { Key } from 'react';
import classes from '../../app/page.module.scss';

import type { FnType, TGenericObject } from './tasks.types';

type TTasks = {
    tasks: TGenericObject[],
    onTaskClick: FnType,
    tasksClicked: {
        [id: number]: boolean
    },
    removeTask: FnType
}

const Tasks = ({ tasks, onTaskClick, tasksClicked, removeTask }: TTasks) => {
    return (
        tasks.map((item: TGenericObject, index: Key) => (
            <div className={classes.taskCard} key={index}>
                <span
                    className={`${classes.checkboxContainer} ${(tasksClicked[item.id]) ? classes.active : ''}`}
                    onClick={() => onTaskClick(item.id, item.title, item.color)}
                >
                    {(tasksClicked[item.id]) ? <span>&#10003;</span> : ''}
                </span>
                <p className={(tasksClicked[item.id]) ? classes.updated : ''}>
                    {item.title}
                </p>
                <p className={classes.trashicon} onClick={() => removeTask(item.id)}>
                    &#128465;
                </p>
            </div>
        ))
    );
}

export default Tasks;
