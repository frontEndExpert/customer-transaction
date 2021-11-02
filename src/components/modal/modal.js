import React, { useState, useRef, forwardRef } from 'react';
import Backdrop from './backdrop'
import './modal.scss';


const Modal = (props) => {
    const [show, setShow] = useState(false);
    console.log('modal props.show', props.show);

    // const modalClosed = () => {
    //     props.closeModal ;
    // }


        return (
            <>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div  className='Modal'
                    style={{  transform: props.show ? 'translateY(0)' : 'translateY(-400vh)',
                        opacity: props.show ? '1' : '0',
                        display: props.show ? 'block' : 'none'
                    }}>
                    {props.children}
                </div>
               
            </>
        );
};

export default Modal;