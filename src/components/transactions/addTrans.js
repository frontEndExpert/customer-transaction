import {useState} from 'react';
import './updateTrans.scss'

const AddTrans = (props) => {
    const [id,setId] = useState(0);
    const [description,setDescription] = useState();
    const [currency,setCurrency] = useState(props.transArr.currency);
    const [amount,setAmount] = useState(0);
    const [cerditCardNumber,setCerditCardNumber] = useState(props.transArr.cerdit_card_number);
    const [cerditCardType,setCerditCardType] = useState(props.transArr.cerdit_card_type);
    const [customerId,setCustomerId] = useState(props.transArr.customer_id);
    //const trans = props.transArr;

    console.log('props',props);

    const handleSubmit = (e) => {
      e.preventDefault();

       const formObj = {
        customer_id: customerId,
        description: description,
        currency: currency,
        amount: amount,
        credit_card_number: cerditCardNumber,
        credit_card_type: cerditCardType
      }
     
      console.log("formObj",formObj);
      props.submitAdd(formObj);
    }



return (
          <>
            <form>
            <div className="form">    
              <input type='hidden' name='transaction_id' value={id} />
              <h2>customer_id:{customerId } </h2>
              <label htmlFor='description'>Description</label><br/>
              <textarea  name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} required /><br/>
              <label htmlFor='currency'>currency: </label><br/>
              <input  name='currency' value={currency } onChange={(e)=>{setCurrency(e.target.value)}} required /><br/>
              <label htmlFor='amount'>amount: </label><br/>
              <input   name='amount' value={amount } onChange={(e)=>{setAmount(e.target.value)}} required /><br/>
              <label htmlFor='cerdit_card_number'>Creditcard number: </label><br/>
              <input   name='cerdit_card_number' value={cerditCardNumber } onChange={(e)=>{setCerditCardNumber(e.target.value)}} required /><br/>
              <label htmlFor='cerdit_card_type'>type: </label><br/>
              <input   name='cerdit_card_type' value={cerditCardType } onChange={(e)=>{setCerditCardType(e.target.value)}} required /><br/>
              <button type="submit" className='btn' onClick={handleSubmit}>Add Transaction</button>
            </div>
            </form>
        </>
    )
}

export default AddTrans;