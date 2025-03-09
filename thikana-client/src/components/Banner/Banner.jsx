import banner_image from '../../assets/images/banner/banner.png'

const Banner = () => {
    return (
        <div className='mt-6'>
            <div className="bg py-20" style={{ backgroundImage: `url(${banner_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <h2 className='text-4xl font-bold text-white mx-20 text-center'>Seeking Your Space?</h2>
                    <p className='text-sm text-gray-400 text-center mt-3'>Seize the opportunity to own your dream property <br />
                    invest in your future today!</p>
                    <div className='text-center mt-6'>
                        <button className='border border-[#0C7C1D] rounded-l-xl  px-3 py-1 text-base bg-[#56705a36]  text-white '>Rent</button>
                        <button className='border border-[#0C7C1D] rounded-r-xl  px-3 py-1 text-base bg-[#0C7C1D]  text-white '>Buy</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;