import { useState } from "react";
import SharedHeading from "../Shared/SharedHeading";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { list } from "postcss";

const AllProducts = ({valueFromNavbar}) => {
    console.log(valueFromNavbar)
    const category=valueFromNavbar
    console.log(category)
    const categoryNames=['All Products','Cooking','Fruits and Vegetables','Frozen Food','Baby Care','Drinks']
    const [categories, setCategories] = useState([])
    const [displayCategories, setDisplayCategories] = useState([])
    const [clicked,setClicked]=useState('')
    const handleClicked=name=>{
        console.log(name)
        setClicked(name)
    
    }
    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
                setDisplayCategories(data)
            })
    }, [])
    useEffect(()=>{
        if(category==='Cooking' || clicked==='Cooking'){
            const cooking=categories.filter(item=>item.category==="Cooking")
            console.log(cooking)
            setDisplayCategories(cooking)
        }else if(category==='Fruits and Vegetables' || clicked==='Fruits and Vegetables'){
            const veg=categories.filter(item=>item.category==="Fruits and Vegetables")
            console.log(veg)
            setDisplayCategories(veg)
        }else if(category==='Frozen Food' || clicked==='Frozen Food'){
            const frozen=categories.filter(item=>item.category==="Frozen Food")
            console.log(frozen)
            setDisplayCategories(frozen)
        }else if(category==='Baby Care' || clicked==='Baby Care'){
            const baby=categories.filter(item=>item.category==="Baby Care")
            console.log(baby)
            setDisplayCategories(baby)
        }else if(category==='Drinks' || clicked==='Drinks'){
            const Drinks=categories.filter(item=>item.category==="Drinks")
            console.log(Drinks)
            setDisplayCategories(Drinks)
        }else if( clicked==='All Products'){
            
            setDisplayCategories(categories)
        }
    },[category,categories,clicked])
    return (
        <div className="py-20 lg:w-[1280px] mx-auto  ">
            <SharedHeading heading={'All Products'}></SharedHeading>
            <div className="flex justify-center gap-6">
                <div className="w-1/4 ">
                    <ul  className="menu bg-base-200 rounded-lg ">
                        {
                            categoryNames.map((name,index)=>
                            <li key={index} onClick={()=>handleClicked(name)}><a>{name}</a></li>)
                        }
                    </ul>
                </div>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        displayCategories.map(item => <SingleProduct key={item.id} item={item}></SingleProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProducts;