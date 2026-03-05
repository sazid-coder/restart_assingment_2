import React from 'react';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                        {/* Column 1: Brand & Description */}
                        <div className="lg:col-span-1">
                            <h2 className="text-xl font-bold mb-6">CS — Ticket System</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Company</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Services</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Information */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Information</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Social Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <div className="bg-white text-black rounded-full p-1">
                                        <Twitter size={14} fill="black" />
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-white text-black rounded-sm">
                                        <Linkedin size={22} fill="black" strokeWidth={0} />
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-white text-black rounded-full">
                                        <Facebook size={22} fill="black" strokeWidth={0} />
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={20} className="text-white" />
                                    <a href="mailto:support@cst.com" className="hover:text-white transition-colors">support@cst.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Divider */}
                    <div className="border-t border-gray-800 pt-8 flex justify-center items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} CS — Ticket System. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;