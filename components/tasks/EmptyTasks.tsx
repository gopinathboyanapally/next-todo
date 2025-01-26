import React from 'react';
import classes from '../../app/page.module.scss';

export default function EmptyTasks() {
    return (
        <div className={classes.emptyTasks}>
            <p>
                <b>You don&apos;t have any tasks registered yet.</b>
            </p>
            <p>
                Create tasks and organize your to-do items.
            </p>
        </div>
    );
}

