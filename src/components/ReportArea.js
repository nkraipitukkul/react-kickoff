import './ReportArea.css';

const ReportArea = (props) => {
    const amountStyle = (props.amount >= 0) ? "greenText" : "redText"
    const emoji = (props.amount > 0) ? "+" : ""
    return(
        <div>
            <li className={amountStyle}>{props.title} <span>{emoji}{props.amount}</span></li> 
        </div>   
    );
}

export default ReportArea;