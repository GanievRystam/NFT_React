import React from 'react';
import './whatGive.scss';

interface whatGiveProps {
    title?: string;
    img?: string;
}
export default function WhatGive({title, img}: whatGiveProps) {
    return(
        <div className='whatGive'>
            <img className='whatGive__img' src={img} alt="emodji" />
            <p className='whatGive__text'>{title}</p>
        </div>
    );
}