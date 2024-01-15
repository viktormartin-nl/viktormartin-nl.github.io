import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./motion";
import Featured from "./Featured";
import anaTechnology from "../../assets/anaTechnology.png";
import buybackart from "../../assets/buybackart.png";
import dunkelbraun from "../../assets/dunkelbraun.png";
import lionWerbung from "../../assets/lionWerbung.png";
import havenly from "../../assets/havenly.png";
import arabforWeb from "../../assets/arabforWeb.png";
import arabforClient from "../../assets/arabforClient.png";
import arabforVendor from "../../assets/arabforVendor.png";

import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";

export const projectsData = [
  {
    id: 0,
    thumbnail: buybackart,
    title: "Buyback Art",
    description:
      "Buyback Art is an online platform that allows users to buy and sell art. Buyback Art offers a wide variety of art, from paintings and sculptures to prints and photographs. Buyback Art also offers a variety of services, such as art appraisal, framing, and shipping.",
    live: "https://www.buybackart.com/",
    code: "https://www.buybackart.com/",
    tech: ["Django", "React.js", "Bootstrap", "Ubuntu"],
    featured: true,
  },
  {
    id: 1,
    thumbnail: anaTechnology,
    title: "Ana Technology",
    description:
      "Ana Technology is a leading technology provider that caters to several industry types. We offer specialized services and innovative solutions, upgrading the way you do business.",
    live: "https://anatechnology.net/",
    code: "https://anatechnology.net/",
    tech: ["Django", "React", "MySQL", "PWA"],
    featured: true,
  },
  {
    id: 2,
    thumbnail: havenly,
    title: "Havenly",
    description:
      "Havenly is an online interior design service that helps people create beautiful and functional homes.",
    live: "https://havenly.com/",
    code: "https://havenly.com/",
    featured: false,
    tech: ["Node.js", "React", "Next.js", "WordPress"],
  },
  {
    id: 3,
    thumbnail: lionWerbung,
    title: "Lion Werbung",
    description:
      "This is website for advertising in Germany.",
    live: "https://stickdatei-vektordatei.de/",
    code: "https://stickdatei-vektordatei.de/",
    tech: ["PHP", "Laravel", "jQuery"],
    featured: false,
  },
  {
    id: 4,
    thumbnail: arabforWeb,
    title: "Arabfor",
    description: "This is a platform for booing and shipping from several vendors in Saudi Arabia.",
    live: "https://arabfor.sa/",
    code: "https://arabfor.sa/",
    featured: false,
    tech: ["Laravel", "Vue.js", "Vuetify"]
  },
  {
    id: 5,
    thumbnail: dunkelbraun,
    title: "Dunkel braun",
    description:
      "Dunkel braun is a celebration of the perfect blends of exotic flavours and indigenous tastes, that have the best tinge of rich Turkish cuisine.",
    live: "https://dunkelbraun.com/",
    code: "https://dunkelbraun.com/",
    tech: ["WordPress", "Woocommerce", "Elementor"],
    featured: false,
  },
  {
    id: 6,
    thumbnail: arabforClient,
    title: "Arabfor Customer App",
    description: "This is a mobile app for customers in Saudi Arabia.",
    live: "https://play.google.com/store/apps/details?id=com.arabfor.arabforClient",
    code: "https://play.google.com/store/apps/details?id=com.arabfor.arabforClient",
    featured: false,
    tech: ["Laravel", "Flutter", "Bloc"]
  },
  {
    id: 7,
    thumbnail: arabforVendor,
    title: "Arabfor Vendor App",
    description: "This is a mobile app for vendors in Saudi Arabia.",
    live: "https://play.google.com/store/apps/details?id=com.arabfor.vendor_app&hl=en&gl=US",
    code: "https://play.google.com/store/apps/details?id=com.arabfor.vendor_app&hl=en&gl=US",
    featured: false,
    tech: ["Laravel", "Flutter", "Bloc"]
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Recent projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
