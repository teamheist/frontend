import React from 'react';
import { Header } from './header';
import useWindowDimensions from './windowDimensions';

export const Home = () => {
    const { height, width } = useWindowDimensions();
    const adjustedWidth = width > 1920 ? 1920 : width;
    const ratio = height / adjustedWidth;
    let korean  = '';
    let hong = '';
    if (ratio >= 1) {
        korean = 'top-1/4'; 
        hong = 'bottom-0';
    }
    else {
        korean = 'top-1/2 sm:top-1/4';
        hong = 'top-[-10%] inset-x-0 max-h-[130%]';
    }
    return (
        <div className='mx-auto max-w-[1920px]'>
            <Header />
            <img className={`inset-x-0 w-screen fixed ${ korean } px-5`} src='/korean.svg' />
            <img id='hong' className={`fixed ${ hong } w-screen`} src='/hong.svg' />
        </div>
    );
};