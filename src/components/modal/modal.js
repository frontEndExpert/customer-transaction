import React, { useState,  } from 'react';
import Backdrop from './backdrop'

const Modal = (props) => {
    const [show, setShow] = useState(false);
    
    //height = '560px';
        return (
            <>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div  className='Modal'
                    style={{  transform: props.show ? 'translateY(0)' : 'translateY(-400vh)',
                        opacity: props.show ? '1' : '0'
                        // display: this.props.show ? 'block' : 'none'
                    }}>
                    {props.children}
                </div>
                
            </>
        );
}

export default Modal;