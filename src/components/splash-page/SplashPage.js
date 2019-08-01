import React from 'react';
import './SplashPage.scss'

function SplashPage(props) {
    return( 
        <div>
            <svg width="177" height="142" viewBox="0 0 177 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path shapeRendering="geometricPrecision" fillRule="evenodd" clipRule="evenodd" d="M101.842 37.041L131.578 134L160.773 38.808L141.265 65.3431L101.842 37.041ZM101.698 36.572L130.858 19.9433L90.4815 0L101.698 36.572ZM132.016 20.0826L161.537 36.3157L172.675 7.90244e-06L132.016 20.0826Z"/>
                    <path shapeRendering="geometricPrecision" d="M101.414 45.8645L128.371 132.605L91.4513 107.953H54.921L27.8 132.605L4 98.8219V73.865L101.414 45.8645Z"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="176.675" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default SplashPage;