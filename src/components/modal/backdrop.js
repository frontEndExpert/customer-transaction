import React from 'react';
 
const Backdrop = (props) => {

let drops = null;
     if ( props.show) {   
        drops = (
            <div className='backdrop' onClick={props.clicked}>
           
            </div>
        );
        }
return drops;

}
export default Backdrop;