import React, { useEffect, useState } from 'react';
import classes from '../../app/page.module.scss';

import type { TGenericObject } from './tasks.types';

type TTaskSummary = {
    tasks: TGenericObject[],
    tasksClicked: TGenericObject
}

export default function TaskSummary({ tasks, tasksClicked }: TTaskSummary) {
    const tasksLength = tasks.length;
    const [count, setCompletedTasksLength] = useState(0);

    useEffect(() => {
        const completedCount = Object.values(tasksClicked).filter((value) => value).length;
        setCompletedTasksLength(completedCount);
    }, [tasksClicked]);

    return (
        <div className={classes.taskSummary}>
            <p>
                <span style={{ color: 'rgb(43, 143, 190)' }}>
                    <b>Tasks</b>
                </span>
                <span className={classes.counterWrapper}>
                    <b>{ tasksLength }</b>
                </span>
            </p>
            <p>
                <span style={{ color: 'rgb(75, 43, 190)' }}>
                    <b>Completed</b>
                </span>
                <span className={classes.counterWrapper}>
                    <b>{ `${count} of ${tasksLength}`  }</b>
                </span>
            </p>
        </div>
    );
}
