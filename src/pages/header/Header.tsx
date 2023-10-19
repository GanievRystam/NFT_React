import React, {useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Offer from "../../components/offer/Offer";
import './header.scss'
import Button from "../../components/button/Button";
import Email from "../../components/email/Email";
export default function Header () {
    const [emailExit, setEmailExit] = useState(true);
    return(
        <header className="header">
            <Sidebar/>
            <div className="header-img">
                <Offer state={emailExit} setState={setEmailExit}/>
                <div className="header-img__wrap">
                    <img className="header-img__man" src="./img/MAN.png" alt="" />
                    <p className="offer__text offer__text_under">Получи все&nbsp;нужные навыки для&nbsp;заработка на&nbsp;NFT всего за&nbsp;28&nbsp;дней!</p>
                    <Button className="btnGreen__offer" text="Начать зарабатывать на NFT" state={emailExit} setState={setEmailExit}/>
                </div>
            </div>
            <Email state={emailExit} setState={setEmailExit}/>
        </header>
    )
}