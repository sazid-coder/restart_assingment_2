import React from 'react';

const Nav = () => {
    return (
        <>
            <div className="bg-white ">
                <nav className="flex items-center justify-between py-4 bg-white sticky top-0 z-50 h-20 container mx-auto px-4">
                    <div className="flex items-center gap-1">
                        <span className="text-xl text-black font-bold tracking-tight">CS — Ticket System</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-6 text-[13px] font-medium text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Download</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                        </ul>
                        <button className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md shadow-indigo-100">
                            <span>New Ticket</span>
                        </button>
                    </div>

                    <button className="lg:hidden btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0.0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Nav;