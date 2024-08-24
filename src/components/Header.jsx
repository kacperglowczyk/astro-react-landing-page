import { useState } from 'react';
import NavMenu from "./NavMenu.jsx";
import Sidebar from "./Sidebar.jsx";


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    

    return (
        <header>
            <div className="flex py-5 px-4">
                <div className="flex item-center pt-3">
                    <img src="./images/logo.svg" alt="snap logo" />
                </div>
                <div className="flex-grow flex items-center z-20">
                    <NavMenu />
                </div>
                <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                        <img src="images/icon-menu.svg" alt="Navigation menu" />
                    </button>
                    <div className="hidden lg:flex lg:space-x-10 lg:items-center">
                        <div className="hover-text-almost-black cursor-pointer">Login</div>
                        <div>
                            <button className='border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar for mobile */}
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </header>
    );
};

export default Header;
