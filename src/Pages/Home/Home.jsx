import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AllProducts from "../Product/allProducts";
import Banner from "./Banner";


const Home = () => {
    const [valueFromNavbar,setValueFromNavbar]=useState('')
    const handleValueChange=(inputCategory)=>{
        console.log(inputCategory)
        setValueFromNavbar(inputCategory)
        
        
    }
    console.log(valueFromNavbar)
    return (
        <div className="bg-gray-300">
            <Navbar onValueChange={handleValueChange}></Navbar>
            <Banner></Banner>
            <AllProducts valueFromNavbar={valueFromNavbar}></AllProducts>
        </div>
    );
};

export default Home;