 /* {users && users.map((user)=>{
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
        <p>{(transArr) }</p> */