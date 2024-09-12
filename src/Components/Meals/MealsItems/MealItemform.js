import classes from './Mealitemform.module.css';
import Input from '../../UI/input';
const Mealitemform=()=>{
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type:'number',
                min:'1',
                max:'7',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ADD</button>
        </form>
    );

};
export default Mealitemform;