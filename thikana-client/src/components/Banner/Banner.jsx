import banner_image from "../../assets/images/banner/banner.png";

const Banner = () => {
  return (
    <div className="mt-6">
      <div
        className="bg py-20"
        style={{
          backgroundImage: `url(${banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h2 className="text-4xl font-bold text-white mx-20 text-center">
            Seeking Your Space?
          </h2>
          <p className="text-sm text-gray-400 text-center mt-3">
            Seize the opportunity to own your dream property <br />
            invest in your future today!
          </p>
          <div className="text-center mt-6">
            <button className="border border-[#0C7C1D] rounded-l-xl  px-3 py-1 text-base bg-[#56705a36]  text-white ">
              Rent
            </button>
            <button className="border border-[#0C7C1D] rounded-r-xl  px-3 py-1 text-base bg-[#0C7C1D]  text-white ">
              Buy
            </button>
          </div>
          <div className="flex justify-center gap-6">
           <div className=" mt-6 ">
           <select className="select select-success  rounded-2xl w-40  outline-none ">
              <option disabled selected>
             Location
              </option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
           </div>
           <div className=" mt-6 ">
           <select className="select select-success w-40  rounded-2xl   outline-none ">
              <option disabled selected>
             Category
              </option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
           </div>
           <div className=" mt-6 ">
           <select className="select select-success w-40  rounded-2xl   outline-none ">
              <option disabled selected>
             Type
              </option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
           </div>
           <div className=" mt-6 ">
           <select className="select select-success w-40 rounded-2xl  outline-none ">
              <option disabled selected>
             Status
              </option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
           </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-6">
          <button className="border border-[#0C7C1D]  w-80 rounded-xl  py-2 text-base bg-[#0C7C1D]  text-white ">
              Find
            </button>
          </div>
      </div>
    </div>
  );
};

export default Banner;
