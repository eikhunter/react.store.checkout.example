import React from 'react'

import './Header.scss';
import Basket from '../../../assets/svg/Basket';

interface Props {
    basketTotal: number
    onClickBasket: () => void;
}

const Header: React.FC<Props> = ({ basketTotal, onClickBasket }) => {
    return (
        <div className="hd-Header">
            <div className="hd-Header_Inner">
                <div className="hd-Header_Body">
                    <div className="hd-Header_LogoContainer">
                        <p className="hd-Header_Logo">INSERT LOGO</p>
                    </div>

                    <button
                        className="hd-Header_Basket"
                        onClick={onClickBasket}
                        disabled={basketTotal === 0}
                    >
                        {basketTotal > 0 && (
                            <span className="hd-Header_BasketTotal">{basketTotal}</span>
                        )}
                        <Basket />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
