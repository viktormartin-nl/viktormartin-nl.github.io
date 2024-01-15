import useScrollToTop from "../hooks/useScrollToTop";
import { MdDoubleArrow } from "react-icons/md";

const ScrollToTopButton = () => {
  const { shown, scrollToTop } = useScrollToTop(300);
  return (
    <button
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-12 h-12 transition-transform duration-200 flex fixed right-5 bottom-5 bg-neutral-200 dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-[#0d0c0e] shadow-gray-400 justify-center items-center group z-30`}
    >
      <MdDoubleArrow className="text-3xl group-hover:text-amber-500 -rotate-90" />
    </button>
  );
};
export default ScrollToTopButton;
