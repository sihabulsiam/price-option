import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
    const [open, setOpen]  = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard'}
      ];
      

    return (
        <nav className=" bg-slate-200 py-6">
           <div className="md:hidden text-3xl " onClick={() => setOpen(!open)}>
            {
                open === true ? <IoClose></IoClose> : <IoIosMenu ></IoIosMenu>
            }
           </div>
            <ul className={`md:flex mr-4 absolute md:static duration-1000
            ${open ? 'top-16' : '-top-60'}
            bg-slate-200 px-4`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;