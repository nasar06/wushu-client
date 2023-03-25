import React from 'react';
import { FlipCard } from 'react-flop-card';

function Banner() {
    return (
        <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family" />

                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                    
                        <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src="https://i.ibb.co/XyMMpwy/2.png" alt="people smiling" />
                    </div>
                    <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">Chinese</p>
                        <h1 tabIndex="0" className="text-black-600 text-4xl lg:text-6xl font-black mb-8">MARTIAL ARTS</h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">Welcome to the world of Wushu, where discipline, strength, and skill come together in a beautiful display of martial arts mastery. Our passion for this ancient art form drives us to perfect every movement, every strike, every technique until it becomes second nature.</p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;