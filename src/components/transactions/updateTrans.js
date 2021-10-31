


const UpadteTrans = (props) => {
    const trans = props.transArr;

return (
          <>
            <form>
            <div className="cards">    
              <input type='hidden' name='transaction_id' value={trans._id} />
              <input  name='customer_id' value={trans.customer_id } onChange={onTitleChange} required />
              <textarea  name='description' value={trans.description} onChange={onBodyChange} required />
              <input  name='currency' value={trans.currency } onChange={onTitleChange} required />
              <input   name='amount' value={trans.amount } onChange={onTitleChange} required />
              <input   name='cerdit_card_number' value={trans.cerdit_card_number } onChange={onTitleChange} required />
              <input   name='cerdit_card_type' value={trans.cerdit_card_type } onChange={onTitleChange} required />
              <button type="submit" onClick={props.handleSubmit}>Save Changes</button>
            </div>
            </form>
        </>
    )
}

export default UpadteTrans;