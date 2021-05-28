import React from 'react';
import '../css/DeletePopup.css';
import Axios from 'axios';

function DeletePopup (props) {
    const confirmDeletion = () => {
        Axios.delete(`http://localhost/3001/api/delete/product/${props.productToDeleteId}`);
        props.setTrigger(false);
    };
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup_inner">
                {props.children}
                <div className="buttons">
                    <input className="btn" type="button" id="cancel_btn" value="Cancelar" onClick={()=> props.setTrigger(false)} />
                    <input className="btn" type="button" id="confirm_btn" value="Confirmar" />
                </div>
            </div>
        </div>
    ) : "";

}

export default DeletePopup;