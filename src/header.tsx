import React from 'react';

export const Header = () => {
    return (
        <div className='mx-auto w-screen inset-x-0 fixed z-50 h-[0] px-[5vw]'>
            <div className='flex justify-between items-center pt-5 md:pt-10'>
                <a className='justify-self-start' href='#'><img className='h-[44.625px] md:h-[63.75px]' src='/logo.svg' /></a>
                <a className='justify-center' href='https://twitter.com/heistedd' target='_blank'><img className='h-[21px] md:h-[24px]' src='/twitter.svg' /></a>
            </div>
        </div>
    );
};