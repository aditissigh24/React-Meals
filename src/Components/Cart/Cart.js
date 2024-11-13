import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const Cart= (props)=>{
   const CartCxt= useContext(CartContext);
   const totalAmount=`$${CartCxt.totalAmount.toFixed(2)}`;
   const hasItems= CartCxt.items.length>0;
   const CartItemRemoveHandler=(id)=>{
    CartCxt.removeItem(id);
   }
   const CartItemAddHandler=(item)=>{
    CartCxt.addItem({ ...item, amount: 1 });
   }
    const CartItems=(<ul className={classes['cart-items']}>
        {CartCxt.items.map((item)=>(
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onRemove={CartItemRemoveHandler.bind(null,item.id)}
                onAdd={CartItemAddHandler.bind(null,item)}/>
        ))}
        </ul>
    );
    return(
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>

    );
};
export default Cart;