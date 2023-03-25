import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto py-8">
                <div className="grid md:grid-cols-3 gap-8 pl-5">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>123 Main Street</p>
                        <p>Anytown, USA 12345</p>
                        <p>(555) 555-5555</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" target="_blank">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            commodo varius mauris, eget dignissim lacus pretium eget. Sed
                            malesuada sapien vel ex consectetur, at iaculis lorem commodo.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;