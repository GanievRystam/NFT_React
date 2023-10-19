/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, SetStateAction} from "react";
import './email.scss'
interface EmailProps {
    state?: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}
export default function Email({state, setState}: EmailProps) {
    return(
        <>
            <div className={state ? 'blur':"blur blur-open"}></div>
            <div className={state ? "email": "email email-open"}>
                <div className="email-header">
                    <h2 className="email-header__head">Начни прямо сейчас!</h2>
                    <img className="email-header__exit" src='./img/Outline.svg' alt="cancel" onClick={() => setState(!state)}/>
                </div>
                <p className="email__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                <input type="text" className="email__input" placeholder="Ваш email"/>
                <a href="#" className="btnGreen btnGreen-email">
                    Оплатить
                </a>
            </div>
        </>
    )
}