import classes from './Mealitemform.module.css';
import Input from '../../UI/input';
import { useRef, useState } from 'react';
const Mealitemform=(props)=>{
    const amountInputref=useRef();
    const [isAmountValid, setIsAmountValid]=useState(true);
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount= amountInputref.current.value;
        const enteredAmountNumber= +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 ||enteredAmountNumber>5){
            setIsAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };
    

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputref}
            label="Amount" 
            input={{
                id: 'amount',
                type:'number',
                min:'1',
                max:'7',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ADD</button>
            {!isAmountValid && <p>please enter a valid amount (1-5).</p>}
        </form>
    );

};
export default Mealitemform;