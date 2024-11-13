import { useContext } from "react";
import { useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon"; 
import classes from './HeaderCartbutton.module.css';
import CartContext from "../../Store/cart-context";
const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted]=useState();
    const cartCtx= useContext(CartContext);
    const {items}=cartCtx
    const numberOfCartItems= items.reduce((curnumber, item)=>{ return curnumber + item.amount;},0);
    const btnclasses = `${classes.button} ${btnIsHighlighted? classes.bump: ''}`;
    
    useEffect(()=>{
        if (cartCtx.items.length===0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer= setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);
        return()=>{
            clearTimeout(timer);
        }
    }, [items]);
    return <button className={btnclasses} onClick={props.onClick}>
        <span className = {classes.icon}><CartIcon/></span>
        <span>your Cart</span>
        <span className = {classes.badge}>{numberOfCartItems}</span>
    </button>
    

};
export default HeaderCartButton;