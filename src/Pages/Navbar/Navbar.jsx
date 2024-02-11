import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = ({onValueChange}) => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-black font-semibold text-xl mr-2' : 'text-white font-semibold text-xl mr-2')}>Home</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'text-black font-semibold text-xl mr-2' : 'text-white font-semibold text-xl mr-2')}>Dashboard</NavLink>
        <NavLink to='/profile' className={({ isActive }) => (isActive ? 'text-black font-semibold text-xl mr-2' : 'text-white font-semibold text-xl mr-2')}>Profile</NavLink>
    </>
    const [selection,setSelection]=useState('')
    
    const handleSelect=e=>{
        console.log(e.target.value)
        const category=e.target.value;
        setSelection(category)
        
        
    }
    onValueChange(selection)
    
    
    return (
        <div className="navbar bg-red-500 fixed z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <img className="h-[80px] w-[80px]" src="../../../public/DD logo.jpg" alt="" />
                    <h2 className="text-white text-2xl font-bold">Daily Delight Mart</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 items-center">
                    {links}
                    <li>
                        <select  onChange={handleSelect} className="select select-bordered w-full min-w-lg">
                            <option disabled selected>Search</option>
                            <option>Cooking</option>
                            <option>Fruits and Vegetables</option>
                            <option>Frozen Food</option>
                            <option>Baby Care</option>
                            <option>Drinks</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn text-xl font-semibold">My Account</button>
            </div>
        </div>
    );
};

export default Navbar;