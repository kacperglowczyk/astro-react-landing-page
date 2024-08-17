import NavMenu from "./NavMenu.jsx";

const Header = () => {
    return (
        <header>
            <div className="flex py-5 px-4">
                <div className="flex item-center pt-3">
                    <img src="images/logo.svg" alt="snap logo" />
                </div>
                <div className="flex-grow flex items-center z-20"><NavMenu/></div>
                <div className="flex items-center">
                    <a href="#">
                        <img className="block lg:hidden" src="images/icon-menu.svg" alt="Navigation menu"/>
                    </a>
                    <div className="hidden lg:flex lg:space-x-10 lg:items-center">
                        <div className="hover-text-almost-black cursor-pointer">Login</div>
                        <div>
                            <button className='border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2'> Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;