import ReportArea from './ReportArea.js';

const Transaction = (props) =>{
    const {items} = props
    return(
        <ul className="itemList">
            {items.map(element => {
                return <ReportArea {...element}/>
            })}
        </ul>
    );
}

export default Transaction;