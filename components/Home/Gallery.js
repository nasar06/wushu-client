import Image from 'next/image';
import React from 'react';
import { LightBox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";
import data from '../../public/data.json'; // <--- Importing Sample JSON Data

const Gallery = () => {
    // State
    const [toggle, setToggle] = React.useState(false);
    const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <div>
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center">Photo Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item, index) => (
                            <div key={item.id}>
                                <div className="relative h-0 overflow-hidden" style={{ paddingTop: '100%' }}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        onClick={() => {
                                            lightBoxHandler(true, index);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

		
            <LightBox
                state={toggle}
                event={lightBoxHandler}
                data={data}
                imageWidth="60vw"
                imageHeight="70vh"
                thumbnailHeight={50}
                thumbnailWidth={50}
                setImageIndex={setSIndex}
                imageIndex={sIndex}
            />
        </div>
    );
}


export default Gallery
