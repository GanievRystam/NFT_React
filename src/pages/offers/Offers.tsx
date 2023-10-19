import React from "react";
import WhatGive from "../../components/whatGive/WhatGive";
import './offers.scss'
export default function offers () {
    return(
        <div className="offers">
            <div className="offers-imgs">
                <img className="offers-imgs__blue" src="./img/offer/Ellipse 26.svg" alt="" />
                <img className="offers-imgs__topShadow" src="./img/offers/Ellipse 27.png" alt="" />
                <img className="offers-imgs__bottomShadow" src="./img/offer/Ellipse 27.png" alt="" />
                <img className="offers-imgs__pink" src="./img/offer/Ellipse 25.svg" alt="" />
                <img className="offers-imgs__pinkTop" src="./img/offer/pinTop.png" alt="" />
            </div>
            <h1 className="offers__header">Что даст тебе обучение?</h1>
            <div className="offers__items">
                <WhatGive title="Откроешь свой первый криптокошелек и научишься с ним работать" img="./img/offer/star.png"/>
                <WhatGive title="Поймёшь, как выбирать правильные дропы" img="./img/offer/tough.png"/>
                <WhatGive title="Построишь план по быстрому приумножению заработанных средств" img="./img/offer/dollars.png"/>
                <WhatGive title="Узнаешь кто такие холдеры и флипперы" img="./img/offer/glass.png"/>
            </div>
        </div>
    )
}