import React from 'react';

function Contact() {
    return (
        <section className="text-gray-500 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386082.09695311824!2d-74.25986548679202!3d40.697670778292034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252f9dbd4161f%3A0x94e0f3aaefed1c2e!2sBangladesh%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1624264378512!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Chinese Martial arts <br />
                  Shantinagor, BFC Road
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-yellow-500 leading-relaxed">
                  martialarts@studio.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+1 234 567 8901</p>
              </div>
            </div>
          </div>
          <form
            action="#"
            className="lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              We'd love to hear from you!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease" />
                 </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-700 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-700 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
      >
        Submit
      </button>
    </form>
  </div>
</section>
    );
}

export default Contact;