import { Fragment } from "react";
import HeaderCartButton from "./Headercartbutton";
import mealsimage from '../../assets/meals.jpg';
import classes from './header.module.css';

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1> ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt="a table full of delicious food"/>
        </div>
    </Fragment>
};


export default Header;