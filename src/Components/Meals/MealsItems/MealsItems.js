import Mealitemform from './MealItemform';
import { useContext } from 'react';
import classes from './MealsItems.module.css';
import CartContext from '../../../Store/cart-context';
const MealsItems =(props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCxt=useContext(CartContext);
    const addToCartHandler=(amount)=>{
        cartCxt.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.desciption}>{props.desciption}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <Mealitemform onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};
export default MealsItems;