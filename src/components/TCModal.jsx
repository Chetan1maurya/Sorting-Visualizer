import React from 'react'
import ReactDOM from 'react-dom'
import './CSS files/TCModal.css'
const TCModal = ({isOpen,onClose,children}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal2-overlap" onClick={onClose}>
        <div className="modal2-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal2-close" onClick={onClose}><i class="ri-close-circle-fill"></i></button>
            {children}
        </div>
    </div>,
    document.getElementById("portal-root")
  )
}

export default TCModal