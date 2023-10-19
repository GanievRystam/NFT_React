import React, { Dispatch, SetStateAction } from "react";
import './offer.scss'
import Button from "../button/Button";
interface offerProps {
    state?: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}
export default function Offer ({state, setState}: offerProps) {
    return(
        <div className="offer">
            <h1 className="offer__head">Не упусти возможность войти в <span className="offer__head_bold">прибыльную нишу</span></h1>
            <p className="offer__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
            <img className="offer__ellipse" src="./img/Ellipse 30.svg" alt="ellipse" />
            <Button text="Начать зарабатывать на NFT" className="btnGreen-offer" setState={setState} state={state}/>
        </div>
    )
}