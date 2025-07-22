import { NavLink } from "react-router-dom";
export default function Navbar() {
    return(
        <nav className="flex justify-between items-center w-full py-4 px-4 bg-black/70 backdrop-blur-md">
            <div>
                {/* <img src="" alt="" /> */}
                <h1 className="text-black">Subomi anime Blog</h1>
            </div>
            <div>
                <ul className=" flex gap-14 text-[#f8f8f8]">
                    <li className="px-2 py-2 flex justify-center items-center"><NavLink to="#">Home</NavLink></li>
                    <li className="px-2 py-2 flex justify-center items-center"><NavLink to="#">Connect</NavLink></li>
                    <li className="px-2 py-2 flex justify-center items-center"><NavLink to="#">Sign Up</NavLink></li>
                    <li className="px-2 py-2 flex justify-center items-center"><NavLink to="#">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}