import React from 'react';
import { Header } from './header';
import useWindowDimensions from './windowDimensions';

export const Home = () => {
    const { height, width } = useWindowDimensions();
    const adjustedWidth = width > 1920 ? 1920 : width;
    const ratio = height / adjustedWidth;
    let hong = '';
    if (ratio >= 1) hong = 'fixed bottom-0';
    else hong = 'fixed top-[-10%]';
    return (
        <div className='mx-auto max-w-[1920px]'>
            <Header />
            { (height < width || width >= 475) &&
            <div>
                <div>
                    <img className='inset-x-0 w-screen fixed top-1/2 sm:top-1/4 px-5' src='/korean.svg' />
                    <img id='hong' className={`${ hong } inset-x-0 w-screen max-h-[130%]`} src='/hong.svg' />
                </div>
            </div>
            }
            { height >= width && width < 475 &&
            <div>
                <img className='inset-x-0 w-screen fixed top-1/4 px-5' src='/korean.svg' />
                <div className='absolute bottom-0'><img id='hong' className='w-screen' src='/hong.svg' /></div>
            </div> 
            }
        </div>
    );
};