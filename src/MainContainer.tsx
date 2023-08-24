import React from 'react';

export const MainContainer = () => {
    return (
        <div className={'h-screen flex flex-col justify-center items-center'}>
            <div className={'max-w-sm w-full max-h-full h-full flex flex-col justify-between mt-10 mb-28 border border-black relative'}>
                <div>
                    Hello World
                </div>
                <div className={'absolute -bottom-7 flex justify-center w-full items-center'}>
                    <button
                        className="p-0 w-16 h-16 bg-blue-700 rounded-full hover:bg-blue-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};