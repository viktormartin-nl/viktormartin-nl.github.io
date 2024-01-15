import { motion } from "framer-motion";
import BlurCircles from "../BlurCirclesBG/BlurCircles";
import Quote from "../quote/Quote";

const QuoteSection = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background blur circles */}
        <BlurCircles />
      </motion.div>

      {/* Quote */}
      <div className="relative pt-10 md:pt-5 lg:pt-0">
        <Quote />
      </div>
    </div>
  );
};
export default QuoteSection;
