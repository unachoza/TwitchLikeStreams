import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className=" ui standard modal visible active">
                <div className="header">Delete STream </div> 
                <div className="content"> Are you sure you want to delete this?</div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui  button">Cancel</button>
                </div>
        </div>
        </div>, document.querySelector('#modal')
        
    )
}

export default Modal 