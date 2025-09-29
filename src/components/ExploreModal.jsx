import React from 'react'
import ReactDOM from 'react-dom'
import './CSS files/ExploreModal.css'
const ExploreModal = ({isOpen,onClose,children}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal-overlap" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}><i class="ri-close-circle-fill"></i></button>
            {children}
        </div>
    </div>,
    document.querySelector("#portal-root")
  )
}

export default ExploreModal