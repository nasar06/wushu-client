import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    //   return (
    //     <header className="absolute inset-x-0 top-0 z-50">
    //                 <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    //                     <div className="flex lg:flex-1">
    //                         <Link href="#" className="-m-1.5 p-1.5">
    //                             <span className="sr-only">Your Company</span>
    //                             <img className="h-24 w-auto" src="https://i.ibb.co/H2X8PSX/wushu1.png" alt="" />
    //                         </Link>
    //                     </div>
    //                     <div className="flex lg:hidden">
    //                         <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
    //                             <span className="sr-only">Open main menu</span>
    //                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //                             </svg>
    //                         </button>
    //                     </div>
    //                     <div className="hidden lg:flex lg:gap-x-12">
    //                         <Link href="" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>

    //                         <Link href="/shop" className="text-sm font-semibold leading-6 text-gray-900">Shop</Link>

    //                         <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">About</Link>

    //                     </div>
    //                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //                         <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
    //                     </div>
    //                 </nav>
    //                 {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    //                 <div className="lg:hidden" role="dialog" aria-modal="true">
    //                     {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
    //                     <div className="fixed inset-0 z-50"></div>
    //                     <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //                         <div className="flex items-center justify-between">
    //                             <Link href="#" className="-m-1.5 p-1.5">
    //                                 <span className="sr-only">Your Company</span>
    //                                 <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
    //                             </Link>
    //                             <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
    //                                 <span className="sr-only">Close menu</span>
    //                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //                                 </svg>
    //                             </button>
    //                         </div>
    //                         <div className="mt-6 flow-root">
    //                             <div className="-my-6 divide-y divide-gray-500/10">
    //                                 <div className="space-y-2 py-6">
    //                                     <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</Link>

    //                                     <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</Link>

    //                                     <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</Link>

    //                                     <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</Link>
    //                                 </div>
    //                                 <div className="py-6">
    //                                     <Link href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </header>
    //   );

    console.log(menuOpen)
    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-16 w-auto" src="https://i.ibb.co/H2X8PSX/wushu1.png" alt="" />
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/about" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </Link>
                                <Link href="/contact" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex items-center">
                            
                            <Link href="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/about" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </Link>
                                <Link href="/contact" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </Link>
                                <Link
                                href="#"
                                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                            {/* <Link
                                href="#"
                                className="ml-4 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Sign up
                            </Link> */}
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                        onClick={()=>setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            // aria-controls="mobile-menu"
                            // aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, toggle classes based on menu state. */}
            
            {
                menuOpen &&
            <div className="sm:hidden" id={menuOpen? "mobile-menu" : ""}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        About
                    </Link>
                    <Link href="/contact" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </Link>
                </div>
            </div>
            }
        </nav>
    );
};

export default Navbar;