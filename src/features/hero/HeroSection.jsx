import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import CodeIgniterLogo from "../../assets/react.svg";
import HeroImage from "../../assets/hero-img.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className=" w-full min-h-screen bg-gray-950 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-10 md:py-0 py-8 grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-sm rounded-full font-semibold">
            Fullstack Developer
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            HELLO I'M <br /> Yoga Alfa Risqi.
          </h1>

          <p className="text-gray-300 max-w-md">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:opacity-90"
            >
              Lets Talk
            </a>
            <a
              href="#projects"
              className="border border-pink-500 text-pink-500 px-6 py-3 rounded-md font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              View Project
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-purple-400">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Image & Tech Icons */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src={HeroImage}
              alt="Yoga Alfa Risqi"
              className="rounded-4xl w-[280px] h-[350px] object-cover mx-auto pb-6  md:pb-8"
            />
          </div>
          <img
            src={CodeIgniterLogo}
            alt="CI"
            className="absolute top-0 left-4 w-12 h-12 bg-white p-1 rounded-md shadow-md"
          />
          <img
            src={CodeIgniterLogo}
            alt="Laravel"
            className="absolute top-0 right-4 w-12 h-12 bg-white p-1 rounded-md shadow-md"
          />
          <img
            src={CodeIgniterLogo}
            alt="React"
            className="absolute bottom-4 left-4 w-12 h-12 bg-white p-1 rounded-md shadow-md"
          />
          <img
            src={CodeIgniterLogo}
            alt="C#"
            className="absolute bottom-4 right-4 w-12 h-12 bg-white p-1 rounded-md shadow-md"
          />
          
        </div>
      </div>
    </section>
  );
}
