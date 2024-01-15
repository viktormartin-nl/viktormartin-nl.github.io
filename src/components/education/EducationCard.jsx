import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";

const EducationCard = ({ date, title, description }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 text-left"
    >
      <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-2">
        <h2 className="font-bold text-lg text-center text-amber-500 dark:text-amber-500">
          {title}
        </h2>
        <div className="flex items-center justify-center font-normal text-indigo-600 gap-2">
          <MdDateRange />
          <h3 className="font-medium text-sm">{date}</h3>
        </div>
      </div>
      <p className="pt-5 text-sm font-light">{description}</p>
    </motion.div>
  );
};
export default EducationCard;
