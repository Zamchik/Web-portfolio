import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import telegram1 from '@/assets/telegram1.jpg'
import telegram2 from '@/assets/telegram1.png'


export const App = () => {
    const [count,setCount] = useState<number>(0)

    const increment = () => setCount((prev => prev + 1))


    return (
        <div>
            <div>
                <img src={telegram1} width={185} height={100} alt='' />
                <img src={telegram2} width={185} height={100} alt='' />
            </div>
            <Link to={'/about'}>Об о мне</Link>
            <br/>
            <Link to={'/shop'}>Магазин</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>
                asfasf
            </span></button>
            <Outlet />
        </div>
    );
};
