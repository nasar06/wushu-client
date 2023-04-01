import { MdOutlineAdsClick } from 'react-icons/md';
import { BiFastForwardCircle } from 'react-icons/bi';

const VideoTag = () => {
  return (
    <section className="py-12">
      <div className="mx-auto">
        <div className="flex w-full h-52">
          <div style={{backgroundColor: "#E2133A"}} className="shadow-lg p-8 w-full flex justify-end items-center gap-x-10">
            <div>
              <h1 className="text-3xl font-bold text-black">Easy Demo import</h1>
              <h3 className="text-3xl font-bold text-white">with a 1 mouse click</h3>
            </div>
            <div className='bg-black rounded-full p-2'><MdOutlineAdsClick className='text-4xl mr-0 text-white' /></div>
          </div>
          <div className="bg-black shadow-lg p-8 w-full flex items-center gap-x-10">
            <div style={{backgroundColor: "#E2133A"}} className=' rounded-full p-2'><BiFastForwardCircle className='text-4xl mr-0 text-white' /></div>
            <div>
              <h1 className="text-3xl font-bold text-white">Watch video tutorial</h1>
              <h3 style={{color: "#E2133A"}} className="text-3xl font-bold">How to install the demo</h3>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTag;