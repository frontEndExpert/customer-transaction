import React, {useState, useEffect} from 'react';
import './App.css';
//import * as usersObj from './db/data.json';

/* type transaction = {
  "transaction_id": string;
  "customer_id": string;
  "currency": string;
  "amount": string;
  "description": string;
}
*/
/* type User = {
    "customer_id": string;
    "first_name": string;
    "last_name": string;
    "email": string;
    "gender": string;
    "country": string;
    "city": string;
    "street": string;
    "phone": string;
    "total_price": string;
    "currency": string;
    "cerdit_card_type": string;
    "cerdit_card_number": string;
}
*/

function App() {
const [users, setUsers] = useState([
  {
    "customer_id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "country": "",
    "city": "",
    "street": "",
    "phone": "",
    "total_price": "",
    "currency": "",
    "cerdit_card_type": "",
    "cerdit_card_number": "",
  }]);
const [transArr, setTransArr] = useState({
  "transaction_id": "",
        "customer_id": "",
        "description": "",
        "currency": "",
        "amount": "",
        "cerdit_card_type": "",
        "cerdit_card_number": "",
})


//console.log("users.length",users.length);

const getAllTrans = () => {
  console.log("getAllTrans");
  fetch('/transactions')
    .then(result => result.json())
    .then(body => {
      console.log("body",body);
      setTransArr( JSON.stringify( body));

    })
};

 const getUsers = () => {
  console.log("getUsers");
  fetch('/users')
    .then(result => result.json())
    .then(body => {
      setUsers(JSON.parse((body)));
    })
};

const handleSubmit = () => {
  console.log('hello');
}

useEffect(()=>{
  getAllTrans();
  console.log("useEffect transArr",transArr);
}, []);

/*
useEffect(()=>{
  getUsers()
  
}, []);
*/
let transObj = [{}];
console.log("JSON.parse(transArr)",JSON.parse(transArr));

transObj = (transArr)? transArr : [{_id: "",
customer_id: "",
description: "",
currency: "",
amount: "",
cerdit_card_type: "",
cerdit_card_number: ""
}] ;
//&& transArr[0].transaction_id
console.log("useEffect transObj", transObj);
  
  return (
    <div className="App">

      {(transObj.length > 1) && transObj.map( (trans) => (
        <div key={trans._id} className='card'>
        <form>
          <div ><label>transaction_id</label><input>{trans._id}</input></div>
          <div><label>customer_id</label><input>{trans.customer_id}</input></div>
          <div><label>description</label><input>{trans.description}</input></div>
          <div><label>currency</label><input>{trans.currency}</input></div>
          <div><label>amount</label><input>{trans.amount}</input></div>
          <div><label>cerdit_card_type</label><input>{trans.cerdit_card_type}</input></div>
          <div><label>cerdit_card_number</label><input>{trans.cerdit_card_type}</input></div>
          <div><button onClick={handleSubmit}>Save</button></div>
        </form>
        </div>
  ))}

      {/* {users && users.map((user)=>{
        <div>
        <div >{user.customer_id} : {user.first_name} {user.last_name} </div>
          <form>
            <input id="1" >{user.customer_id}</input>
            <input id="2" >{user.first_name}</input>
            <input id="3" >{user.last_name}</input>
            <input id="4" >{user.email}</input>
            <input id="5" >{user.gender}</input>
            <input id="6" >{user.country}</input>
            <input id="7" >{user.city}</input>
            <input id="8" >{user.street}</input>
            <input id="9" >{user.phone}</input>
            <input id="10" >{user.total_price}</input>
            <input id="11" >{user.currency}</input>
            <input id="12" >{user.cerdit_card_type}</input>
            <input id="13" >{user.cerdit_card_number}</input>
            <button onClick={HandleSubmit} >Save</button>
          </form>
        </div>
      }) }
       <p> {(users) && users[0].customer_id}</p>
        <p>{(transArr) }</p> */}

    </div>
  );
}

export default App;
