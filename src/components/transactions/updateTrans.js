import {useState} from 'react';
import './updateTrans.scss'

const UpadteTrans = (props) => {
    console.log('props.transArr',props.transArr);
    const [id,setId] = useState(props.transArr._id);
    const [description,setDescription] = useState(props.transArr.description);
    const [currency,setCurrency] = useState(props.transArr.currency);
    const [amount,setAmount] = useState(props.transArr.amount);
    const [cerditCardNumber,setCerditCardNumber] = useState(props.transArr.cerdit_card_number);
    const [cerditCardType,setCerditCardType] = useState(props.transArr.cerdit_card_type);
    const [customerId,setCustomerId] = useState(props.transArr.customer_id);
    //const trans = props.transArr;

    
    const handleSubmit = (e) => {
      e.preventDefault();

       const formObj = {
        _id: id,
        customer_id: customerId,
        description: description,
        currency: currency,
        amount: amount,
        cerdit_card_number: cerditCardNumber,
        cerdit_card_type: cerditCardType
      }
     
      console.log("formObj",formObj);
      props.handleSubmit(formObj);
    }



return (
          <>
            <form>
            <div className="trans-form">    
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
              <button type="submit" className='btn' onClick={handleSubmit}>Save Changes</button>
            </div>
            </form>
        </>
    )
}

export default UpadteTrans;