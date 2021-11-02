import React from 'react';
import './backdrop.scss' ;

const Backdrop = (props) => {

let drops = null;
     if ( props.show) {   
        drops = (
            <div className='backdrop' onClick={props.clicked}>
                {props.children}
            </div>
        );
        }
return drops;

}
export default Backdrop;