import avatar from "../../assets/programmer.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ActiveComponent from "./ActiveComponent";
import BackgroundCircles from "../BackgroundCirclesHero/BackgroundCircles";
import SliderText from "../HeroMarquee/SliderText";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ViktorImg from "../../assets/viktor.jpg";
import { MdFileDownload } from "react-icons/md";
import { LuMouse } from "react-icons/lu";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  const [sliderTextLoader, setSliderTextLoader] = useState(false);

  setInterval(() => {
    setSliderTextLoader(true);
  }, 3500);

  const downloadToasterHandler = () => {
    // toast.success("Thank you for downloading!");
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-gray-100 dark:bg-neutral-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 pl-3 pr-3 pb-2 pt-2">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={ViktorImg} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Viktor Martin
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                Thank you for downloading my cv!
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center p-5 text-center pt-32 z-30 overflow-y-hidden overflow-x-hidden"
    >
      {!sliderTextLoader && <BackgroundCircles />}
      {sliderTextLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SliderText />
        </motion.div>
      )}
      {/* <div className="z-0">
        <BlurCircles />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="z-0 p-5"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 6,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={avatar}
          alt="avatar"
          className="w-48 h-48 md:w-52 md:h-52 xl:w-52 xl:h-52 object-cover bg-gradient-to-b from-amber-500 to-amber-700 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/30 pointer-events-none"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-100 group-hover:scale-105 transition duration-1000 group-hover:duration-200 animate-tilt z-0"></div>
          <motion.a
            href="/Viktor_Martin_Resume.pdf"
            download={true}
            className="group relative flex items-center justify-center mt-10 bg-white dark:bg-[#0d0c0e] bg-transparent hover:bg-amber-500 dark:hover:bg-amber-500 py-2 rounded-xl font-semibold tracking-[1px] hover:text-black duration-300"
            onClick={downloadToasterHandler}
          >
            <span>
              <MdFileDownload className="text-xl group-hover:text-black z-0 font-semibold" />
            </span>
            <p className="text-sm md:text-lg mx-2 font-light">Download CV</p>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="text-sm pt-3 md:text-xl text-amber-500 font-bold z-0"
      >
        Full Stack Developer
      </motion.h2>

      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="py-3 text-xl md:text-3xl lg:text-5xl text-center font-bold leading-[1] z-0"
      >
        <span className="text-slate-700 dark:text-slate-200">
          <TypeAnimation
            sequence={[
              "Welcome👋",
              2000,
              "The Name's Viktor",
              2000,
              "Guy-Who-Loves-Drawing.js",
              2000,
              "<ButLovesToCodeMore/>",
              2000,
            ]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </span>
      </motion.div>

      <div className="z-10">
        <ActiveComponent />
      </div>

      {/* {arrow down animation} */}
      <div className="mt-20 mb-0 down-arrow z-0">
        {/* <FaArrowDown className="text-amber-500 text-3xl animate-bounce " /> */}
        <LuMouse className="text-neutral-500 text-3xl " />
      </div>
    </section>
  );
};

export default Hero;
