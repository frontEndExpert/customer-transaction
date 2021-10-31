import React from 'react';
 
const Backdrop = (props) => {

let drops = null;
     if ( props.show) {   
        drops = (
            <div className='backdrop' onClick={props.clicked}>
            <style jsx>{`
            .backdrop {
                width: 100%;
                height: 100%;
                position: fixed;
                z-index: 100;
                left: 0;
                top: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }
            `}</style>
            </div>
        );
        }
return drops;

}
export default Backdrop;