import React, {useState, useEffect, useRef, Fragment } from 'react';
import Modal from '../modal/modal';
import UpdateUser from './updateUser';
import AddUser from './addUser';
import useOnClickOutside from '../hooks/useOnClickOutside'
import './users.scss';


const Users = (props) => {
    const [currentCustomerId, setCurrentCustomerId] = useState(props.cid);
    const [usersArr, setUsersArr] = useState([{
      }]);
    const [show, setShow]  = useState(false); 
      const[currentUserId, setCurrentUserId] = useState(0); 
      const[currentUserArr, setCurrentUserArr] = useState(); 
      const[customerData, setCustomerData] = useState();
      const [formData, setFormData] = useState("");
      const [showModal, setShowModal] = useState(false);
      const modaluRef = useRef();

    useOnClickOutside(modaluRef, () => setShow(false));

      const getAllUsers = () => {
        console.log("getAllUsers");
        fetch('/users')
          .then(result => result.json())
          .then(body => {
            console.log("body",body);
            setUsersArr(  [...body]);
            console.log("usersArr",usersArr);
            return usersArr
          });
      };

      useEffect(()=>{
          if(!show){
            getAllUsers();
            }
        console.log("useEffect usersArr",usersArr);
      }, [show]);

      const handleDelete = async (uid) => {
        //setCurrentTransId
        console.log("uid",uid);
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body:  JSON.stringify({customer_id: uid})
        };

        const user = await fetch(`/user/del/${uid}` , requestOptions);
        const userJson = await user.json();
        console.log('userText',userJson); // logs 'OK
        getAllUsers();
      };

      const openModify = (userArr) => {
        console.log("openModify usersArr",userArr);  
        setCurrentUserId(userArr.customer_id);
        setCurrentUserArr(userArr);
        setShow(true);
        setShowModal('d-block');
        //modal.current.style.display = 'block';

      };

      const closeModify = (usersArr) => {
        setShow(false);
        setShowModal('d-none');
        //modal.current.style.display = 'none';
      }

    //   const handleModify = (formArr) => {
    //     fetch('/transactions/update/')
    //     .then(result => result.json())
    //     .then(body => {
    //       console.log("body",body);
    //       setTransArr(  [...body]);
    
    //     })
    //   };

    const addNewUser = () => {
       // setUpdate(f)
       setCurrentUserArr(null);
       setCurrentUserId('0');
        setShow(true);
        setShowModal('d-block');
    }

      const handleSubmit = (formObj) => {
       // e.preventDefault();
        //console.log("e.target.value", e.target.value);
        console.log("users formObj", formObj);
        //const formData =  e.target.value ;
        const formData = formObj;
        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        };

        fetch("/user/update", requestOptions)
          .then(response => response.json())
          .then(res => {
              console.log(res);
                return true;
            })
          .then( (success) => {
              console.log("success",success);
              setShow(false)
            });
      };
    
      const submitAdd = async (formObj) => {
        console.log("users submitAdd formObj", formObj);
        const formData = formObj;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        };

      const user = await fetch("/users", requestOptions)
      try {
        console.log("success user",user);
        setShow(false)
      } catch (e) {
        console.log(" error",e);
         }

      }

      const getLocation =  (user) => {
        const address = `${user.street} ${user.city} ${user.country}`
        let geocodeArr = ['1.0000', '2.00000','somelocation' ] ///await geocode(address);
        return  `latitude: ${geocodeArr[0]} longitude: ${geocodeArr[1]} location: ${geocodeArr[2]}`
      };

      //const OpenModalTransaction = () => {
          //show all transaction form this customer_id

      //}

      let modalUpdate = null;
      if( currentUserArr == null) {
          modalUpdate = <AddUser usersArr={usersArr} formData={formData} handleSubmit={(formData)=>submitAdd(formData)} />;
      } else {
          modalUpdate = <UpdateUser userArr={currentUserArr} formData={formData} handleSubmit={(formData)=>handleSubmit(formData)} />;
     
      }


     const usersNewArr = usersArr.map( (user) => {
          if(!user){
            return <></>;
          }
         console.log("map users", user.customer_id);

         return (<>
               <tr key={user.customer_id}>
                  <td>{user.customer_id}</td><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.email}</td><td>{user.gender}</td>
                  <td>{user.street}</td><td>{user.city}</td><td>{user.country}</td><td>{user.phone}</td><td>{user.cerdit_card_type}</td>
                  <td>{user.cerdit_card_number}</td><td>{user.currency}</td><td>{user.total_price}</td>        
                  <td><button  className="btn modify" onClick={() => openModify(user)}>Modify Customer</button></td>
                  <td><button className="btn delete" onClick={() => handleDelete(user.customer_id)}>Delete Customer</button></td>
                  <td><button className="btn trans-btn" onClick={() => props.openModalTransaction(user.customer_id)}>Customer Transactions</button></td>
              </tr>
              </>
       )});

    return (
            <>
              <Modal ref={modaluRef} show={show} showModal={showModal}  modalClosed={closeModify} >
                   {modalUpdate}
              </Modal>
              <table className='users-table' id='usersTable'>
                <thead><tr>
                  <th>customer_id</th><th>first_name</th><th>last_name</th><th>email address</th><th>gender</th>
                  <th>street</th><th>city</th><th>country</th><th >phone number</th><th>cerdit_card_type</th>
                  <th>cerdit_card_number</th><th>currency</th><th>total_price</th>
                  </tr>
                </thead>
                <tbody>
                  {usersNewArr}
                </tbody>
              </table>
          </>
    )}

export default Users; 
