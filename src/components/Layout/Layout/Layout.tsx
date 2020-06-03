import React from 'react';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';

interface Props {
    basketTotal: number;
    onClickBasket: () => void;
    closeModal?: () => void;
    modalContent?: React.ReactNode;
    modalOpen?: boolean;
}

const Layout: React.FC<Props> = ({
                                     children,
                                     basketTotal,
                                     onClickBasket,
                                     closeModal,
                                     modalContent,
                                     modalOpen
                                 }) => {
    return (
        <div className="lyt-Layout">
            <Header basketTotal={basketTotal} onClickBasket={onClickBasket} />

            {children}

            {modalContent && (
                <Modal closeModal={closeModal} open={modalOpen}>
                    {modalContent}
                </Modal>
            )}
        </div>
    );
};

export default Layout;
