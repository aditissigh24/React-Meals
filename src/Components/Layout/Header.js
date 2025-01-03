import { Fragment } from "react";
import HeaderCartButton from "./Headercartbutton";
import mealsimage from '../../assets/meals.jpg';
import classes from './header.module.css';
import DarkMode from "./DarkMode";

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1> Food-Mafia</h1>
            <DarkMode/>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt="a table full of delicious food"/>
        </div>
    </Fragment>
};


export default Header;
