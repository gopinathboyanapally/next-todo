import React from 'react';
import classes from './main-header.module.scss';

export default function MainHeader() {
    return (
        <div className={classes['header-background']}>
            <div className={classes.headerText}>
                <span>Todo</span>
                {' '}
                <span>App</span>
            </div>
        </div>
    );
}