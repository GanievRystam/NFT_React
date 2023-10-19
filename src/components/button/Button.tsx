import React, { Dispatch, SetStateAction } from "react";
import './button.scss'
interface buttonProps {
    className: string;
    text?: string;
    state?: boolean;
    setState: Dispatch<SetStateAction<boolean>> ;

}
export default function Button ({className, text, state, setState}: buttonProps) {
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className={`btnGreen ${className ? className : ''}`} onClick={() => setState(!state)}>
            {text}
        </a>
    )
}