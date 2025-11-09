import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import telegram1 from '@/assets/telegram1.jpg'
import telegram2 from '@/assets/telegram2.png'
import Telegram from '@/assets/telegram3.svg'


export const App = () => {
    const [count,setCount] = useState<number>(0)

    const increment = () => setCount((prev => prev + 1))

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }


    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={telegram1} width={185} height={100} alt="" />
                <img src={telegram2} width={185} height={100} alt="" />
            </div>
            <div>
                <Telegram width={100} height={100} fill={'green'}/>
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
