import React from 'react';

import './Button.scss';

interface Props {
    onClick: () => void;
    text: string;
    secondary?: boolean;
}

const Button: React.FC<Props> = ({ onClick, text, secondary }) => {
    return (
        <button
            className={secondary ? 'btn-Button btn-Button-secondary' : 'btn-Button'}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
