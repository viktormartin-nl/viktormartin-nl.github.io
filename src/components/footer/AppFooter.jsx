import { FiGithub, FiGlobe } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import AppFooterCopyright from "./AppFooterCopyright";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://www.github.com/viktorsh818",
  },
  {
    id: 3,
    icon: <MdEmail />,
    url: "mailto:viktorsh818@gmail.com",
  },
  // {
  //   id: 4,
  //   icon: <FiTwitter />,
  //   url: "https://www.twitter.com/themukul_99",
  // },
  // {
  //   id: 5,
  //   icon: <FiLinkedin />,
  //   url: "https://www.linkedin.com/in/themukuldharashivkar",
  // },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 border-t-2 dark:border-neutral-600 border-neutral-300">
        {/* Footer social links */}
        <div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-amber-500 dark:text-amber-500 mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href={link.url}
                target="__blank"
                key={link.id}
                className="dark:bg-[#111111] hover:bg-neutral-200 dark:hover:bg-[#1b1b1b] cursor-pointer rounded-xl bg-gray-100 shadow-sm p-4 border  dark:border-white/5 border-black/5 hover:text-indigo-600"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </motion.a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
