import { BsStars } from "react-icons/bs";
import ViktorImg from "../../assets/viktor.jpg";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

const ContactMessage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="min-h-fit flex flex-col justify-start items-center py-16 px-2 2xl:px-32 md:px-5 text-center bg-gradient-to-b from-white via-neutral-200 to-white dark:from-[#0d0c0e] dark:via-neutral-900 dark:to-[#0d0c0e]"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-700 dark:text-neutral-200 pb-10">
        <h1>Good Design is</h1>
        <h1>Noticeable & Great Design</h1>
        <h1 className="flex gap-2 items-center justify-center">
          is{" "}
          <span className="text-amber-500 font-extrabold"> Invincible. </span>
          <span className="relative flex">
            <BsStars className="text-amber-500 absolute inline-flex animate-ping opacity-30" />
            <BsStars className="text-amber-500 relative inline-flex" />
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={ViktorImg}
          alt=""
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-neutral-400 dark:border-neutral-500"
        />
        <p className="text-xs md:text-sm opacity-80 font-extralight">
          Viktor Martin
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-light text-sm md:text-xl pt-10 opacity-50">
          Let's shape the projects of your future together.
        </h3>
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-2xl md:text-3xl">Feel free to brief me</h2>
          <span className="animate-bounce">
            <MdDoubleArrow className="text-2xl md:text-3xl rotate-90" />
          </span>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactMessage;
