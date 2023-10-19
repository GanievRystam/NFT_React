import React, { useState } from "react";
import ButtonPrive from "../buttonPrive/ButtonPrive";
import './sidebar.scss'
export default function Sidebar () {
    const [exit, setExit] = useState(true);
    return(
        <>
            <div className="sidebar">
                <img className="sidebar__imgTop" src="./img/Ellipse 24 (1).png" alt="" />
                <div className="sidebar-logo">
                    <img className="sidebar-logo__img" src='./img/Frame 3296.svg' alt="logo" />
                </div>
                <div className="sidebar-items">
                    
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="sidebar-items__link"> Главная</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="sidebar-items__link"> Что даст обучение</a>
                </div>
                <ButtonPrive/>
            </div>
            <div className={exit? 'blur':"blur blur-open"}></div>
            <div className="sidebar-mobile-nav">
                <img className="sidebar__imgTop" src="./img/Ellipse 24 (1).png" alt=""/>
                <img className="sidebar-mobile-nav__img" src='./img/Frame 3296.svg' alt="logo" />
                <img className="sidebar-mobile-nav__burger " src='./img/burger.png' alt=""  onClick={() => setExit(!exit)}/>
            </div>
            <div className={exit ? "sidebar-mobile" : "sidebar-mobile sidebar-mobile-open " }>
                <div className="sidebar-logo">
                    <img className="sidebar-logo__img" src='./img/Frame 3296.svg' alt="logo" />
                    <img className="sidebar-logo__exit" src='./img/Outline.svg' alt="cancel" onClick={() => setExit(!exit)} />
                </div>
                <div className="sidebar-items-mobile">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="sidebar-items__link"> Главная</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="sidebar-items__link"> Что даст обучение</a>
                </div>
                <ButtonPrive/>
            </div>
        </>
        
    )
}