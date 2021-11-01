import {useState} from 'react';


const UpadteTrans = (props) => {
    const [id,setId] = useState(props._id);
    const [description,setDescription] = useState(props.descrioption);
    const [currency,setCurrency] = useState(props.currency);
    const [amount,setAmount] = useState(props.amount);
    const [cerditCardNumber,setCerditCardNumber] = useState(props.cerdit_card_number);
    const [cerditCardType,setCerditCardType] = useState(props.cerdit_card_type);
    const [customerId,setCustomerId] = useState(props.customer_id);
    //const trans = props.transArr;
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('e.target',e.target);
      const formObj = {
        _id: id,
        customer_id: customerId,
        description: description,
        currency: currency,
        amount: amount,
        credit_card_number: cerditCardNumber,
        credit_card_type: cerditCardType
      }
     // props.handleSubmit(formObj);
      console.log("formObj",formObj);
    }



return (
          <>
            <form>
            <div className="cards">    
              <input type='hidden' name='transaction_id' value={id} />
              <h2>customer_id:{customerId } </h2>
              <textarea  name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} required />
              <input  name='currency' value={currency } onChange={(e)=>{setCurrency(e.target.value)}} required />
              <input   name='amount' value={amount } onChange={(e)=>{setAmount(e.target.value)}} required />
              <input   name='cerdit_card_number' value={cerditCardNumber } onChange={(e)=>{setCerditCardNumber(e.target.value)}} required />
              <input   name='cerdit_card_type' value={cerditCardType } onChange={(e)=>{setCerditCardType(e.target.value)}} required />
              <button type="submit" onClick={handleSubmit}>Save Changes</button>
            </div>
            </form>
        </>
    )
}

export default UpadteTrans;