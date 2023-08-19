import { useEffect, useState, useContext } from 'react';
import './InputLocation.css';
import DataContext from './DataContext';

const InputLocation = (props) =>{

    const [title, setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);
    }

    const[isButtonDisable,setIsButtonDisable] = useState(false);

    useEffect(() =>{
        if((title.trim().length > 0)&&(amount !== 0)){
            setIsButtonDisable(true);
        }
        else{
            setIsButtonDisable(false);
        }
    },[title,amount])

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = 
            {title: title,
             amount: Number(amount)
            }
        props.onAddItem(itemData);
        setTitle('');
        setAmount(0);
    }

    let sumIncome = 0;
    let sumExpense = 0;

    const {income,expense} = useContext(DataContext)
    return(
        <form onSubmit={saveItem}>
            <div className="inputMain">
                <div className="center-summary">
                    <div className="summary">
                        <p>Total = <span>{income-expense}</span></p>
                        <p>Income : <span style={{color:'green'}}>{income}</span></p>
                        <p>Expense : <span style={{color:'red'}}>{expense}</span></p>
                    </div>
                </div>
                <label className="inputLabel">ชื่ออาหาร</label>
                <input type="text" placeholder='ระบุชื่อรายการของคุณ' className="inputPart" onChange={inputTitle} value={title}></input>
                <label className="inputLabel">จํานวนเงิน</label>
                <input type="number" className="inputPart" onChange={inputAmount} value={amount}></input>
                <button type="submit" disabled={!isButtonDisable}>เพิ่มข้อมูล</button>
            </div>  
        </form>  
    );
}

export default InputLocation;