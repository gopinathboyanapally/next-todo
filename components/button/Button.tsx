import React from 'react';
import Link from 'next/link';

import classes from './button.module.scss';

type TButton = {
    href: string,
    btnTxt: string
}

const Button = ({ href, btnTxt }: TButton) => {
    return (
        <Link href={href}>
          <button className={classes.createBtn}>
            { btnTxt }
            &nbsp;
            {
                btnTxt === 'Saved'
                ? <span style={{ borderStyle: 'none' }}> &#x2714; </span>
                : <span> + </span>
            }
            
          </button>
        </Link>
    )
}

export default Button;
