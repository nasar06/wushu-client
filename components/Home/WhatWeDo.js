// import React from 'react';
// import { FaGlobe, FaHandshake, FaFistRaised } from "react-icons/fa";
// function WhatWeDo() {
//     return (
//         <section className="bg-gray-100 py-20">
//             <div className="max-w-5xl mx-auto px-6">
//                 <h2 className="text-4xl font-bold mb-10 text-center">What We Do</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-600">
//                             <FaGlobe className="w-8 h-8" />
//                         </div>
//                         <h3 className="text-xl font-bold mt-6 mb-2">Global Presence</h3>
//                         <p className="text-gray-600 text-base">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
//                             ac enim eu quam rhoncus bibendum.
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-100 text-green-600">
//                             <FaHandshake className="w-8 h-8" />
//                         </div>
//                         <h3 className="text-xl font-bold mt-6 mb-2">Community Building</h3>
//                         <p className="text-gray-600 text-base">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
//                             ac enim eu quam rhoncus bibendum.
//                         </p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <div className="flex items-center justify-center h-16 w-16 rounded-md bg-red-100 text-red-600">
//                             <FaFistRaised className="w-8 h-8" />
//                         </div>
//                         <h3 className="text-xl font-bold mt-6 mb-2">Martial Arts Training</h3>
//                         <p className="text-gray-600 text-base">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
//                             ac enim eu quam rhoncus bibendum.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default WhatWeDo;

import React from 'react';
import { FaGlobe, FaHandshake, FaFistRaised } from "react-icons/fa";

function WhatWeDo() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-blue-500 text-white mb-4">
              <FaGlobe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Presence</h3>
            <p className="text-gray-600 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac enim eu quam rhoncus bibendum.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-green-500 text-white mb-4">
              <FaHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Building</h3>
            <p className="text-gray-600 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac enim eu quam rhoncus bibendum.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-red-500 text-white mb-4">
              <FaFistRaised className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Martial Arts Training</h3>
            <p className="text-gray-600 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac enim eu quam rhoncus bibendum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;