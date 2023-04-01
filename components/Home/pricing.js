import React from 'react'

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the plan that works for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            All plans include unlimited access to our classes, as well as discounts on equipment and special events.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="md:flex md:flex-col md:justify-between md:p-8 md:border md:border-gray-300 md:rounded-lg">
              <div>
                <h3 className="text-2xl leading-6 font-medium text-gray-900">Basic</h3>
                <p className="mt-4 text-lg text-gray-500">
                  Perfect for beginners or those looking to try out our studio.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                    $50/month
                  </h4>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Basic
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <ul className="list-disc pl-5">
                    <li>Access to all classes</li>
                    <li>No equipment included</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="block w-full bg-red-600 border border-transparent rounded-md py-2 px-4 text-lg font-medium text-white text-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign up
                </a>
              </div>
            </div>
            <div className="md:flex md:flex-col md:justify-between md:p-8 md:border md:border-gray-300 md:rounded-lg mt-10 md:mt-0">
              <div>
                <h3 className="text-2xl leading-6 font-medium text-gray-900">Premium</h3>
                <p className="mt-4 text-lg text-gray-500">
                  Our most popular plan, great for dedicated students.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                    $100/month
                  </h4>
                  <div className="ml-4 flex-shrink-0">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Premium
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <ul className="list-disc pl-5">
                <li>Access to all classes</li>
                <li>One free piece of equipment per month</li>
                <li>Priority registration for special events</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a href="#" className="block w-full bg-red-600 border border-transparent rounded-md py-2 px-4 text-lg font-medium text-white text-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Pricing