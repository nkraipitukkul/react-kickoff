import { useEffect, useState } from 'react';
import './App.css';
import InputLocation from './components/InputLocation';
import ReportArea from './components/ReportArea';
import Transaction from './components/Transaction';
import DataContext from './components/DataContext';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  const initData = [
    {id:1,title: "ค่านํ้า",amount:888},
    {id:2,title: "ค่าไฟ",amount:-100},
    {id:3,title: "เงินเดือน",amount:25000}
]

const [reportIncome, setReportIncome] = useState(0)
const [reportExpense, setReportExpense] = useState(0)

const [items, setItems] = useState(initData)

const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    })
}

useEffect(() => {
  const amounts = items.map(item=> item.amount);
  const totalIncome = (amounts.filter(amount=>amount>0)).reduce((total,element)=>total+=element,0)
  const totalExpense = ((amounts.filter(amount=>amount<0)).reduce((total,element)=>total+=element,0))*-1
  setReportIncome(totalIncome)
  setReportExpense(totalExpense)
},[items])

  return(
    <DataContext.Provider value={{
      income: reportIncome,
      expense: reportExpense
    }}>
    <div className="mainArea">
      <Router>
      <div>
        <div className="linkArea">
          <Link to="/">Home Page</Link>
          <Link to="/index">List Page</Link>
        </div>
        <h2 style={{ color: 'red' }}>แอพบัญชีรายรับ - รายจ่าย</h2>
        <Switch>
          <Route exact path="/">
            <InputLocation onAddItem={onAddNewItem} />
          </Route>
          <Route path="/index">
            <Transaction items={items} />
          </Route>
        </Switch>
      </div>
    </Router>
     </div>
    </DataContext.Provider>
  );
}

export default App;
