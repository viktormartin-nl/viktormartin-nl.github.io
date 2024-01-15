import ViktorImg from "../../assets/viktor.jpg";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const AboutDetailsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col min-h-fit items-center justify-start text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto md:pt-0 md:pb-12 md:mx-20 z-10"
    >
      <img
        src={ViktorImg}
        alt="Viktor Avatar"
        className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
      />
      <div className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10">
        <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
          <Reveal width="100%">Here's a Little Background.</Reveal>
        </h4>
        {/* <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 "> */}
        <div className="bg-white/70 dark:bg-[#101111]/70 p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out">
          {/* border dark:border-white/5 border-black/10 */}
          <p className="text-sm font-light">
            {/* Hi, I am{" "}
              <span className="font-semibold">Viktor Martin</span>{" "}
              and everyone calls me Viktor. I am a{" "}
              <span className="font-semibold">Full Stack Web Developer</span>. I
              am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Tailwind
              CSS and many more. I am looking for new opportunities to implement
              and increase my skills in software development and web
              development. */}
            Hi there, my name is{" "}
            <span className="font-semibold text-black dark:text-white">
              Viktor Martin
            </span>
            . Even from a young age, I liked computer
            technology; I was always interested in the news and trends of IT
            technologies with great pleasure. Then I realized that I really
            wanted to develop myself in the IT direction because this field is
            developing very dynamically, and I wanted to keep up with the times.
            The further I went, the more inspiration and the desire to study
            programming in more depth came to me. <br />
            <br /> I am an{" "}
            <span className="font-semibold text-black dark:text-white">
              open-minded and determined person
            </span>
            . I learn quickly, and I enjoy acquiring new knowledge. My hobbies
            include coding, playing football, and drawing. I believe that by
            working for you, I will be able to contribute something new and
            valuable to your teams. In turn, I will apply all my knowledge to
            make the company even more promising, and the team more productive
            and friendly. I am a person who will always bring a good mood and
            motivation to work. <br />
            <br />{" "}
            <span className="font-semibold text-black dark:text-white">
              I'm a team player.
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutDetailsSection;
