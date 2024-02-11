import React from 'react';

const SingleProduct = ({item}) => {
    // console.log(item)
    const {id,name,description,category,price,image}=item
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-[150px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>{description}</p>
                <p className='font-bold'>Price: {price} ৳</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;