import {useState} from 'react';
import './updateuser.scss'

const AddUser = (props) => {
    //props.userId
    const [customerId, setCustomerId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [cerditCardNumber,setCerditCardNumber] = useState();
    const [cerditCardType,setCerditCardType] = useState();
    const [currency, setCurrency] = useState();
    const [total, setTotal] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
  
         const formObj = {
            customer_id: customerId,
            first_name: firstName,
            last_name: lastName,
            email: email,
            gender: gender,
            street: street,
            city: city,
            country: country,
            cerdit_card_type: cerditCardType,
            cerdit_card_number: cerditCardType,
            currency: currency,
            total_price: total
        }
       
        console.log("formObj",formObj);
        props.submitAdd(formObj);
      }



    return (
        <>
  <form>
            <div className='user-form'>
    <div className="formRows"> 
        <div>   
            <label htmlFor='customerId'>First Name: </label><br/>
              <input  name='customerId' value={customerId } onChange={(e)=>{setCustomerId(e.target.value)}} required /><br/>
        </div>       
        <div>   
            <label htmlFor='firstName'>First Name: </label><br/>
              <input  name='firstName' value={firstName } onChange={(e)=>{setFirstName(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='lastName'>Last Name: </label><br/>
              <input  name='lastName' value={lastName } onChange={(e)=>{setLastName(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='email'>Email: </label><br/>
              <input  name='email' value={email } onChange={(e)=>{setEmail(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='gender'>Gender: </label><br/>
              <input  name='gender' value={gender } onChange={(e)=>{setGender(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='street'>Street: </label><br/>
              <input  name='street' value={street } onChange={(e)=>{setStreet(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='city'>City: </label><br/>
              <input  name='city' value={city } onChange={(e)=>{setCity(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='country'>Country: </label><br/>
              <input  name='country' value={country } onChange={(e)=>{setCountry(e.target.value)}} required /><br/>
        </div>
        <div>
             <label htmlFor='creditType'>Credit Card Type: </label><br/>
              <input  name='creditType' value={cerditCardType } onChange={(e)=>{setCerditCardType(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='creditnumber'>Credit Card Number: </label><br/>
              <input  name='creditnumber' value={cerditCardNumber } onChange={(e)=>{setCerditCardNumber(e.target.value)}} required /><br/>
        </div>
        <div>
              <label htmlFor='total'>Total Price: </label><br/>
              <input  name='total' value={total } onChange={(e)=>{setTotal(e.target.value)}} required /><br/>
        </div>
        <div>    
              <label htmlFor='currency'>Currency: </label><br/>
              <input  name='currency' value={currency } onChange={(e)=>{setCurrency(e.target.value)}} required /><br/>
        </div>
        <div>
            <button type="submit" className='btn' onClick={handleSubmit}>Save Changes</button>
        </div>

        </div>
              </div>
              </form>
        </>
    );
}

export default AddUser;