// import { MdOutlineAdsClick } from 'react-icons/md';
// import { BiFastForwardCircle } from 'react-icons/bi';

// const VideoTag = () => {
//   return (
//     <section className="py-12">
//       <div className="mx-auto">
//         <div className="md:flex w-full md:h-52">
//           <div style={{backgroundColor: "#E2133A"}} className="shadow-lg p-8 w-full flex justify-end items-center gap-x-10">
//             <div>
//               <h1 className="md:text-3xl text-2xl font-bold text-black">Easy Demo import</h1>
//               <h3 className="md:text-3xl text-2xl font-bold text-white">with a 1 mouse click</h3>
//             </div>
//             <div className='bg-black rounded-full p-2'><MdOutlineAdsClick className='text-4xl mr-0 text-white' /></div>
//           </div>
//           <div className="bg-black shadow-lg p-8 w-full flex items-center gap-x-10">
//             <div style={{backgroundColor: "#E2133A"}} className=' rounded-full p-2'><BiFastForwardCircle className='text-4xl mr-0 text-white' /></div>
//             <div>
//               <h1 className="md:text-3xl text-2xl font-bold text-white">Watch video tutorial</h1>
//               <h3 style={{color: "#E2133A"}} className="md:text-3xl text-2xl font-bold">How to install</h3>
//             </div>


//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoTag;



import { motion } from "framer-motion";
import { MdOutlineAdsClick } from 'react-icons/md';
import { BiFastForwardCircle } from 'react-icons/bi';

const VideoTag = () => {
  return (
    <motion.section className="py-12 md:flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div style={{ backgroundColor: "#E2133A" }} className="shadow-lg p-12 w-full flex justify-end items-center gap-x-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div>
          <h1 className="md:text-3xl text-2xl font-bold text-black">Easy Demo import</h1>
          <h3 className="md:text-3xl text-2xl font-bold text-white">with a 1 mouse click</h3>
        </div>
        <motion.div className='bg-black rounded-full p-2'
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdOutlineAdsClick className='text-4xl mr-0 text-white' />
        </motion.div>
      </motion.div>
      <motion.div className="bg-black shadow-lg p-12 w-full flex items-center gap-x-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div style={{ backgroundColor: "#E2133A" }} className=' rounded-full p-2'
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <BiFastForwardCircle className='text-4xl mr-0 text-white' />
        </motion.div>
        <div>
          <h1 className="md:text-3xl text-2xl font-bold text-white">Watch video tutorial</h1>
          <h3 style={{ color: "#E2133A" }} className="md:text-3xl text-2xl font-bold">How to install</h3>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VideoTag;