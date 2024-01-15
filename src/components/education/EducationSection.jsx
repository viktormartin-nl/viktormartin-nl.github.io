import EducationCard from "./EducationCard";

const EducationSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 z-20 px-3 md:px-24 2xl:px-[32rem] mt-5 md:mt-0 md:pb-5">
      <EducationCard
        date="August 2022"
        title="BE in Computer Engineering"
        description="I have completed my bachelors degree from PES Modern College of Engineering, Pune with CGPA of 7.71."
      />
      <EducationCard
        date="February 2017"
        title="12th Grade"
        description="I have completed my 12th grade (HSC) from PVG's Muktangan English School & Jr. College, Pune."
      />
      <EducationCard
        date="March 2015"
        title="10th Grade"
        description="I have completed my 10th grade (SSC) from PVG's Muktangan English School & Jr. College, Pune."
      />
    </div>
  );
};
export default EducationSection;
