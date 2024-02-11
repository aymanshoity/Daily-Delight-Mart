

const Banner = () => {
    return (
        <div className="hero min-h-screen object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/dpK5mhJ/ghgh.jpg)' }}>
            <div className="hero-content text-center text-red-500">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Daily <span className="text-black">Delight</span> Mart</h1>
                    <p className="mb-5 text-black font-semibold">Savor Every Bite! Indulge in Superior Quality and Unmatched Variety Your One-Stop Destination for Exceptional Grocery Finds!.</p>
                    <button className="btn bg-red-500 text-white">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;