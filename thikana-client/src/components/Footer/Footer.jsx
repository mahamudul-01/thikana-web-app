import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-[#132513] flex justify-center items-center gap-6 px-20 text-white py-10">
        <h2 className="text-2xl font-semibold">Get A Free Consultation </h2>
        <label className="input rounded-xl ">
          
          <input type="email" className="grow" placeholder="Your Email" />
          <span className="bg-[#016434] text-xl rounded-full p-1"><IoIosSend /></span>
        </label>
      </div>
      <div className="bg-[#001400] text-white text-center py-12 px-10">

        <div className="flex justify-center items-center gap-6">
            <p className="text-sm">Home</p>
            <p className="text-sm">Experiences</p>
            <p className="text-sm">News</p>
            <p className="text-sm">About Us</p>
            <p className="text-sm">Jobs</p>
            <p className="text-sm">Contact</p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
        <FaFacebookF />
        <FaTwitter />
        <TfiYoutube />

        </div>
        <p className="text-sm text-gray-500 font-thin mt-6">© Copyrights DevGuru | 2025</p>


      </div>
    </div>
  );
};

export default Footer;
