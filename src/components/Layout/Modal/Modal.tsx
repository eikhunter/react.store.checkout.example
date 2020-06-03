import React from 'react';

import './Modal.scss';

interface Props {
    open?: boolean
    closeModal?: () => void;
}

const Modal: React.FC<Props> = ({ children, closeModal, open }) => {
    return (
        <div className={open ? 'mod-Modal mod-Modal-open' : 'mod-Modal'}>
            <div className="mod-Modal_Backdrop" onClick={closeModal}></div>

            <div className="mod-Modal_Content">
                <div className="mod-Modal_Inner">
                    <div className="mod-Modal_Body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
